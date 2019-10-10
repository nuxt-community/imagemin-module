# @nuxtjs/imagemin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
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

:warning: If you are using Nuxt older than **v2.9** you have to install module as a `dependency` (No `--dev` or `--save-dev` flags) and also use `modules` section in `nuxt.config.js` instead of `buildModules`.

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

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/imagemin/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/imagemin

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/imagemin.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/imagemin

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/imagemin-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/imagemin-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/imagemin-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/imagemin-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/imagemin.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/imagemin
