import mountTemplate from 'test/utils/mountTemplate'
import MdCircular from './MdCircular.vue'

test('should render the progress', async () => {
  const template = '<md-progress md-indeterminate></md-progress>'
  const wrapper = await mountTemplate(MdCircular, template)

  expect(wrapper.hasClass('md-progress')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-progress md-indeterminate></md-progress>'
  const wrapper = await mountTemplate(MdCircular, template)

  expect(wrapper.hasClass('md-progress')).toBe(true)
})
