
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

// function getVnode(component,props){
//   const vm = new Vue({
//       render: (h) => h(component, { props }),
//   });
//   vm.$mount();
//   return vm.$el;
// }
// const initComponents = function(components,props,){
//   return {components,Vnode:getVnode(new Vue().$options.components[components],props)};
// }

// const getComponentsConfig = function(name,prop){
//   if(document.getElementById(name)){
//       return document.getElementById(name).getAttribute(prop);
//   }
// }
// const ElBadgeConfig = {
//   value:getComponentsConfig('ElBadge','value'),
//   type:getComponentsConfig('ElBadge','type'),
// }

// const ElBadge = initComponents('ElBadge',ElBadgeConfig);

// const initElBadge = function(ElBadge){

//   document.getElementById(ElBadge.components) && document.getElementById(ElBadge.components).append(ElBadge.Vnode);
// }
// initElBadge(ElBadge)


// 图标处理
// let initIcon = function(){
//   // 图标类名
//   const iconStatic = {
//       'iconx-shenghe':'fa fa-search',
//       'iconx-ren':'fa fa-trach'
//   }
//   // 图标颜色
//   const iconColor = {
//       'success':'text-success',
//       'danger':'text-danger',
//       'warning':'text-warning',
//       'primary':'text-primary',
//       'blue':'text-blue',
//       'dark':'text-dark',
//   }
//   let iconRes={};
//   for(let sta in iconStatic){
//       for(let color in iconColor){
//           iconRes[sta+'-'+color] = iconStatic[sta]+' '+iconColor[color];
//       }
//   }
//   $('[class^=iconx-]').each((i,ele) => {
//       const classBefore = [...ele.classList].find(f => f.includes('iconx-'));
//       const classAfter = iconRes[classBefore];
//       $(ele).removeClass(classBefore).addClass(classAfter);
//   })
// }


{/* <div id='ElBadge' type='success' value='asdf'></div> */}