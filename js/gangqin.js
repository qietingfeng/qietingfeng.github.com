$(function(){
    $(document).keydown(function(event){
        if(event.keyCode>=49&&event.keyCode<=56){
            $('.audio_list li').eq(event.keyCode-49).addClass('on');
            $('.gangqin audio').attr({src:oggSound['sound'+event.keyCode]});
            $('.gangqin audio')[0].play();

        }
    });
    $(document).keyup(function(event){
        if(event.keyCode>=49&&event.keyCode<=56){
            $('.audio_list li').eq(event.keyCode-49).removeClass('on');
        }
    })
    //音乐播放器
   var iNow=0;
    var block=null;
    var arr=['忧伤还是快乐','Insomnia','梦中的婚礼','雨的印记','友情岁月','soleil','满']
    $('.bgmusic audio').attr('src','mp3/'+arr[iNow]+'.mp3')
    $('.bgmusic audio').get(0).play();
    $('.bgmusic .pause_1').click(function(){
        iNow++;
        if(iNow%2==1){
            $(this).css('backgroundImage','url(img/bo.png)')
            $('.bgmusic audio').get(0).pause();
            $('.bgmusic audio').get(0).currentTime=0;
        }else{
            $(this).css('backgroundImage','url(img/zan.png)')
            $('.bgmusic audio').get(0).play();
        }
    });
    function tabMusic(index){
        $('.bgmusic ul').stop().animate({'top':-40*index},function(){
            if(iNow==7){
                $(this).css('top',0);
                iNow=0;
            }
            block=true;
        });

    };
    //上一曲
    $('.bgmusic .prev_1').click(function(){
        if(block==false){
            return;
        };
        block=false;
        iNow--;
        if(iNow==-1){
            iNow=6;
        };
        $('.bgmusic audio').attr('src','mp3/'+arr[iNow]+'.mp3')
        $('.bgmusic audio').get(0).play();
        tabMusic(iNow);
    });
    //下一曲
    $('.bgmusic .xiayiqu').click(function(){
        if(block==false){
            return;
        };
        block=false;
        iNow++;
        block=false;
        tabMusic(iNow);
        $('.bgmusic audio').attr('src','mp3/'+arr[iNow]+'.mp3')
        $('.bgmusic audio').get(0).play();
    });
    //消失
    $('.bgmusic .hide_music').click(function(){
        $('.bgmusic').stop().animate({'opacity':0});
        $('.bgmusic audio').get(0).pause();
        $('.bgmusic audio').get(0).currentTime=0;
    });
    //$('.bgmusic').mouseover(function(){
    //    $(this).stop().animate({'opacity':1});
    //})



    //轮播图
    var n=0;
    var lock=null;
    function tab(index){
        $('.tab ul').stop().animate({'left':-500*index},function(){
            if(n==4){
                $(this).css('left',0);
                n=0;
            }
            lock=true;
        });
    };
    var timer=setInterval(next,4000);
    $('.tab').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(next,4000)
    })
    function next(){
        n++;
        tab(n);
    }
    $('.prev').click(function(){
        if(lock==false){
            return;
        };
        lock=false;
        n--;
        if(n==-1){
            n=3;
        }
        tab(n);
    });
    $('.next').click(function(){
        if(lock==false){
            return;
        };
        lock=false;
        next();
    })



})