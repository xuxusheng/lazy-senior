/**
 * Created by ʢ on 2015/11/3.
 */

// �ٶȵ�ͼAPI����
var map = new BMap.Map("allmap");    // ����Mapʵ��
var point=new BMap.Point(121.504,31.230);   // ��ʼ����ͼ,�������ĵ�����͵�ͼ����
map.centerAndZoom(point,12);

map.addControl(new BMap.MapTypeControl());   //��ӵ�ͼ���Ϳؼ�
map.setCurrentCity("�Ϻ�");          // ���õ�ͼ��ʾ�ĳ��� �����Ǳ������õ�

map.enableScrollWheelZoom(true);     //��������������

var marker=new BMap.Marker(point);  //������ע
map.addOverlay(marker);

var sContent="<div style='width:300px;height:155px;'><h4 style='margin:0 0 5px 0;padding:0.2em 0'><a href='#' style='color:#DD3C88;text-decoration:none;cursor:pointer;' title='�����з�˸���ҽԺ' target='_blank'>�����з�˸���ҽԺ</a></h4><div style='width:300px;height:109px;'><img style='float:right;margin-left:4px;' id='imgDemo' src='images/pic-map.png' width='139' height='104' title='�����з�˸���ҽԺ'/><span style='margin:0;line-height:1.5;font-size:13px;display:block;width:150px;'>��ַ������ʡ�����н�Ŷ�·76�ţ��붫���ֽ��㴦����ͼ���б���棩<br/><b>�������ߣ�0432-65127777</b><br/></span><div style='clear:both'></div></div><a title='�����з�˸���ҽԺQQ��ѯ' target='_blank' href='#' style='text-decoration:none;padding:0 20px 0 20px;line-height:30px;text-align:center;display:inline-block;width:100px;height:30px;border:2px solid rgb(203,187,154);background-color:rgb(165,140,84);cursor:pointer;overflow:hidden;'>QQ��ѯ</a><a title='�����з�˸���ҽԺ������ѯ' target='_blank' href='#' style='text-decoration:none;display:inline-block;text-align:center;line-height:30px;padding:0 20px 0 20px;margin-left:10px;width:100px;height:30px;border:2px solid rgb(230,193,122);cursor:pointer;overflow:hidden;background-color:rgb(218,165,61);'>������ѯ</a><input type='text' value='�����������ڵ�λ��' style='margin-top:10px;margin-left:20px;width:155px;height:20px;color:#a5a5a5;'/><input type='button' value='��ѯ·��' style='margin-top:10px;width:80px;height:30px;margin-left:10px'/></div>";

var infoWindow=new BMap.InfoWindow(sContent);   //������Ϣ���ڶ���
map.openInfoWindow(infoWindow,map.getCenter());     //����Ϣ����
marker.addEventListener("click",function(){
    this.openInfoWindow(infoWindow);        //ͼƬ��������ػ�infowindow
    document.getElementById("imgDemo").onload=function(){
        infoWindow.redraw();
    }
});