const path = require('path');

module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Add any custom rules here if needed
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  // Explicitly resolve plugins from project root to avoid pnpm conflicts
  resolvePluginsRelativeTo: "./node_modules"
};

