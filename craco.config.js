const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Fix for react/jsx-runtime resolution in react-parallax-tilt
      // This handles ESM module resolution issues where extensions are required
      
      // Find the rule that handles .js files and modify it to not require fullySpecified
      const rules = webpackConfig.module.rules;
      const jsRule = rules.find((rule) => {
        return rule.test && rule.test.toString().includes('jsx?');
      });
      
      if (jsRule && jsRule.resolve) {
        jsRule.resolve.fullySpecified = false;
      } else if (jsRule) {
        jsRule.resolve = { fullySpecified: false };
      }
      
      // Also add alias as fallback
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
        },
      };
      
      // Try to resolve react/jsx-runtime if it exists
      try {
        const jsxRuntimePath = require.resolve('react/jsx-runtime');
        webpackConfig.resolve.alias['react/jsx-runtime'] = jsxRuntimePath;
      } catch (e) {
        // If jsx-runtime doesn't exist as a separate file, try with .js extension
        try {
          const reactPath = path.dirname(require.resolve('react/package.json'));
          webpackConfig.resolve.alias['react/jsx-runtime'] = path.join(reactPath, 'jsx-runtime.js');
        } catch (e2) {
          // Ignore if still can't resolve
        }
      }
      
      // Fix ESLint plugin conflict with pnpm
      // Configure ESLint to resolve plugins from project root
      if (webpackConfig.plugins) {
        const eslintPlugin = webpackConfig.plugins.find(
          plugin => plugin.constructor && plugin.constructor.name === 'ESLintWebpackPlugin'
        );
        
        if (eslintPlugin) {
          // Set resolvePluginsRelativeTo to ensure plugins are resolved from a single location
          eslintPlugin.options.resolvePluginsRelativeTo = __dirname;
          // Explicitly set baseConfig to prevent duplicate plugin loading
          if (!eslintPlugin.options.baseConfig) {
            eslintPlugin.options.baseConfig = {
              resolvePluginsRelativeTo: __dirname,
            };
          }
          // Override the configFile to use our .eslintrc.js
          eslintPlugin.options.overrideConfigFile = path.resolve(__dirname, '.eslintrc.js');
          // Make ESLint warnings instead of errors to avoid blocking development
          eslintPlugin.options.failOnError = false;
          eslintPlugin.options.failOnWarning = false;
        }
      }
      
      return webpackConfig;
    },
  },
};

