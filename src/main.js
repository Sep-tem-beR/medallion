import './owl/owl.carousel.css'
import './owl/owl.theme.default.css'
import './js/owl.carousel'
import './js/all.js'
import './scss/main.scss'


$( document ).ready(function() {
    $(".madallions__owl-carousel, .trophy-medallions__owl-carousel, .thread-and-taxidermy__owl-carousel, .carved-home-decoration__owl-carousel, .carving-and-natural-materials__owl-carousel, .fixtures__owl-carousel").owlCarousel({
        items: 1,
        margin: 2,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10000,
        navigation : true,
        singleItem : true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });

   	//E-mail Ajax Send
	$(".contact__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
