import colorPicker from "./color-picker"
import mcButton from "./mc-button"
const components = [
  colorPicker,
  mcButton
]

const install = function(Vue){
  if(install.installed)return;
  components.map(component=>Vue.component(component.name,component))
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default{
  install,
  colorPicker,
  mcButton
}