const { resolve } = require('path')
const { statSync } = require('fs-extra')
const { setupTest, getNuxt } = require('@nuxt/test-utils')
const glob = require('glob')

describe('prod', () => {
  setupTest({
    build: true,
    config: {
      dev: false
    }
  })

  test('image minify', () => {
    const { options } = getNuxt()
    const originalFileSize = statSync(resolve(options.rootDir, options.dir.assets, 'example.png')).size
    const mapFiles = glob.sync(resolve(options.buildDir, 'dist/client/**/*.png'))
    const minFileSize = statSync(mapFiles[0]).size

    expect(originalFileSize).toBeGreaterThan(minFileSize)
  })
})
