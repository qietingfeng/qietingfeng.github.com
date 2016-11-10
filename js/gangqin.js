$(function(){
    $(document).keydown(function(event){
        if(event.keyCode>=49&&event.keyCode<=56){
            $('.audio_list li').eq(event.keyCode-49).addClass('on');
            $('audio').attr({src:oggSound['sound'+event.keyCode]});
            $('audio')[0].play();

        }
    });
    $(document).keyup(function(event){
        if(event.keyCode>=49&&event.keyCode<=56){
            $('.audio_list li').eq(event.keyCode-49).removeClass('on');
        }
    })
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