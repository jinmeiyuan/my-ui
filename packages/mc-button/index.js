// 导入组件，组件必须声明 name
import mcButton from "./src/button.vue"

// 为组件提供 install 安装方法，供按需引入
mcButton.install = function(Vue){
  Vue.component(mcButton.name,mcButton)
}

export default mcButton;