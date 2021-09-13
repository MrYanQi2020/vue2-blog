import showMessage from "./style/index.module.less";
import $ from "jquery";
import Icon from "@/components/Icon";
import getVnode from "../getComponentRootDom";


/**
 * @param {Object} 提示框对象
 * 对象里的参数 
 * @param {string} type 提示框类型，默认值success
 * @param {string/vNode} message 提示框内容
 * @param {string} iconClass 提示框图标类名
 * @param {number} duration 提示框停留时间，单位:秒 s
 * @param {HTMLElement} positionDom 提示框定位在哪个元素内 
 * 
*/
export default function({type='info',message="",iconClass,duration=3,positionDom=$('body'),role}={}) {
    !iconClass && (iconClass = type);

    const icon = getVnode(Icon,{type,}); // 获取Icon组件渲染的Dom根元素
    const dom = document.createElement('div');//创建元素

    // const positionDoms = getVnode(positionDom,{type,}); 
    console.log(positionDom);

    dom.classList.add(showMessage.messageContainer, showMessage[type]); // 元素添加内容
    $(dom).css('animation-delay',`0s,${duration}s`);
    dom.innerHTML=`
        <div style="width:100%;height:100%;position:relative;">
            <span class="${showMessage.icon}">${icon.outerHTML}</span>
            <span class="${showMessage.text}">${message}</span>
            <div class="${showMessage[role]}"><div>
        </div>
    `;
    $(positionDom).append(dom); // '挂载元素'

    setTimeout(() => {  // 动画结束后的事件 
        // 移除弹出框
        // $(dom).remove();    
    }, (0.5 + duration)*1000);
    
}



