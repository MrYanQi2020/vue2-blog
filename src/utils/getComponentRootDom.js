
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