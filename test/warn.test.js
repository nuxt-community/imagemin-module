const { setup, loadConfig } = require('@nuxtjs/module-test-utils')

const logger = require('../lib/logger')
logger.mockTypes(() => jest.fn())

describe('warn', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, null, { dev: true, imagemin: { enableInDev: true } }))))
  }, 60000)

  beforeEach(() => {
    logger.clear()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if enabled in dev mode', () => {
    expect(logger.warn).toHaveBeenCalledWith(
      'Imagemin is activated in development mode. This could increase the build time.'
    )
  })
})
