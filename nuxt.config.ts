import { NuxtConfig } from '@nuxt/types';
import fileList from './lib/entry_files';

export default {
  head: {
    title: 'kakubin.github.io',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  generate: {
    routes() {
      return fileList
    }
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
  ],

  build: {
    extend(config: NuxtConfig) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
      config.node = {
        fs: "empty"
      }
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
