window.onload=function(){
    var el=document.getElementById("intro");
    var str ='JOIN US';
    var i=0;
    el.innerHTML="";
    var text=setInterval(function(){if(i==(str.length)){clearInterval(text);}else{el.innerHTML=el.innerHTML+str[i];i++;}},500);
    var ele=document.getElementById("intro1");
    var stri="As we come closer to the end of 2020, there are things we all wish hadn't happened, but that's usually the case every year. However, this time we are all in a common crisis and among the many negatives it has brought upon us, the one positive it did was bring us all together in a common collective experience. At wearehere. we took it as a moment to adapt completely to the needs of the people we work for. Change completely to sync with their changed realities-medical care, education, job loss and of course an unknown virus with no end date insight. Every tough time teaches one something and we had our fair share.In the lockdown our focus sharply shifted... with first ensuring people's survival and then working on their growth and wellbeing. The 4.1 million kgs of ration/groceries we reached out in just seven months stands testimony to this change. As we saw millions losing hope in the cities and returning back to their villages, we concentrated on ensuring rural livelihood, to make people self reliant and encourage them stay back in the villages.We have also brought our focus to creating a better disaster response framework, one which looks at poverty as an ongoing disaster and brings together key stakeholders for disaster response in non disaster time.There's a lot to do with the upcoming winters, predictions of more disasters and a worldwide economic downturn. If there ever was a right time to get involved with your country, it's now. If what we do makes sense to you.";
    var j=0;
    el.innerHTML="";
    var test=setInterval(function(){if(j==(stri.length)){clearInterval(test);}else{ele.innerHTML=ele.innerHTML+stri[j];j++;}},10);
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100) {
    document.getElementById("main").style.width = "60px";
    document.getElementById("main").style.top = "30%";
    var cols = document.getElementsByClassName("bttn");
    for(i=0; i<cols.length; i++) {
      cols[i].style.width = "120px";
    }
      
  } else {
    document.getElementById("main").style.top = "90%";
    document.getElementById("main").style.left = "5px";
    document.getElementById("main").style.width = "100%";
  }
}
function needWork(){
    var needwork='<div class=" Card"><h1>WANT TO WORK</h1><form><div class="form-group"><label for="skil1">Skills:</label></div><div class="form-group"><label for="qualification">Qualification:</label></div><div class="form-group"><label for="experience">Experience:</label></div></form></div>' ;
    document.body.appendChild(needwork);
}