jQuery(window).on("load", function () {
	
	jQuery(document).ready(function($) { 
	
		"use strict";
		
		// Loader
		$('.eyedoc-loading-wrapper').remove();
		$(".eyedoc-site-wrapper").css('opacity','1');
		
		// Slider
        $('.flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			slideshowSpeed: 7000,
			animationSpeed: 1200, 
        });
		
		// Accordion
	    $( function() {
	      $( ".eyedoc-accordion" ).accordion();
	    } );
		
		// Tabs
	    $( function() {
	      $( ".tabs" ).tabs();
	    } );
		
		// Fixed Menu
		$(".eyedoc-header-wrapper").before($(".eyedoc-header-wrapper").clone().addClass("eyedoc-header-wrapper-fixed"));
		
		$(window).on("load scroll resize", function () {
			$("body").toggleClass("eyedoc-header-wrapper-fixed-show", ($(window).scrollTop() > 200));
		});
		
		// Mobile menu
		$(".eyedoc-mobile-nav-wrapper ul li.menu-item-has-children > a, .eyedoc-mobile-nav-wrapper ul li.page_item_has_children > a").on("click", function (e) {
		    
			if ($(this).parent().has("ul")) {
		        e.preventDefault();
		    }
			$(this).parent().toggleClass('eyedoc-mobile-nav-arrow', 10000);
			$(this).next('ul').slideToggle('slow');
			
		});
		
		// Mobile Navigation
		$(window).resize(function() {
		  if ($(window).width() > 1090) {
			$(".eyedoc-mobile-nav-wrapper").css("display","none");
			$( "body" ).removeClass("eyedoc-mobile-nav-open");
		  }
		});
		
		// Mobile Navigation Button
		$( ".eyedoc-mobile-nav-btn" ).click(function() {
		
			$( "body" ).toggleClass("eyedoc-mobile-nav-open");
		
			$( ".eyedoc-mobile-nav-wrapper" ).slideToggle( "slow", function() {
	    	
		  });
		});
		
		// Testimonials Carousel 1
		$('.eyedoc-carousel-1').owlCarousel({
		    loop:false,
		    margin:0,
		    nav:false,
			pagination: true,
			navText: "",
			autoHeight: true,
		    responsive:{
		        0:{
		            items:1
		        },
				710:{
		            items:2
		        },
				1000:{
		            items:3
		        },
		    }
		});
		
		// Team Carousel
		$('.eyedoc-carousel-2').owlCarousel({
		    loop:false,
		    margin:30,
		    nav:false,
			pagination: true,
			navText: "",
			autoHeight: true,
		    responsive:{
		        0:{
		            items:1
		        },
				490:{
		            items:2
		        },
				710:{
		            items:3
		        },
				920:{
		            items:4
		        },
		    }
		});
		
		// Testimonials Carousel 2
		$('.eyedoc-carousel-3').owlCarousel({
		    loop:false,
		    margin:30,
		    nav:true,
			pagination:false,
			navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
			autoHeight: true,
		    responsive:{
		        0:{
		            items:1
		        },
				700:{
		            items:2
		        },
		    }
		});
		
		// PrettyPhoto
		$("a[data-gal^='prettyPhoto']").prettyPhoto({
			hook: 'data-gal',
			animation_speed: 'fast',
			slideshow: 5000,
			autoplay_slideshow: false,
			opacity: 0.80,
			show_title: true,
			allow_resize: true,
			default_width: 1300,
			default_height: 732,
			counter_separator_label: '/',
			theme: 'pp_default',
			horizontal_padding: 20,
			hideflash: false,
			wmode: 'opaque',
			autoplay: true,
			modal: false,
			deeplinking: false,
			overlay_gallery: false,
			keyboard_shortcuts: true,
			changepicturecallback: function(){},
			callback: function(){},
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
								<div class="pp_right"> \
									<div class="pp_content"> \
										<div class="pp_loaderIcon"></div> \
										<div class="pp_fade"> \
											<div class="pp_hoverContainer"> \
												<a class="pp_next" href="#"><i class="fa-solid fa-chevron-right"></i></a> \
												<a class="pp_previous" href="#"><i class="fa-solid fa-chevron-left"></i></a> \
											</div> \
											<div id="pp_full_res"></div> \
											<div class="pp_details"> \
												<div class="pp_nav"> \
													<a href="#" class="pp_arrow_previous">Previous</a> \
													<p class="currentTextHolder">0/0</p> \
													<a href="#" class="pp_arrow_next">Next</a> \
												</div> \
												<p class="pp_description"></p> \
												<a class="pp_close" href="#"><i class="fa-solid fa-xmark"></i></a> \
											</div> \
										</div> \
									</div> \
								</div> \
								</div> \
							</div> \
							<div class="pp_bottom"> \
								<div class="pp_left"></div> \
								<div class="pp_middle"></div> \
								<div class="pp_right"></div> \
							</div> \
						</div> \
						<div class="pp_overlay"></div>',
				image_markup: '<img id="fullResImage" src="{path}" />'
		});
		
		// Search form
		$('.eyedoc-search-icon').click(function(){
			
			$(".eyedoc-search-wrapper").fadeIn(500);
			
			$('.eyedoc-search-form').click(function (e) {
			    e.stopPropagation();
			});

			$(document).click(function () {
			    $(".eyedoc-search-wrapper").fadeOut(500);
			});
			
			return false;
			
		});
	
	});

});