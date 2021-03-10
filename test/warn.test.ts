import { setupTest, mockConsola } from '@nuxt/test-utils'

const logger = mockConsola()

describe('warn', () => {
  setupTest({
    config: {
      dev: true,
      imagemin: {
        enableInDev: true
      }
    }
  })

  test('should warn if enabled in dev mode', () => {
    expect(logger.warn).toHaveBeenCalledWith(
      'Imagemin is activated in development mode. This could increase the build time.'
    )
  })
})
