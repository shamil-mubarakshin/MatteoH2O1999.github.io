import { Markdown } from '@nuxt/content/parsers'
import { getOptions } from '@nuxt/content'

const markdown = new Markdown(getOptions().markdown)

describe('Dummy', () => {
  test('is a test', async () => {
  })
})
