# @nuxtjs/imagemin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Automatically optimize (compress) all images used in Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/imagemin` dependency to your project

```bash
yarn add --dev @nuxtjs/imagemin # or npm install --save-dev @nuxtjs/imagemin
```

2. Add `@nuxtjs/imagemin` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/imagemin',

    // With options
    ['@nuxtjs/imagemin', { /* module options */ }]
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

### Using top level options

```js
export default {
  buildModules: [
    '@nuxtjs/imagemin'
  ],
  imagemin: {
    /* module options */
  }
}
```

## Options

See [image-minimizer-webpack-plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin#options) for the complete list of options available.

### `enableInDev`

- Type: `Boolean`
- Default: `false`

Images will be minified in development mode, if this option is set to `true`.

**This could increase the build time.**

## `minimizerOptions`

- Type: `Object`
- Default:

```js
plugins: [
  ['gifsicle', { interlaced: true }],
  ['jpegtran', { progressive: true }],
  ['optipng', { optimizationLevel: 5 }],
  ['svgo', { plugins: [{ removeViewBox: false }] }]
]
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/imagemin/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/imagemin

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/imagemin.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/imagemin

[github-actions-ci-src]: https://github.com/nuxt-community/imagemin-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/imagemin-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/imagemin-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/imagemin-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/imagemin.svg
[license-href]: https://npmjs.com/package/@nuxtjs/imagemin
