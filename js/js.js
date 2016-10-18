
    window.onload=function(){
        function yanchi(id1,id2) {
            var oTab = document.getElementById(id1);
            var aLi = oTab.getElementsByTagName('li');
            var oTa = document.getElementById(id2);
            var aDiv = oTa.children;
            var aSpan = oTab.getElementsByTagName('span');
            var timer = null;
            var oScro=document.getElementById('scroll');
            var lock=false;
            window.onscroll=function(){
                var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
                if(lock){
                    clearInterval(timer);
                }
                lock=true;
                if(scrolltop<=0){
                    oScro.style.display='none';
                }else{
                    oScro.style.display='block';
                }
            };
            oScro.onclick=function(){
                clearInterval(timer);
                var scrollt=document.documentElement.scrollTop||document.body.scrollTop;
                var start=scrollt;
                var dis=0-start;
                var count=Math.floor(2000/30);
                var n=0;

                timer=setInterval(function(){
                    n++;
                    lock=false;
                    document.documentElement.scrollTop=document.body.scrollTop=start+dis*n/count;
                    if(n==count){
                        clearInterval(timer);
                    }
                },30)
            }


                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].index = i;
                    aLi[i].onmouseover = function () {
                        var _this = this;
                        timer = setTimeout(function () {
                            for (var i = 0; i < aLi.length; i++) {
                                aSpan[i].style.display = 'none';
                                aDiv[i].style.display = 'none';
                                aLi[i].className = '';
                            }
                            aLi[_this.index].className = 'current';
                            aSpan[_this.index].style.display = 'block';
                            aDiv[_this.index].style.display = 'block';

                        }, 300)

                    };
                    aLi[i].onmouseout = function () {
                        clearTimeout(timer);
                    }
                }


        }


    yanchi('tab-u','tab-bd');
        yanchi('tab-right','right-gg');

       function n23(id1,id2,cla){
           var oTa = document.getElementById(id1);
           var aLii = oTa.children;
           var oTaa = document.getElementById(id2);
           var aDivv=oTaa.children;

           var timer = null;


           for (var i = 0; i < aLii.length; i++) {
               aLii[i].index = i;
               aLii[i].onmouseover = function () {
                   var _this = this;
                   timer = setTimeout(function () {
                       for (var i = 0; i < aLii.length; i++) {

                           aDivv[i].style.display = 'none';
                           aLii[i].className = '';
                       }
                       _this.className = cla;

                       aDivv[_this.index].style.display = 'block';

                   }, 300)

               };
               aLii[i].onmouseout = function () {
                   clearTimeout(timer);
               }
           }
       }

    n23('sport','picture','active');
        n23('sportt2','army','active');
        n23('sport2','easy','active');
        n23('car-m','finance','on');

        n23('subject1','videovideo1','on');
        n23('subbbb','video2','on')
        n23('subjecctt','shop','on')
        n23('subject-3','com-main-2','on')
        n23('subject-4','com-main-4','on')
        n23('subject-6','com-main-6','on')
        n23('subject-7','com-main-7','on')
        n23('subject-8','com-main-8','on')
        n23('subject-9','com-main-9','on')
        n23('subject-10','com-main-10','on')
        n23('subject-11','com-main-11','on')
        n23('subject-12','com-main-12','on')
        n23('subject-13','com-main-13','on')
        n23('subject-14','com-main-14','on')
        n23('subject-15','com-main-15','on')
        n23('subject-16','com-main-16','on')
        n23('subject-17','com-main-17','on')
        n23('subject-18','com-main-18','on')
        n23('subject-19','com-main-19','on')
        n23('subject-20','com-main-20','on')
        n23('subject-21','com-main-21','on')
        n23('subject-22','com-main-22','on')
        n23('subject-23','com-main-23','on')
        n23('subject-24','com-main-24','on')


    };



/**
 * Created by Administrator on 2016/9/10.
 */
