const { setupTest } = require('@nuxt/test-utils')

const logger = require('../lib/logger')
logger.mockTypes(() => jest.fn())

describe('warn', () => {
  setupTest({
    config: {
      dev: true,
      imagemin: {
        enableInDev: true
      }
    }
  })

  beforeEach(() => {
    logger.clear()
  })

  test('should warn if enabled in dev mode', () => {
    expect(logger.warn).toHaveBeenCalledWith(
      'Imagemin is activated in development mode. This could increase the build time.'
    )
  })
})
