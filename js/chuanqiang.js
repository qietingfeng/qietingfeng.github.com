function a2d(n){
    return n*180/Math.PI;
}
function hoverDir(ev,obj){
    var a = ev.clientX-obj.offsetLeft-obj.offsetWidth/2;
    var b = obj.offsetTop+obj.offsetHeight/2-ev.clientY;

    return Math.round((a2d(Math.atan2(b,a))+180)/90)%4;
}
function through(obj){
    var oS = obj.children[1];
    obj.onmouseenter = function(ev){
        var oEvent = ev||event;
        var dir = hoverDir(oEvent,obj);
        switch(dir){
            case 0:
                //左
                oS.style.left = '-300px';
                oS.style.top = 0;
                break;
            case 1:
                //下
                oS.style.left = 0;
                oS.style.top = '220px';
                break;
            case 2:
                //右
                oS.style.left = '300px';
                oS.style.top = 0;
                break;
            case 3:
                //上
                oS.style.left = 0;
                oS.style.top = '-220px';
                break;
        }
        move1(oS,{left:0,top:0});
    };
    obj.onmouseleave = function(ev){
        var oEvent = ev||event;
        var dir = hoverDir(oEvent,obj);
        switch(dir){
            case 0:
                move1(oS,{left:-300,top:0});
                break;
            case 1:
                move1(oS,{left:0,top:220});
                break;
            case 2:
                move1(oS,{left:300,top:0});
                break;
            case 3:
                move1(oS,{left:0,top:-220});
                break;
        }
    };
}
$(function(){
    var aLi=$('.works')
    for(var i=0;i<aLi.length;i++){
        through(aLi[i]);
    }
})