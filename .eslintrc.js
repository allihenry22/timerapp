module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
  ],
  rules: {
    'array-bracket-newline': [
      'error',
      {minItems: 1},
    ],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        singleValue: true,
        arraysInArrays: false,
        objectsInArrays: false,
      },
    ],
    'array-element-newline': [
      'error',
      {minItems: 1},
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'dot-notation': 0,
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'func-style': [
      'error',
      'declaration',
      {allowArrowFunctions: true},
    ],
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'object-curly-newline': [
      'error',
      {minProperties: 2},
    ],
    'object-curly-spacing': [
      'error',
      'never',
    ],
    'object-property-newline': [
      'error',
      {allowAllPropertiesOnSameLine: false},
    ],
    quotes: [
      'error',
      'single',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    semi: [
      'error',
      'always',
    ],
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-named-default': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-curly-spacing': [
      'error',
      {when: 'always'},
    ],
    'react/jsx-filename-extension': [
      1,
      {extensions: [
        '.js',
        '.jsx',
      ]},
    ],
    'react/jsx-fragments': 0,
    'react/jsx-max-props-per-line': [
      'error',
      {maximum: 1},
    ],
    'react/jsx-no-bind': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-access-state-in-setstate': 'warn',
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/sort-prop-types': 0,
    'react/sort-comp': 0,
    'react/static-property-placement': 0,
    'react/jsx-key': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-set-state': 'error',
  },
};
