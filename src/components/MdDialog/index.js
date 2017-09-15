import init from 'vue-material/material'
import MdDialog from './MdDialog'

export default Vue => {
  init(Vue)
  Vue.component(MdDialog.name, MdDialog)
}