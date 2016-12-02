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
var n=0;
  oNav.onclick=function(){
      n++;
      if(n%2==1){
          oSha.style.display='block';
      }else{
          oSha.style.display='none';
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


    //播放
    var oA=document.querySelector('.bofang');
    var oP=document.querySelector('.zanting');
    var oV = document.querySelector('video');
    var oStop=document.querySelector('.abtn');
    var oProBox = document.querySelector('.pro_box');
    var oProBar = document.querySelector('.pro_bar');
    var oProBtn = document.querySelector('.pro_btn');
    oA.onclick=function(){
        oV.play();
        oA.style.display='none';

    }
    oP.onclick=function(){
        oV.pause();
        oA.style.display='block';
    }


    oStop.onclick = function(){
        //alert(oV.currentTime);
        oV.pause();
        oV.currentTime = 0;
    };

    oProBtn.onmousedown = function(ev){
        var disX = ev.pageX-oProBtn.offsetLeft;
        document.onmousemove = function(ev){
            var l = ev.pageX-disX;
            if(l<0){
                l = 0;
            }else if(l>oProBox.offsetWidth-oProBtn.offsetWidth){
                l = oProBox.offsetWidth-oProBtn.offsetWidth;
            }
            oProBtn.style.left = l+'px';

            var scale = l/(oProBox.offsetWidth-oProBtn.offsetWidth);
            oProBar.style.width = scale*100+'%';

            oV.currentTime = scale*oV.duration;

        };
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
    oV.ontimeupdate = function(){
        var scale = oV.currentTime/oV.duration;
        oProBar.style.width = scale*100+'%';
        oProBtn.style.left = scale*(oProBox.offsetWidth-oProBtn.offsetWidth)+'px';
    };

    //轮播图
    var oUl=document.querySelector('.about_list');
    var aBtn=document.querySelectorAll('.about_list li');
    var x=0;
    var y=0;
    oUl.addEventListener('touchstart',function(ev){
        var oTouch=ev.targetTouches[0];
        var dix=oTouch.pageX-x;
        function fnmove(ev){
            var oTouch=ev.targetTouches[0];
            x=oTouch.pageX-dix;
            oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
            oUl.style.transform='translate3d('+x+'px,0,0)';
            if(x<-256){
                oUl.style.WebkitTransform='translate3d(-256px,0,0)';
                oUl.style.transform='translate3d(-256px,0,0)';
            }
         if(x>0){
             oUl.style.WebkitTransform='translate3d(0,0,0)';
             oUl.style.transform='translate3d(0,0,0)';
         }
        }
        function fnremove(){
            document.removeEventListener('touchmove',fnmove,false);
            document.removeEventListener('touchend',fnremove,false);

        }
        document.addEventListener('touchmove',fnmove,false);
        document.addEventListener('touchend',fnremove,false);
        ev.preventDefault();
    },false)


},false)