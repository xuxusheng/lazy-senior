/**
 * Created by ʢ on 2015/10/26.
 */


$(document).ready(function(){
    $(".pic-group-img").on("mouseover",change).on("mouseout",changeReset);
});
function change(){
    var title=$(this).attr("title");
    $(this).attr("src","images/"+$(this).attr("title")+"01.jpg")
}
function changeReset(){
    $(this).attr("src","images/"+$(this).attr("title")+"02.jpg")
}