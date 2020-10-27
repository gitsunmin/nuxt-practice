const stories = ['../../components/**/*.stories.@(ts|js)','../../components/**/*.story.js']
const addons  = ["@storybook\u002Faddon-actions","@storybook\u002Faddon-backgrounds","@storybook\u002Faddon-docs","@storybook\u002Faddon-essentials","@storybook\u002Faddon-knobs","@storybook\u002Faddon-links","@storybook\u002Faddon-toolbars","@storybook\u002Faddon-viewport","@storybook\u002Faddon-controls","@storybook\u002Faddon-notes"]

function nuxifyStorybook(storybookConfig) {
  return {
    ...storybookConfig,
    webpackFinal(config, options) {
      if (options.nuxtStorybookConfig) {
        config = options.nuxtStorybookConfig.webpackFinal(config, options)
      }
      if (typeof storybookConfig.webpackFinal === 'function') {
        config = storybookConfig.webpackFinal(config, options)
      }
      return config
    },
    stories: [
      ...stories,
      ...storybookConfig.stories
    ],
    addons: [
      ...addons,
      ...storybookConfig.addons
    ],
  }
}

module.exports = {
  webpackFinal(config, options) {
    return options.nuxtStorybookConfig.webpackFinal(config, options)
  },
  stories,
  addons,
  nuxifyStorybook
}
