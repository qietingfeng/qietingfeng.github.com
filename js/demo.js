var rem=20;
;(function(win,doc){
    var rem=20/375*doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize=rem+'px';
    win.addEventListener('resize',function(){
        rem = 20/375*doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize = rem+'px';
    },false)
})(window,document);

document.addEventListener('DOMContentLoaded',function(){

 var oNav=document.querySelector('.nav');
var oSha=document.querySelector('.ashadow');
    var oClo=document.querySelector('.close')
    var oPen=document.querySelector('.open')
    var n=0;
    oNav.onclick=function(){
        n++;
        if(n%2==1){
            oSha.style.display='block';
            oClo.style.display='block';
            oPen.style.display='none';

        }else{
            oSha.style.display='none';
            oClo.style.display='none';
            oPen.style.display='block';
        }

    }
    //首页
    var aA=document.querySelector('.ash_1');
    var aB=document.querySelector('.ash_2');
    var aC=document.querySelector('.ash_3');

    aA.onclick=function(){
        oSha.style.display='none';
    };
    aB.onclick=function(){
        oSha.style.display='none';
    };
    aC.onclick=function(){
        oSha.style.display='none';
    };





},false)
// 百度地图API功能
var map = new BMap.Map("allmap");            // 创建Map实例
map.centerAndZoom(new BMap.Point(80, 10), 10);
map.addControl(new BMap.ZoomControl());          //添加地图缩放控件
var local = new BMap.LocalSearch(map, {
    renderOptions: {map: map}
});
local.search("北京市海淀区中关村软件园03号B");