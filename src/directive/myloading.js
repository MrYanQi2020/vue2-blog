import $ from "jquery";
import bidiu from "@/assets/hero.gif";
function getLoadImg(){
    return $('img[class=loadImg]')[0];
}

function createImg(){
    const img = document.createElement('img');
    img.src = bidiu,
    $(img).css({ 'width': '100px', 'height': '100px', 'position': 'absolute', 'top': '35%', 'left': '50%', 'transform': 'translate(-50%,-50%)' }).addClass('loadImg');
    return img;
}
export default function (el, bingding) {    
    const val = bingding.value;
    const img = createImg(); 
    if (val && !getLoadImg()) {
        $(el).css('position', 'relative').append(img);
    } else {
        $(el).find('.loadImg').remove();    // 移除加载图片
    }
}