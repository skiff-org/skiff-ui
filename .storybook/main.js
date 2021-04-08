// // .storybook/main.js
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "styles": [
    "../src/**/app.global.css"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};