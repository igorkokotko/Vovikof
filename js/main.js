$(window).load(function() {
	$(".loadpage").fadeOut(1500);
})


$(".tagline").click(function() {
    alert("jQuery works!");
});


$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 50) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }

});

