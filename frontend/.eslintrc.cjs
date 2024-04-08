module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Changed plugin name to 'react'
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }, // Updated ecmaVersion
  plugins: ['react'], // Changed plugin name to 'react'
  rules: {
    'react/prop-types': 'off', // If you're using TypeScript, you might not need prop-types
    'react/react-in-jsx-scope': 'off', // Not needed if you're using React 17+
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Adjust this rule according to your preference
  },
};
