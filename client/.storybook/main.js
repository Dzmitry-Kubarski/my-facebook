
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      }
    }

  ]
}