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
//    btn_method=document.getElementsByClassName("btn-method");       //��ȡ�ĸ���ť
//    contentXu=document.getElementsByClassName("contentXu");         //��ȡ�ĸ����ݲ���
//
//    for(var i=0;i<btn_method.length;i++){
//        btn_method[i].addEventListener("click",function(){          //�¼���
//            reset();
//            var title=this.getAttribute("title");                 //��ȡ��ǰ�����ť��title����ֵ
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