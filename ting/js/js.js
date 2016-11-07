$(function(){
   function tab(obj1,obj2,obj3,cla){
       //$(obj1).width($(obj2).width()*5)
       $(obj3).each(function(){
           $(this).mouseover(function(){
               $(obj3).removeClass(cla);
               $(this).addClass(cla);
               $(obj1).stop().animate({left:-$(obj2).width()*$(this).index()})
           })
       })
   }
    tab('#moshen-1','#moshen-1 li','#moshen-2 li','moshen-3');
    function tab2(obj1,obj2,cla){
        $(obj1).each(function(i){
            $(this).mouseover(function(){
                $(obj2).removeClass('show');
                $(obj1).removeClass(cla)
                $(this).addClass(cla);
                $(obj2).eq(i).addClass('show');
            })
        })


    }
    tab2('#zong-1 li','#zong-2 div','zong-1_1')
    tab2('#m4-list li','#m4-left div','m4list-1')
})