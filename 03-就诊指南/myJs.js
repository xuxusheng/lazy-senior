/**
 * Created by Administrator on 2015-10-31.
 */



$(document).ready(function(){
    $(".btn-method").on("click",function(){
        $(".contentXu").attr("style","display:none");
        $('#'+$(this).attr("title")).attr("style","display:block");
    })
});



//window.onload=ready;
//var btn_method;var contentXu;
//function ready(){
//    btn_method=document.getElementsByClassName("btn-method");       //获取四个按钮
//    contentXu=document.getElementsByClassName("contentXu");         //获取四个内容部分
//
//    for(var i=0;i<btn_method.length;i++){
//        btn_method[i].addEventListener("click",function(){          //事件绑定
//            reset();
//            var title=this.getAttribute("title");                 //获取当前点击按钮的title属性值
//            var temp=document.getElementById(title);
//            temp.setAttribute("style","display:block");
//        })
//    }
//}
//function reset(){
//    for(var i= 0;i<contentXu.length;i++){
//        contentXu[i].setAttribute("style","display:none");
//    }
//}