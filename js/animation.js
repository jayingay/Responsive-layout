
/* add class on nav */

$(window).scroll(function(){
        
    $('div.d-flex').toggleClass('scrolled', $(this).scrollTop() > 50);
     

 });

/* scroll down hide & scroll up show on navbar */
var scrollEffect = window.pageYOffset;
window.onscroll = function(){

    var currentPos = window.pageYOffset;

    if(scrollEffect > currentPos){
        document.getElementById('navbar').style.top = "0px";

    }else{
        document.getElementById('navbar').style.top = "-100px";
        document.getElementById('navbar').style.transition = ".5s ease-in-out";
    }
    scrollEffect = currentPos;
}
