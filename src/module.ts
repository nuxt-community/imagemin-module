import type { Module } from '@nuxt/types'
import consola from 'consola'
import defu from 'defu'
import { name, version } from '../package.json'

const logger = consola.withTag('nuxt:imagemin')

// TODO: remove when nuxtjs support webpack 5
// using PluginOptions from image-minimizer-webpack-plugin
// https://github.com/webpack-contrib/image-minimizer-webpack-plugin/releases/tag/v2.0.0
interface PluginOptions {
  test?: string | RegExp | string[] | RegExp[];
  include?: string | RegExp | string[] | RegExp[];
  exclude?: string | RegExp | string[] | RegExp[];
  filter?: Function;
  cache?: boolean;
  severityError?: boolean | string;
  minimizerOptions?: object;
  loader?: boolean;
  maxConcurrency?: number;
  filename?: string;
  deleteOriginalAssets?: boolean;
}

export interface ModuleOptions extends PluginOptions {
  enableInDev: boolean;
}

const CONFIG_KEY = 'imagemin'

const nuxtModule: Module<ModuleOptions> = function (moduleOptions) {
  const DEFAULTS: ModuleOptions = {
    enableInDev: false,
    minimizerOptions: {
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }],
        ['svgo', { plugins: [{ name: 'removeViewBox', active: false }] }]
      ]
    }
  }

  const options: ModuleOptions = defu(
    this.options[CONFIG_KEY],
    moduleOptions,
    DEFAULTS
  )

  if (this.options.dev) {
    if (!options.enableInDev) {
      return
    }

    logger.warn('Imagemin is activated in development mode. This could increase the build time.')
  }

  this.extendBuild((config) => {
    const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

    delete options.enableInDev

    config.plugins.push(new ImageMinimizerPlugin(options))
  })
}

;(nuxtModule as any).meta = { name, version }

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.9 - 2.13
}

export default nuxtModule
