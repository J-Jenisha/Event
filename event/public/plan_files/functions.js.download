// JavaScript Document
$(document).ready(function() {

	$(".search-bar").on('click',function () {
		$(".search-box").toggle("fade" )
	});
	
	//tooltip
	$("[data-toggle='tooltip']").tooltip();

	if($(".bxslider").length){
		$('.bxslider').bxSlider({
			mode: 'fade'
		});
	}

	if($(".bxslider2").length){
		$('.bxslider2').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade'
		});
	}

	if($(".gallery").length){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	}


	if($("#owl-carousel").length){
		
		var owl = $("#owl-carousel");
		
		owl.owlCarousel({
		  items : 4, //10 items above 1000px browser width
		  itemsDesktop : [1000,3], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,3], // betweem 900px and 601px
		  itemsTablet: [600,2], //2 items between 600 and 0
		  itemsMobile : [480,1] // itemsMobile disabled - inherit from itemsTablet option
		});
		
		// Custom Navigation Events
		$(".next").on('click',function(){
			owl.trigger('owl.next');
		})
		$(".prev").on('click',function(){
			owl.trigger('owl.prev');
		});
	}
	if($(".chart").length){
		$('.chart').easyPieChart({});  
	}
	if($(".accordion_cp").length){
		  //custom animation for open/close
		$.fn.slideFadeToggle = function(speed, easing, callback) {
			return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};

		$('.accordion_cp').accordion({
			defaultOpen: 'section1',
			cookieName: 'nav',
			speed: 'slow',
			animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
				elem.next().stop(true, true).slideFadeToggle(opts.speed);
			},
			animateClose: function (elem, opts) { //replace the standard slideDown with custom function
				elem.next().stop(true, true).slideFadeToggle(opts.speed);
			}
		});
	} 
});