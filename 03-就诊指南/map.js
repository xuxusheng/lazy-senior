/**
 * Created by 盛 on 2015/11/3.
 */

// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
var point=new BMap.Point(121.504,31.230);   // 初始化地图,设置中心点坐标和地图级别
map.centerAndZoom(point,12);

map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的

map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

var marker=new BMap.Marker(point);  //创建标注
map.addOverlay(marker);

var sContent="<div style='width:300px;height:155px;'><h4 style='margin:0 0 5px 0;padding:0.2em 0'><a href='#' style='color:#DD3C88;text-decoration:none;cursor:pointer;' title='吉林市凤凰妇产医院' target='_blank'>吉林市凤凰妇产医院</a></h4><div style='width:300px;height:109px;'><img style='float:right;margin-left:4px;' id='imgDemo' src='images/pic-map.png' width='139' height='104' title='吉林市凤凰妇产医院'/><span style='margin:0;line-height:1.5;font-size:13px;display:block;width:150px;'>地址：吉林省吉林市解放东路76号，与东昌街交汇处（市图书馆斜对面）<br/><b>健康热线：0432-65127777</b><br/></span><div style='clear:both'></div></div><a title='吉林市凤凰妇产医院QQ咨询' target='_blank' href='#' style='text-decoration:none;padding:0 20px 0 20px;line-height:30px;text-align:center;display:inline-block;width:100px;height:30px;border:2px solid rgb(203,187,154);background-color:rgb(165,140,84);cursor:pointer;overflow:hidden;'>QQ咨询</a><a title='吉林市凤凰妇产医院在线咨询' target='_blank' href='#' style='text-decoration:none;display:inline-block;text-align:center;line-height:30px;padding:0 20px 0 20px;margin-left:10px;width:100px;height:30px;border:2px solid rgb(230,193,122);cursor:pointer;overflow:hidden;background-color:rgb(218,165,61);'>在线咨询</a><input type='text' value='请输入您所在的位置' style='margin-top:10px;margin-left:20px;width:155px;height:20px;color:#a5a5a5;'/><input type='button' value='查询路线' style='margin-top:10px;width:80px;height:30px;margin-left:10px'/></div>";

var infoWindow=new BMap.InfoWindow(sContent);   //创建信息窗口对象
map.openInfoWindow(infoWindow,map.getCenter());     //打开信息窗口
marker.addEventListener("click",function(){
    this.openInfoWindow(infoWindow);        //图片加载完成重绘infowindow
    document.getElementById("imgDemo").onload=function(){
        infoWindow.redraw();
    }
});