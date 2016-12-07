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


    //轮播图

    var oUl = document.querySelector('.shuju_li');
    var aLi = oUl.children;
    var oOl = document.querySelector('.btn_list')
    var aBtn = oOl.children;
    oUl.style.width = aLi[0].offsetWidth*aLi.length/rem+'rem';
    var iNow = 0;
    var bok=false;
    var x = 0;
    for(var j=0;j<aBtn.length;j++){
        aBtn[j].index=j
            aBtn[j].onclick=function(){
                iNow=this.index;
                for(var j=0;j<aBtn.length;j++){
                    aBtn[j].className='';
                }
                this.className='active';

                x = -this.index*aLi[0].offsetWidth/rem;

                oUl.style.WebkitTransition = '.5s all ease';
                oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                return(iNow) ;
            }

    }

    oUl.addEventListener('touchstart',function(ev){
        if(bok)return;
        bok=true;
        oUl.style.WebkitTransition = 'none';
        var oTouch = ev.targetTouches[0];
        var downX = oTouch.pageX/rem;
        var disX = downX-x;
        function fnMove(ev){
            var oTouch = ev.targetTouches[0];
            x = oTouch.pageX/rem-disX;
            oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
        }
        function fnEnd(ev){
            document.removeEventListener('touchmove',fnMove,false);
            document.removeEventListener('touchend',fnEnd,false);

            var oTouch = ev.changedTouches[0];
            var upX = oTouch.pageX/rem;

            if(Math.abs(upX-downX)>100/rem){
                //判断iNow要++还是--
                if(downX>upX){
                    iNow++;
                    if(iNow==aLi.length){
                        iNow = aLi.length-1;
                    }
                }else if(downX<upX){
                    iNow--;
                    if(iNow<0){
                        iNow = 0;
                    }
                }
            }
            x = -iNow*aLi[0].offsetWidth/rem;

            oUl.style.WebkitTransition = '.5s all ease';

            oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';

            for(var i=0;i<aBtn.length;i++){
                aBtn[i].classList.remove('active');
            }
            aBtn[iNow].classList.add('active');
            bok = false;
        }

        document.addEventListener('touchmove',fnMove,false);
        document.addEventListener('touchend',fnEnd,false);
        ev.preventDefault();

    },false);

},false)