$(window).load(function() {
	$(".loadpage").fadeOut(1500);
})


$(".tagline").click(function() {
    alert("jQuery works!");
});

function renderProgress(progress)
{
    progress = Math.floor(progress);
    
    if(progress<25){
        var angle = -90 + (progress/100)*360;
        jQuery(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=25 && progress<50){
        var angle = -90 + ((progress-25)/100)*360;
        jQuery(".animate-0-25-b").css("transform","rotate(0deg)");
        jQuery(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=50 && progress<75){
        var angle = -90 + ((progress-50)/100)*360;
        jQuery(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
        jQuery(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=75 && progress<=100){
        var angle = -90 + ((progress-75)/100)*360;
        jQuery(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
        jQuery(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
    }
    if(progress==100){
        clearInterval(int);
    }
    jQuery(".text").html(progress+"%");
}
  
function clearProgress()
{
    jQuery(".animate-75-100-b, .animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(90deg)");
}
  
var i=0;
var int = setInterval(function (){
                i++;
                if(i>100) {
                    i=0
                    clearProgress();
                }
                renderProgress(i);
}, 200);  