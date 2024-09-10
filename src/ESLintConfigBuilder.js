import React, { useState } from 'react';
import eslintRules from './eslintRules';  // Import the extended rules list

const title = "ESLint Config Builder";
const generateLabel = "Generate ESLint Config";

const LEVELS = {
  error: {
    label: "Error",
    value: "error",
  },
  warning: {
    label: "Warning",
    value: "warning",
  },
  off: {
    label: "Off",
    value: "off",
  },
};

const COLUMNS = [
  "Enabled",
  "Package",
  "Rule Name",
  "Level",
  "Description",
];

const ESLintConfigBuilder = () => {
  const [rules, setRules] = useState(eslintRules);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle checkbox change for enabling/disabling rules
  const handleEnableChange = (id) => {
    setRules(rules.map(rule => rule.id === id ? { ...rule, enabled: !rule.enabled } : rule));
  };

  // Handle level change (Error, Warning, Off)
  const handleLevelChange = (id, level) => {
    setRules(rules.map(rule => rule.id === id ? { ...rule, level } : rule));
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter rules based on search term
  const filteredRules = rules.filter(rule =>
    rule.ruleName.toLowerCase().includes(searchTerm) ||
    rule.package.toLowerCase().includes(searchTerm)
  );

  // Generate ESLint config and required package installation instructions, then trigger download
  const generateConfig = () => {
    const selectedRules = rules.filter(rule => rule.enabled);

    // Group rules by package
    const packageGroups = rules.reduce((acc, rule) => {
      if (!acc[rule.package]) acc[rule.package] = [];
      acc[rule.package].push(rule);
      return acc;
    }, {});

    // Create the ESLint rules configuration object, including all rules from selected packages with 'off' by default
    const config = {
      rules: Object.values(packageGroups).reduce((acc, group) => {
        // Add all rules in this package, set to 'off' unless enabled
        group.forEach(rule => {
          if (rule.enabled) {
            acc[`${rule.package}/${rule.ruleName}`] = rule.options 
              ? [rule.level, ...rule.options] 
              : rule.level;
          } else {
            acc[`${rule.package}/${rule.ruleName}`] = 'off';
          }
        });
        return acc;
      }, {}),
    };

    // Extract unique package names required for the selected rules
    const packages = [...new Set(selectedRules.map(rule => rule.package))];

    // Create package installation instructions
    const packageInstructions = `To install the required packages, run:\n\nnpm install --save-dev ${packages.join(' ')}`;

    // Combine ESLint config and package instructions into a single text
    const combinedContent = `${JSON.stringify(config, null, 2)}\n\n${packageInstructions}`;

    // Create a Blob and trigger download
    const blob = new Blob([combinedContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'eslint-config-and-packages.txt';
    link.click();

    // Cleanup the URL object
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        {title}
      </h1>
      <div className="flex mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search by rule or package..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generateConfig}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          {generateLabel}
        </button>
      </div>
      <div className="overflow-x-auto w-full max-w-4xl">
        {filteredRules.length > 0 ? (
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                {COLUMNS.map((column) => (
                  <th
                    key={column}
                    className="px-4 py-2 text-center"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRules.map(rule => (
                <tr key={rule.id} className="hover:bg-gray-100">
                  <td
                    className="border px-4 py-2 text-center align-middle cursor-pointer"
                    onClick={() => handleEnableChange(rule.id)}
                  >
                    <input
                      type="checkbox"
                      checked={rule.enabled}
                      readOnly
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 outline-none pointer-events-none"
                    />
                  </td>
                  <td className="border px-4 py-2 text-center align-middle">{rule.package}</td>
                  <td className="border px-4 py-2 text-center align-middle">{rule.ruleName}</td>
                  <td className="border border-x-0 border-b-0 -mt-[1px] px-4 py-2 flex items-center justify-center space-x-4 align-middle">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`level-${rule.id}`}
                        value="error"
                        checked={rule.level === 'error'}
                        disabled={!rule.enabled}
                        onChange={() => handleLevelChange(rule.id, LEVELS.error.value)}
                      />
                      <span className="ml-1">
                        {LEVELS.error.label}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`level-${rule.id}`}
                        value="warning"
                        checked={rule.level === 'warning'}
                        disabled={!rule.enabled}
                        onChange={() => handleLevelChange(rule.id, LEVELS.warning.value)}
                      />
                      <span className="ml-1">
                        {LEVELS.warning.label}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`level-${rule.id}`}
                        value="off"
                        checked={rule.level === 'off'}
                        disabled={!rule.enabled}
                        onChange={() => handleLevelChange(rule.id, LEVELS.off.value)}
                      />
                      <span className="ml-1">
                        {LEVELS.off.label}
                      </span>
                    </label>
                  </td>
                  <td className="border px-4 py-2 text-center align-middle">{rule.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            {}
          </div>
        )}
      </div>
    </div>
  );
};

export default ESLintConfigBuilder;
