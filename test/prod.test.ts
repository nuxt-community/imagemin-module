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
    const files = [
      'example.png',
      'nuxt.svg'
    ]
    const originalFileSizes = files.map(file => statSync(resolve(options.rootDir, options.dir.assets, file)).size)
    const minFileSizes = files
      .map(file => statSync(globSync(resolve(options.buildDir, 'dist/client/img', file.replace('.', '.*.')))[0]).size)

    originalFileSizes.forEach((oSize, index) => expect(oSize).toBeGreaterThan(minFileSizes[index]))
  })
})
