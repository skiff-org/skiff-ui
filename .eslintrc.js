module.exports = {
    extends: [
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:sonarjs/recommended',
      'plugin:react/recommended'
    ],
    parser: '@typescript-eslint/parser', // Parse TypeScript
    parserOptions: {
      project: './tsconfig.json',
      jsx: true // True for React
    },
    /* disable or configure individual rules */
    rules: {
      // max length at 110 characters, ignores comments
      'max-len': [
        'warn',
        110,
        { ignoreComments: true, ignoreTrailingComments: true }
      ],
  
      // arrow functions
      // no arrow parens if one param
      'arrow-parens': ['error', 'as-needed'],
      // don't require consistent body position
      'implicit-arrow-linebreak': 'off',
      // prefer implicit return statement
      'arrow-body-style': ['error', 'as-needed'],
  
      // no trailing commas
      '@typescript-eslint/comma-dangle': ['error', 'never'],
  
      // need console logging
      'no-console': 'off',
  
      // unncessary for ES6/node
      '@typescript-eslint/no-use-before-define': 'off',
      'func-names': ['warn', 'as-needed'],
      'import/extensions': 'off',
      'import/no-cycle': 'warn', // supported by node, difficult to fix.
      // does not detect czi-prosemirror deps due to lerna
      'import/no-extraneous-dependencies': 'off',
  
      // make it hard to use ts-ignore
      '@typescript-eslint/ban-ts-comment': 'error',
  
      // we do a lot of valid param reassigns
      'no-param-reassign': 'off',
  
      // small things - we'll allow.
      'no-return-assign': 'off',
      'sonarjs/no-duplicate-string': 'off', // for jest describe() and it()
      'sonarjs/no-small-switch': 'warn',
      'sonarjs/no-duplicated-branches': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
  
      // allow any type
      '@typescript-eslint/no-explicit-any': 'off',
  
      // allow inferred return types on functions
      '@typescript-eslint/explicit-module-boundary-types': 'off',
  
      // to be more explicit
      'sonarjs/prefer-immediate-return': 'off',

       // allow props spreading
       'react/jsx-props-no-spreading': 'off',
  
      // TODO: turn these rules on - react
      'react/require-default-props': 'off',
      'react/default-props-match-prop-types': 'off',
      'react/prop-types': 'off',
  
      // TODO: turn these rules on - misc
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-identical-functions': 'warn',
  
      // TODO: turn these rules on - ts
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/ban-types': 'off',
     
    },
    ignorePatterns: [
      '.eslintrc.js'
    ]
  };
  