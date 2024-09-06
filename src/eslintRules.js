const eslintRules = [
    // Core ESLint Rules
    { id: 1, package: 'eslint', ruleName: 'no-unused-vars', description: 'Disallow unused variables.', enabled: false, level: 'warn' },
    { id: 2, package: 'eslint', ruleName: 'eqeqeq', description: 'Require the use of === and !== instead of == and !=.', enabled: false, level: 'error' },
    { id: 3, package: 'eslint', ruleName: 'no-console', description: 'Disallow the use of console statements in production code.', enabled: false, level: 'warn' },
    { id: 4, package: 'eslint', ruleName: 'semi', description: 'Require semicolons at the end of statements.', enabled: false, level: 'warn' },
    { id: 5, package: 'eslint', ruleName: 'quotes', description: 'Enforce the consistent use of single quotes.', enabled: false, level: 'warn' },
    { id: 6, package: 'eslint', ruleName: 'no-debugger', description: 'Disallow the use of debugger.', enabled: false, level: 'warn' },
    { id: 7, package: 'eslint', ruleName: 'no-alert', description: 'Disallow the use of alert, confirm, and prompt.', enabled: false, level: 'error' },
    { id: 8, package: 'eslint', ruleName: 'no-magic-numbers', description: 'Disallow the use of magic numbers.', enabled: false, level: 'error', options: [{ ignore: [-1, 0, 1] }] },
    { id: 9, package: 'eslint', ruleName: 'camelcase', description: 'Enforce consistent naming of variables, functions, and classes.', enabled: false, level: 'error' },
    { id: 10, package: 'eslint', ruleName: 'arrow-parens', description: 'Require or disallow parentheses around arrow function arguments.', enabled: false, level: 'warn' },
    { id: 11, package: 'eslint', ruleName: 'no-extra-boolean-cast', description: 'Disallow unnecessary boolean casts.', enabled: false, level: 'warn' },
    { id: 12, package: 'eslint', ruleName: 'no-mixed-spaces-and-tabs', description: 'Disallow mixed spaces and tabs for indentation.', enabled: false, level: 'warn' },
    { id: 13, package: 'eslint', ruleName: 'padding-line-between-statements', description: 'Require or disallow an empty line before return statements.', enabled: false, level: 'warn' },
    { id: 14, package: 'eslint', ruleName: 'radix', description: 'Enforce the consistent use of the radix argument when using parseInt.', enabled: false, level: 'error' },
    { id: 15, package: 'eslint', ruleName: 'no-shadow', description: 'Disallow variable declarations from shadowing variables in the outer scope.', enabled: false, level: 'off' },
    { id: 16, package: '@typescript-eslint', ruleName: 'no-shadow', description: 'Disallow variable declarations from shadowing variables declared in the outer scope in TypeScript.', enabled: false, level: 'error' },
    { id: 17, package: '@typescript-eslint', ruleName: 'no-unused-vars', description: 'Disallow unused variables in TypeScript.', enabled: false, level: 'warn' },

    // eslint-plugin-import Rules
    { id: 18, package: 'eslint-plugin-import', ruleName: 'import/no-unresolved', description: 'Ensure imports point to files/modules that can be resolved.', enabled: false, level: 'off' },
    { id: 19, package: 'eslint-plugin-import', ruleName: 'import/no-extraneous-dependencies', description: 'Disallow unnecessary dependencies in import statements.', enabled: false, level: 'off' },
    { id: 20, package: 'eslint-plugin-import', ruleName: 'import/extensions', description: 'Ensure consistent use of file extension within import paths.', enabled: false, level: 'off' },
    { id: 21, package: 'eslint-plugin-import', ruleName: 'import/named', description: 'Ensure named imports correspond to a named export in the remote file.', enabled: false, level: 'off' },
    { id: 22, package: 'eslint-plugin-import', ruleName: 'import/no-import-module-exports', description: 'Prevent mixing import and module.exports.', enabled: false, level: 'off' },
    { id: 23, package: 'eslint-plugin-import', ruleName: 'import/newline-after-import', description: 'Enforce a newline after import statements.', enabled: false, level: 'warn' },
    { id: 24, package: 'eslint-plugin-import', ruleName: 'import/order', description: 'Enforce a consistent order for import statements.', enabled: false, level: 'warn' },
    { id: 25, package: 'eslint-plugin-import', ruleName: 'import/no-duplicates', description: 'Disallow duplicate imports.', enabled: false, level: 'warn' },

    // eslint-plugin-jsx-a11y Rules
    { id: 26, package: 'eslint-plugin-jsx-a11y', ruleName: 'click-events-have-key-events', description: 'Ensure clickable elements are keyboard accessible.', enabled: false, level: 'off' },
    { id: 27, package: 'eslint-plugin-jsx-a11y', ruleName: 'heading-has-content', description: 'Ensure headings have content and are not empty.', enabled: false, level: 'off' },
    { id: 28, package: 'eslint-plugin-jsx-a11y', ruleName: 'anchor-is-valid', description: 'Ensure anchors are valid, enforce ARIA roles, states, and properties.', enabled: false, level: 'warn' },
    { id: 29, package: 'eslint-plugin-jsx-a11y', ruleName: 'aria-props', description: 'Ensure all ARIA props are valid.', enabled: false, level: 'warn' },
    { id: 30, package: 'eslint-plugin-jsx-a11y', ruleName: 'no-static-element-interactions', description: 'Ensure static elements have no interactive handlers.', enabled: false, level: 'warn' },

    // eslint-plugin-react Rules
    { id: 31, package: 'eslint-plugin-react', ruleName: 'react/jsx-uses-react', description: 'Enforce that React is correctly marked as a dependency in JSX files.', enabled: false, level: 'warn' },
    { id: 32, package: 'eslint-plugin-react', ruleName: 'react/react-in-jsx-scope', description: 'React must be in scope when using JSX.', enabled: false, level: 'off' },
    { id: 33, package: 'eslint-plugin-react', ruleName: 'react/jsx-filename-extension', description: 'Restrict file extensions that may contain JSX.', enabled: false, level: 'off' },
    { id: 34, package: 'eslint-plugin-react', ruleName: 'react/function-component-definition', description: 'Enforce a specific function type for function components.', enabled: false, level: 'error' },
    { id: 35, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-useless-fragment', description: 'Disallow unnecessary fragments.', enabled: false, level: 'warn' },
    { id: 36, package: 'eslint-plugin-react', ruleName: 'react/jsx-props-no-spreading', description: 'Disallow JSX prop spreading.', enabled: false, level: 'warn' },
    { id: 37, package: 'eslint-plugin-react', ruleName: 'react/jsx-pascal-case', description: 'Enforce PascalCase for user-defined JSX components.', enabled: false, level: 'error' },
    { id: 38, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-script-url', description: 'Disallow using `javascript:` URLs.', enabled: false, level: 'error' },
    { id: 39, package: 'eslint-plugin-react', ruleName: 'react/static-property-placement', description: 'Enforce static class properties placement.', enabled: false, level: 'warn' },
    { id: 40, package: 'eslint-plugin-react', ruleName: 'react/no-typos', description: 'Disallow typos in JSX elements.', enabled: false, level: 'error' },
    { id: 41, package: 'eslint-plugin-react', ruleName: 'react/prefer-stateless-function', description: 'Enforce stateless functional components.', enabled: false, level: 'warn' },
    { id: 42, package: 'eslint-plugin-react', ruleName: 'react/self-closing-comp', description: 'Enforce self-closing tags in JSX.', enabled: false, level: 'warn' },
    { id: 43, package: 'eslint-plugin-react', ruleName: 'react/no-unused-prop-types', description: 'Prevent definitions of unused prop types.', enabled: false, level: 'warn' },
    { id: 44, package: 'eslint-plugin-react', ruleName: 'react/no-array-index-key', description: 'Disallow using array index as a key in React components.', enabled: false, level: 'warn' },
    { id: 45, package: 'eslint-plugin-react', ruleName: 'react/jsx-uses-vars', description: 'Enforce that variables used in JSX are declared.', enabled: false, level: 'warn' },
    { id: 46, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-undef', description: 'Disallow undeclared variables in JSX.', enabled: false, level: 'warn' },
    { id: 47, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-duplicate-props', description: 'Disallow duplicate props in JSX.', enabled: false, level: 'error' },
    { id: 48, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-comment-textnodes', description: 'Disallow comments as a child of JSX nodes.', enabled: false, level: 'error' },
    { id: 49, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-target-blank', description: 'Disallow target="_blank" in JSX.', enabled: false, level: 'error' },
    { id: 50, package: 'eslint-plugin-react', ruleName: 'react/jsx-key', description: 'Enforce that key prop is specified on elements with arrays or iterators.', enabled: false, level: 'error' },
    { id: 51, package: 'eslint-plugin-react', ruleName: 'react/jsx-no-bind', description: 'Disallow function binding in JSX props.', enabled: false, level: 'error' },
    { id: 52, package: 'eslint-plugin-react', ruleName: 'react/no-deprecated', description: 'Avoid deprecated methods in React.', enabled: false, level: 'error' },
    { id: 53, package: 'eslint-plugin-react', ruleName: 'react/boolean-prop-naming', description: 'Enforce consistent naming of boolean props.', enabled: false, level: 'error' },

    // eslint-plugin-react-hooks Rules
    { id: 54, package: 'eslint-plugin-react-hooks', ruleName: 'react-hooks/rules-of-hooks', description: 'Enforce rules of hooks in React hooks.', enabled: false, level: 'error' },
    { id: 55, package: 'eslint-plugin-react-hooks', ruleName: 'react-hooks/exhaustive-deps', description: 'Enforce dependencies in React hooks effect.', enabled: false, level: 'warn' },

    // eslint-plugin-compat Rules
    { id: 56, package: 'eslint-plugin-compat', ruleName: 'compat/compat', description: 'Ensure browser compatibility of APIs.', enabled: false, level: 'warn' },

    // eslint-plugin-promise Rules
    { id: 57, package: 'eslint-plugin-promise', ruleName: 'promise/no-nesting', description: 'Avoid nesting promises.', enabled: false, level: 'warn' },
    { id: 58, package: 'eslint-plugin-promise', ruleName: 'promise/always-return', description: 'Ensure promises always have a return value.', enabled: false, level: 'warn' },
    { id: 59, package: 'eslint-plugin-promise', ruleName: 'promise/no-return-wrap', description: 'Avoid wrapping values in Promise.resolve or Promise.reject when not needed.', enabled: false, level: 'warn' },
    { id: 60, package: 'eslint-plugin-promise', ruleName: 'promise/param-names', description: 'Ensure promise parameter names are appropriate.', enabled: false, level: 'error' },

    // eslint-plugin-security Rules
    { id: 61, package: 'eslint-plugin-security', ruleName: 'security/detect-eval-with-expression', description: 'Disallow the use of eval().', enabled: false, level: 'error' },
    { id: 62, package: 'eslint-plugin-security', ruleName: 'security/detect-unsafe-regex', description: 'Disallow unsafe regular expressions.', enabled: false, level: 'warn' },
    { id: 63, package: 'eslint-plugin-security', ruleName: 'security/detect-buffer-noassert', description: 'Disallow the use of the Buffer constructor with the noAssert flag.', enabled: false, level: 'warn' },
    { id: 64, package: 'eslint-plugin-security', ruleName: 'security/detect-new-buffer', description: 'Disallow the use of the Buffer constructor.', enabled: false, level: 'warn' },

    // eslint-plugin-jest Rules
    { id: 65, package: 'eslint-plugin-jest', ruleName: 'jest/no-disabled-tests', description: 'Disallow disabled tests in Jest.', enabled: false, level: 'warn' },
    { id: 66, package: 'eslint-plugin-jest', ruleName: 'jest/no-focused-tests', description: 'Disallow focused tests in Jest.', enabled: false, level: 'error' },
    { id: 67, package: 'eslint-plugin-jest', ruleName: 'jest/no-identical-title', description: 'Disallow identical titles in Jest test suites.', enabled: false, level: 'error' },
    { id: 68, package: 'eslint-plugin-jest', ruleName: 'jest/prefer-to-have-length', description: 'Suggest using toHaveLength() in Jest assertions.', enabled: false, level: 'warn' },
    { id: 69, package: 'eslint-plugin-jest', ruleName: 'jest/prefer-expect-assertions', description: 'Require assertions in Jest tests to ensure correctness.', enabled: false, level: 'warn' },
];

export default eslintRules;
