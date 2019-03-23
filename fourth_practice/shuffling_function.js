var bottom_text  = document.getElementById("bottom") ,
    top_text     = document.getElementById("top") ,
    once         = document.getElementById("once") ,
    circulation  = document.getElementById("circulation") ,
    picture_view = document.getElementsByTagName("ul") ;

var mode_state   = false ,
    num          = 1 ;

picture_view[0].margindata = 0 ;

function playmode(Dom) {
    if (Dom.innerText == "正常模式") {
        mode_state = false ;
        once.className = "clickon" ;
        circulation.className = "function_btn" ;
    }else {
        mode_state = true ;
        once.className = "function_btn" ;
        circulation.className = "clickon" ;
    }
}

function left_switch() {
    if (mode_state) {
        num--;
        if (num == 0){
            num = 5;
            picture_view[0].margindata = -4000;
        }
        picture_view[0].margindata =  picture_view[0].margindata + 800;
        picture_view[0].style.marginLeft = `${picture_view[0].margindata}px`;
        textchange(num);
    }else {
        if (num > 1){
            num--;
            picture_view[0].margindata =  picture_view[0].margindata + 800;
            picture_view[0].style.marginLeft = `${picture_view[0].margindata}px`;
            textchange(num);
        }
    }
}
function right_switch() {
    if (mode_state){
        num++;
        if (num == 6){
            num = 1;
            picture_view[0].margindata = 800;
        }
        picture_view[0].margindata = picture_view[0].margindata - 800;
        picture_view[0].style.marginLeft = `${picture_view[0].margindata}px`;
        textchange(num);
    }else {
        if (num < 5){
            num++;
            picture_view[0].margindata = picture_view[0].margindata - 800;
            picture_view[0].style.marginLeft = `${picture_view[0].margindata}px`;
            textchange(num);
        }
    }
}

/*          修改顶部以及底部的文字               */

function textchange(view_number) {
    top_text.innerText = `${view_number}/5`;
    switch (view_number) {
        case 1 :
            bottom_text.innerText = "图片一";break;
        case 2 :
            bottom_text.innerText = "图片二";break;
        case 3 :
            bottom_text.innerText = "图片三";break;
        case 4 :
            bottom_text.innerText = "图片四";break;
        case 5 :
            bottom_text.innerText = "图片五";break;
    }
}
