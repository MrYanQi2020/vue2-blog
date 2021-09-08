import $ from "jquery";
import bidiu from "@/assets/bidiu.gif";
function getLoadImg(){
    return $('img[class=loadImg]')[0];
}

function createImg(){
    const img = document.createElement('img');
    img.src = bidiu,
    $(img).css({ 'width': '100px', 'height': '100px', 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%,-50%)' }).addClass('loadImg');
    return img;
}
export default function (el, bingding) {
    const val = bingding.value;
    console.log(val)
    const img = createImg(); 
    if (val && !getLoadImg()) {
        $(el).css('position', 'relative').append(img);
    } else {
        $(el).find('.loadImg').remove();
    }
}