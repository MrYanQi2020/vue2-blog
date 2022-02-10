
// 获取某个组件渲染的Dom根元素

import Vue from 'vue';
/**
 * @param {HTMLElement} 组件 
 * @param {Object} props 组件参数
 */

export default function(component,props){
    const vm = new Vue({
        render: (h) => h(component, { props }),
      });
      vm.$mount();  
      return vm.$el;
}

// 1. render工具函数
// function getVnode(component,props){
//   const vm = new Vue({
//       render: (h) => h(component, { props }),
//   });
//   vm.$mount();
//   return vm.$el;
// }
// 2. render组件工具函数
// const initComponents = function(components,props,){
//   return {components,Vnode:getVnode(new Vue().$options.components[components],props)};
// }

// 1. 选择组件配置
// const ElBadge = initComponents('ElBadge',{
//   value:document.getElementById('ElBadge').getAttribute('value'),
//   type:document.getElementById('ElBadge').getAttribute('type'),
// })
// 2. 初始化组件（对render后的组件进行二次修改）
// const initElBadge = function(ElBadge){
    // const Vnode = ElBadge.Vnode;
    // 二次修改
//   document.getElementById(ElBadge.components).append(Vnode);
// }
// initElBadge(ElBadge);

{/* <div id='ElBadge' type='success' value='asdf'></div> */}