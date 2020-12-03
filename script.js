function send(){
    var name=document.getElementById("name").innerHTML;
    var email=document.getElementById("email").innerHTML;
    var number=document.getElementById("number").innerHTML;
    var reason=document.getElementById("reason").innerHTML;
    var refference="mailto:frest965@gmail.com?subject="+reason+"contact&body=Name:"+name+"Number:"+number+""+"Email:"+email;
    document.getElementById("send-mail").href = refference;
}
var pics=["bdbig.jpg","bgblacknblue.jpg","bgblue.png"];
var i=0;
function changeBackground(){
    var source="url('"+pics[i]+"')";
    document.body.style.backgroundImage=source;
    i=(i+1)%3;
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop >10) {
    document.getElementById("header").style.height = "60px";
    var a=document.getElementsByTagName("a");
    for(i=0;i<5;i++){
        a[i].style.fontSize = "20px";
    }
    document.getElementById("logo").style.height="60px";
      changeBackground();
  } else {
    document.getElementById("header").style.height = "90px";
    document.getElementById("logo").style.height="90px";
    var a=document.getElementsByTagName("a");
    for(i=0;i<5;i++){
        a[i].style.fontSize = "30px";
        changeBackground();
    }
  }
}

