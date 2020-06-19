module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    workbox: true,
    $: true,
    jQuery: true,
    found: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  ignorePatterns: [
    '**/MDB-Free*/*.css$',
    '**/MDB-Free*/*.map$',
    '**/node_modules*/*',
  ],
};
