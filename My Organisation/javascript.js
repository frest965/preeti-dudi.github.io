window.onload=function(){
    var el=document.getElementById("intro");
    var str ='helpincovid   We are here....... ';
    var i=0;
    el.innerHTML="";
    var text=setInterval(function(){if(i==(str.length)){clearInterval(text);}else{el.innerHTML=el.innerHTML+str[i];i++;}},500);
    var ele=document.getElementById("intro1");
    var stri='How can We help you? ';
    var j=0;
    el.innerHTML="";
    var test=setInterval(function(){if(j==(stri.length)){clearInterval(test);}else{ele.innerHTML=ele.innerHTML+stri[j];j++;}},500);
}
