window.onload=function(){
    var el=document.getElementById("intro");
    var str ="Helping each other.......";
    var i=0;
    el.innerHTML="";
    var text=setInterval(addtext,500);
    function addtext() {
            if(i==(str.length-1)){
                clearInterval(text);
            }
        else{
            el.innerHTML=el.innerHTML+str[i];
            i++;
        }
    }
    
}
