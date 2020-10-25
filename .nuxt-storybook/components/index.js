export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as LogoStory } from '../..\\components\\stories\\logo.story.js'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
export const LazyLogoStory = import('../..\\components\\stories\\logo.story.js' /* webpackChunkName: "components_stories/logo.story" */).then(c => c.default || c)
