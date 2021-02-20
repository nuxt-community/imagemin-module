const { setupTest, get } = require('@nuxt/test-utils')

describe('dev', () => {
  setupTest({
    server: true,
    config: {
      dev: true
    }
  })

  test('render', async () => {
    const { body } = await get('/')
    expect(body).toContain('Works!')
  })
})
