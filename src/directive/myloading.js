import $ from "jquery";
import bidiu from "@/assets/bidiu.gif";

export default function (el, bingding) {
    const val = bingding.value;
    const img = document.createElement('img');
    img.src = bidiu,
        $(img).css({ 'width': '100px', 'height': '100px', 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%,-50%)' }).addClass('loadImg');
    if (val) {
        $(el).css('position', 'relative').append(img);
    } else {
        $(el).find('.loadImg').remove();
    }
}