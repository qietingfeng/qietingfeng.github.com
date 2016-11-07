function toDou(n){
    return n<10?'0'+n:''+n;
}
function getYear(ms){
    var oDate=new Date();
    oDate.setTime(ms);

    return oDate.getFullYear()+'-'+toDou(oDate.getMonth()+1)+'-'+toDou(oDate.getDate())+' '+toDou(oDate.getHours())+':'+toDou(oDate.getMinutes())+':'+toDou(oDate.getSeconds());
}
function findInarr(name,arr){
    for(var i=0;i<arr.length;i++){
        if(name==arr[i]){
            return true;
        }
    }
    return false;
}
function getByClass(oParent,sClass){
    if(document.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var sEv=oParent.getElementsByTagName('*');
        var arr=[];
        for(var i=0;i<sEv.length;i++){
            var temp=sEv[i].className.split(' ');
            if(findInarr(sClass,temp)){
                arr.push(sEv[i]);
            }
        }
        return arr;
    }
}