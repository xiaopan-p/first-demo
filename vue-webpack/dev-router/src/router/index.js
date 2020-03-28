import Vue from 'vue'
import VueRouter from 'Vue-router'
import App from '../App';

let components = {};
//require.context('./components',false,/\.vue$/) 路径  是否递归查找里面的文件夹  什么类型的文件
//凡是写在components里面的组件都不用导入
console.dir(require.context('../components', false, /\.vue$/));
let getfile = require.context('../components', false, /\.vue$/);
console.log(getfile.keys().forEach(function(path){
  console.log(getfile(path).default);
  let component = getfile(path).default
  components[component.name] = component
}))
console.log(components)
Vue.use(VueRouter);

const routes = [
  {path:'/',
    name :'root',
    component: App,
    children:[
      { path:'he',
        component:components.HelloWorld,
        children:[
          {
            path:'a',
            component:components.a
          }
        ]
      }
    ]
  },


]
const router = new VueRouter({routes});
export default { router };


