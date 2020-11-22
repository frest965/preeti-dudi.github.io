function send{
    var name=document.getElementById("name").innerHTML;
    var email=document.getElementById("email").innerHTML;
    var number=document.getElementById("number").innerHTML;
    var reason=document.getElementById("reason").innerHTML;
    var refference="mailto:frest965@gmail.com?subject="+reason+"contact&body=Name:"+name+"Number:"+number+""+"Email:"+email;
    document.getElementById("send-mail").href = refference;
}