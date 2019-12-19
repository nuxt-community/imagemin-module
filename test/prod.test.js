const { resolve } = require('path')
const { statSync } = require('fs')
const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')
const glob = require('glob')

describe('prod', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, null, { dev: false }))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('image minify', () => {
    const originalFileSize = statSync(resolve(nuxt.options.rootDir, nuxt.options.dir.assets, 'example.png')).size
    const mapFiles = glob.sync(resolve(nuxt.options.buildDir, 'dist/client/**/*.png'))
    const minFileSize = statSync(mapFiles[0]).size

    expect(originalFileSize).toBeGreaterThan(minFileSize)
  })
})
