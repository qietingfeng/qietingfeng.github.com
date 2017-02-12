$(document).ready(function(){
    $('.scro').click(function(){
        $('#ashadow').hide();
        $('.close').hide();
        $('.open').show();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top+'px'
        },
            {
                duration:500,
                easing:'linear'
            })

        return false;
    })
})