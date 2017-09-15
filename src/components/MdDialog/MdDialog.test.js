import mountTemplate from 'test/utils/mountTemplate'
import MdDialog from './MdDialog.vue'

test('should render the dialog', async () => {
  const template = '<md-dialog>Lorem ipsum</md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)

  expect(wrapper.hasClass('md-dialog')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-dialog md-theme="alt">Lorem ipsum</md-dialog>'
  const wrapper = await mountTemplate(MdDialog, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})