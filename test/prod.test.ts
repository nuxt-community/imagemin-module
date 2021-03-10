import { resolve } from 'path'
import { statSync } from 'fs-extra'
import { setupTest, getNuxt } from '@nuxt/test-utils'
import { sync as globSync } from 'glob'

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
    const mapFiles = globSync(resolve(options.buildDir, 'dist/client/**/*.png'))
    const minFileSize = statSync(mapFiles[0]).size

    expect(originalFileSize).toBeGreaterThan(minFileSize)
  })
})
