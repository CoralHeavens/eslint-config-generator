import React, { useState } from 'react';
import { RULES } from './rules';

const ESLintConfigBuilder = () => {
  const [rules, setRules] = useState(RULES);

  const handleEnableChange = (id) => {
    setRules(rules.map(rule => rule.id === id ? { ...rule, enabled: !rule.enabled } : rule));
  };

  const handleLevelChange = (id, level) => {
    setRules(rules.map(rule => rule.id === id ? { ...rule, level } : rule));
  };

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
        // Check if any rule in this group is selected
        const isPackageSelected = group.some(rule => rule.enabled);
        if (!isPackageSelected) {
          return acc;
        }

        // Add all rules in this package, set to 'off' unless enabled
        group.forEach(rule => {
          acc[`${rule.package}/${rule.ruleName}`] = rule.enabled ? rule.level : 'off';
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
    <div>
      <h1>ESLint Config Builder</h1>
      <button onClick={generateConfig}>Generate ESLint Config</button>
      <table>
        <thead>
          <tr>
            <th>Enabled</th>
            <th>Package</th>
            <th>Rule Name</th>
            <th>Level</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rules.map(rule => (
            <tr key={rule.id}>
              <td>
                <input
                  type="checkbox"
                  checked={rule.enabled}
                  onChange={() => handleEnableChange(rule.id)}
                />
              </td>
              <td>{rule.package}</td>
              <td>{rule.ruleName}</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name={`level-${rule.id}`}
                    value="error"
                    checked={rule.level === 'error'}
                    disabled={!rule.enabled}
                    onChange={() => handleLevelChange(rule.id, 'error')}
                  />
                  Error
                </label>
                <label>
                  <input
                    type="radio"
                    name={`level-${rule.id}`}
                    value="warning"
                    checked={rule.level === 'warning'}
                    disabled={!rule.enabled}
                    onChange={() => handleLevelChange(rule.id, 'warning')}
                  />
                  Warning
                </label>
                <label>
                  <input
                    type="radio"
                    name={`level-${rule.id}`}
                    value="off"
                    checked={rule.level === 'off'}
                    disabled={!rule.enabled}
                    onChange={() => handleLevelChange(rule.id, 'off')}
                  />
                  Off
                </label>
              </td>
              <td>{rule.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          height: "40px"
        }}
      />
    </div>
  );
};

export default ESLintConfigBuilder;