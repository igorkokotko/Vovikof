$(window).load(function() {
	$(".loadpage").fadeOut(1000, function() {
	    // body...
	});
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

$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

