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

    // eslint-plugin-node Rules
    { id: 70, package: 'eslint-plugin-node', ruleName: 'node/no-extraneous-import', description: 'Disallow imports of extraneous packages.', enabled: false, level: 'error' },
    { id: 71, package: 'eslint-plugin-node', ruleName: 'node/no-missing-import', description: 'Disallow missing imports.', enabled: false, level: 'error' },
    { id: 72, package: 'eslint-plugin-node', ruleName: 'node/no-unsupported-features/es-syntax', description: 'Disallow unsupported ECMAScript syntax.', enabled: false, level: 'error' },
    { id: 73, package: 'eslint-plugin-node', ruleName: 'node/no-deprecated-api', description: 'Disallow the use of deprecated APIs in Node.js.', enabled: false, level: 'warn' },

    // eslint-plugin-unicorn Rules
    { id: 74, package: 'eslint-plugin-unicorn', ruleName: 'unicorn/filename-case', description: 'Enforce a case style for filenames.', enabled: false, level: 'warn' },
    { id: 75, package: 'eslint-plugin-unicorn', ruleName: 'unicorn/no-abusive-eslint-disable', description: 'Disallow the use of ESLint disable comments without explanations.', enabled: false, level: 'warn' },
    { id: 76, package: 'eslint-plugin-unicorn', ruleName: 'unicorn/prefer-type-error', description: 'Enforce the use of TypeError when throwing errors for type-related issues.', enabled: false, level: 'error' },
    { id: 77, package: 'eslint-plugin-unicorn', ruleName: 'unicorn/no-nested-ternary', description: 'Disallow nested ternary expressions.', enabled: false, level: 'warn' },

    // eslint-plugin-prettier Rules
    { id: 78, package: 'eslint-plugin-prettier', ruleName: 'prettier/prettier', description: 'Ensure code conforms to Prettier formatting rules.', enabled: false, level: 'warn' },

    // eslint-plugin-sonarjs Rules
    { id: 79, package: 'eslint-plugin-sonarjs', ruleName: 'sonarjs/no-duplicate-string', description: 'Disallow duplicate strings in the code.', enabled: false, level: 'warn' },
    { id: 80, package: 'eslint-plugin-sonarjs', ruleName: 'sonarjs/cognitive-complexity', description: 'Enforce cognitive complexity limits to keep functions readable.', enabled: false, level: 'warn' },
    { id: 81, package: 'eslint-plugin-sonarjs', ruleName: 'sonarjs/no-inverted-boolean-check', description: 'Disallow inverted boolean checks to improve code readability.', enabled: false, level: 'warn' },

    // eslint-plugin-eslint-comments Rules
    { id: 82, package: 'eslint-plugin-eslint-comments', ruleName: 'eslint-comments/no-unused-disable', description: 'Disallow unused eslint-disable comments.', enabled: false, level: 'warn' },
    { id: 83, package: 'eslint-plugin-eslint-comments', ruleName: 'eslint-comments/no-restricted-disable', description: 'Disallow disable of specific ESLint rules.', enabled: false, level: 'error' },
    { id: 84, package: 'eslint-plugin-eslint-comments', ruleName: 'eslint-comments/require-description', description: 'Require descriptions in ESLint directive comments.', enabled: false, level: 'warn' },

    // eslint-plugin-yml Rules
    { id: 85, package: 'eslint-plugin-yml', ruleName: 'yml/no-empty-document', description: 'Disallow empty YAML documents.', enabled: false, level: 'error' },
    { id: 86, package: 'eslint-plugin-yml', ruleName: 'yml/indent', description: 'Enforce consistent indentation in YAML files.', enabled: false, level: 'warn' },
    { id: 87, package: 'eslint-plugin-yml', ruleName: 'yml/no-empty-mapping-value', description: 'Disallow empty mapping values in YAML.', enabled: false, level: 'warn' },

    // eslint-plugin-lodash Rules
    { id: 88, package: 'eslint-plugin-lodash', ruleName: 'lodash/prefer-lodash-method', description: 'Prefer Lodash methods over native ones where applicable.', enabled: false, level: 'warn' },
    { id: 89, package: 'eslint-plugin-lodash', ruleName: 'lodash/prop-shorthand', description: 'Prefer property shorthand syntax in Lodash methods.', enabled: false, level: 'warn' },
    { id: 90, package: 'eslint-plugin-lodash', ruleName: 'lodash/no-double-unwrap', description: 'Disallow double unwrapping in Lodash chains.', enabled: false, level: 'error' },

    // eslint-plugin-functional Rules
    { id: 91, package: 'eslint-plugin-functional', ruleName: 'functional/no-let', description: 'Disallow the use of let and var, encouraging the use of const.', enabled: false, level: 'warn' },
    { id: 92, package: 'eslint-plugin-functional', ruleName: 'functional/immutable-data', description: 'Disallow mutating data structures.', enabled: false, level: 'error' },
    { id: 93, package: 'eslint-plugin-functional', ruleName: 'functional/no-loop-statement', description: 'Disallow loop statements to promote functional programming techniques.', enabled: false, level: 'warn' },

    // eslint-plugin-deprecation Rules
    { id: 94, package: 'eslint-plugin-deprecation', ruleName: 'deprecation/deprecation', description: 'Disallow the use of deprecated APIs.', enabled: false, level: 'warn' },

    // eslint-plugin-security-node Rules
    { id: 95, package: 'eslint-plugin-security-node', ruleName: 'security-node/detect-possible-timing-attacks', description: 'Detect potential timing attacks in code.', enabled: false, level: 'warn' },
    { id: 96, package: 'eslint-plugin-security-node', ruleName: 'security-node/non-literal-reg-expr', description: 'Disallow the use of non-literal regular expressions.', enabled: false, level: 'error' },

    // eslint-plugin-jsonc Rules
    { id: 97, package: 'eslint-plugin-jsonc', ruleName: 'jsonc/sort-keys', description: 'Enforce sorted keys in JSON objects.', enabled: false, level: 'warn' },
    { id: 98, package: 'eslint-plugin-jsonc', ruleName: 'jsonc/no-dupe-keys', description: 'Disallow duplicate keys in JSON objects.', enabled: false, level: 'error' },
    { id: 99, package: 'eslint-plugin-jsonc', ruleName: 'jsonc/no-octal', description: 'Disallow octal literals in JSON.', enabled: false, level: 'warn' },

    // eslint-plugin-react-perf Rules
    { id: 100, package: 'eslint-plugin-react-perf', ruleName: 'react-perf/jsx-no-new-object-as-prop', description: 'Disallow new object literals as props.', enabled: false, level: 'warn' },
    { id: 101, package: 'eslint-plugin-react-perf', ruleName: 'react-perf/jsx-no-new-function-as-prop', description: 'Disallow new function declarations as props.', enabled: false, level: 'warn' },
    { id: 102, package: 'eslint-plugin-react-perf', ruleName: 'react-perf/jsx-no-jsx-as-prop', description: 'Disallow passing JSX as a prop.', enabled: false, level: 'warn' },

    // eslint-plugin-rxjs Rules
    { id: 103, package: 'eslint-plugin-rxjs', ruleName: 'rxjs/no-ignored-subscription', description: 'Disallow ignoring subscriptions in RxJS.', enabled: false, level: 'warn' },
    { id: 104, package: 'eslint-plugin-rxjs', ruleName: 'rxjs/no-async-subscribe', description: 'Disallow async functions in RxJS subscribe.', enabled: false, level: 'error' },
    { id: 105, package: 'eslint-plugin-rxjs', ruleName: 'rxjs/no-nested-subscribe', description: 'Disallow nested subscribes in RxJS.', enabled: false, level: 'warn' },

    // eslint-plugin-you-dont-need-lodash-underscore Rules
    { id: 106, package: 'eslint-plugin-you-dont-need-lodash-underscore', ruleName: 'you-dont-need-lodash-underscore/is-nil', description: 'Disallow Lodash _.isNil usage when JavaScript provides similar functionality.', enabled: false, level: 'warn' },
    { id: 107, package: 'eslint-plugin-you-dont-need-lodash-underscore', ruleName: 'you-dont-need-lodash-underscore/for-each', description: 'Disallow Lodash _.forEach usage when JavaScript provides similar functionality.', enabled: false, level: 'warn' },
    { id: 108, package: 'eslint-plugin-you-dont-need-lodash-underscore', ruleName: 'you-dont-need-lodash-underscore/get', description: 'Disallow Lodash _.get usage when JavaScript provides similar functionality.', enabled: false, level: 'warn' },

    // eslint-plugin-jest-dom Rules
    { id: 109, package: 'eslint-plugin-jest-dom', ruleName: 'jest-dom/prefer-checked', description: 'Prefer .toBeChecked() in Jest DOM assertions.', enabled: false, level: 'warn' },
    { id: 110, package: 'eslint-plugin-jest-dom', ruleName: 'jest-dom/prefer-required', description: 'Prefer .toBeRequired() in Jest DOM assertions.', enabled: false, level: 'warn' },
    { id: 111, package: 'eslint-plugin-jest-dom', ruleName: 'jest-dom/prefer-enabled-disabled', description: 'Prefer .toBeEnabled() or .toBeDisabled() in Jest DOM assertions.', enabled: false, level: 'warn' },

    // eslint-plugin-testing-library Rules
    { id: 112, package: 'eslint-plugin-testing-library', ruleName: 'testing-library/no-node-access', description: 'Disallow direct access to DOM nodes in Testing Library.', enabled: false, level: 'warn' },
    { id: 113, package: 'eslint-plugin-testing-library', ruleName: 'testing-library/no-wait-for-multiple-assertions', description: 'Disallow multiple assertions inside waitFor in Testing Library.', enabled: false, level: 'warn' },
    { id: 114, package: 'eslint-plugin-testing-library', ruleName: 'testing-library/prefer-find-by', description: 'Prefer findBy queries over waitFor in Testing Library.', enabled: false, level: 'warn' },

    // eslint-plugin-regexp Rules
    { id: 115, package: 'eslint-plugin-regexp', ruleName: 'regexp/no-dupe-disjunctions', description: 'Disallow duplicate disjunctions in RegExp.', enabled: false, level: 'warn' },
    { id: 116, package: 'eslint-plugin-regexp', ruleName: 'regexp/no-empty-alternative', description: 'Disallow empty alternatives in RegExp.', enabled: false, level: 'error' },
    { id: 117, package: 'eslint-plugin-regexp', ruleName: 'regexp/prefer-w', description: 'Prefer using \\w over character classes.', enabled: false, level: 'warn' },

    // eslint-plugin-typescript-sort-keys Rules
    { id: 118, package: 'eslint-plugin-typescript-sort-keys', ruleName: 'typescript-sort-keys/interface', description: 'Enforce sorted keys in TypeScript interfaces.', enabled: false, level: 'warn' },
    { id: 119, package: 'eslint-plugin-typescript-sort-keys', ruleName: 'typescript-sort-keys/string-enum', description: 'Enforce sorted keys in string enums.', enabled: false, level: 'warn' },
    { id: 120, package: 'eslint-plugin-typescript-sort-keys', ruleName: 'typescript-sort-keys/type', description: 'Enforce sorted keys in TypeScript types.', enabled: false, level: 'warn' },

    // eslint-plugin-tailwindcss Rules
    { id: 121, package: 'eslint-plugin-tailwindcss', ruleName: 'tailwindcss/no-custom-classname', description: 'Disallow custom class names that do not match Tailwind CSS conventions.', enabled: false, level: 'warn' },
    { id: 122, package: 'eslint-plugin-tailwindcss', ruleName: 'tailwindcss/classnames-order', description: 'Enforce consistent order of Tailwind CSS class names.', enabled: false, level: 'warn' },

    // eslint-plugin-react-native Rules
    { id: 123, package: 'eslint-plugin-react-native', ruleName: 'react-native/no-inline-styles', description: 'Disallow inline styles in React Native components.', enabled: false, level: 'warn' },
    { id: 124, package: 'eslint-plugin-react-native', ruleName: 'react-native/split-platform-components', description: 'Enforce split platform components in React Native.', enabled: false, level: 'warn' },
    { id: 125, package: 'eslint-plugin-react-native', ruleName: 'react-native/no-unused-styles', description: 'Disallow unused styles in React Native components.', enabled: false, level: 'warn' },

    // eslint-plugin-tsdoc Rules
    { id: 126, package: 'eslint-plugin-tsdoc', ruleName: 'tsdoc/syntax', description: 'Enforce TSDoc syntax rules for TypeScript documentation comments.', enabled: false, level: 'warn' },

    // eslint-plugin-jsdoc Rules
    { id: 127, package: 'eslint-plugin-jsdoc', ruleName: 'jsdoc/check-alignment', description: 'Ensure JSDoc comments are aligned correctly.', enabled: false, level: 'warn' },
    { id: 128, package: 'eslint-plugin-jsdoc', ruleName: 'jsdoc/check-indentation', description: 'Ensure consistent indentation in JSDoc comments.', enabled: false, level: 'warn' },
    { id: 129, package: 'eslint-plugin-jsdoc', ruleName: 'jsdoc/require-param', description: 'Require parameters to be documented in JSDoc comments.', enabled: false, level: 'warn' },

    // eslint-plugin-compatibility Rules
    { id: 130, package: 'eslint-plugin-compatibility', ruleName: 'compatibility/no-incompatible-api', description: 'Disallow the use of APIs incompatible with specified environments.', enabled: false, level: 'error' },

    // eslint-plugin-css-modules Rules
    { id: 131, package: 'eslint-plugin-css-modules', ruleName: 'css-modules/no-undef-class', description: 'Disallow undefined class names in CSS Modules.', enabled: false, level: 'error' },
    { id: 132, package: 'eslint-plugin-css-modules', ruleName: 'css-modules/no-unused-class', description: 'Disallow unused class names in CSS Modules.', enabled: false, level: 'warn' },

    // eslint-plugin-html Rules
    { id: 133, package: 'eslint-plugin-html', ruleName: 'html/no-self-closing', description: 'Disallow self-closing HTML tags where they are not supported.', enabled: false, level: 'warn' },
    { id: 134, package: 'eslint-plugin-html', ruleName: 'html/no-multiple-empty-lines', description: 'Disallow multiple empty lines in HTML files.', enabled: false, level: 'warn' },
];

export default eslintRules;
