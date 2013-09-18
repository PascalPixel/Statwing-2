$(document).ready(function() {
	var barreset = function() {
			$('.chart-male .bar-1, .chart-male .bar-2, .chart-male .bar-3, .chart-male .bar-4, .chart-male .bar-5, .chart-male .bar-6, .chart-male .bar-7, .chart-male .bar-8, .chart-male .bar-9, .chart-male .bar-10, .chart-male .bar-11, .chart-male .bar-12, .chart-male .bar-13, .chart-male .bar-14, .chart-male .bar-15, .chart-male .bar-16, .chart-female .bar-1, .chart-female .bar-2, chart-female .bar-3, .chart-female .bar-4, .chart-female .bar-5, .chart-female .bar-6, .chart-female .bar-7, .chart-female .bar-8, .chart-female .bar-9, .chart-female .bar-10, .chart-female .bar-11, .chart-female .bar-12, .chart-female .bar-13, .chart-female .bar-14, .chart-female .bar-15, .chart-female .bar-16').css("height", "5px");
		};
	//Animation Gender v. Satisfaction
	var genderVSsatisfaction = function() {
			$('.chart-male .bar-1').css("height", "5%");
			$('.chart-male .bar-2').css("height", "5%");
			$('.chart-male .bar-3').css("height", "5%");
			$('.chart-male .bar-4').css("height", "5%");
			$('.chart-male .bar-5').css("height", "20%");
			$('.chart-male .bar-6').css("height", "40%");
			$('.chart-male .bar-7').css("height", "50%");
			$('.chart-male .bar-8').css("height", "60%");
			$('.chart-male .bar-9').css("height", "70%");
			$('.chart-male .bar-10').css("height", "90%");
			$('.chart-male .bar-11').css("height", "100%");
			$('.chart-male .bar-12').css("height", "90%");
			$('.chart-male .bar-13').css("height", "80%");
			$('.chart-male .bar-14').css("height", "70%");
			$('.chart-male .bar-15').css("height", "60%");
			$('.chart-male .bar-16').css("height", "50%");
			$('.chart-female .bar-1').css("height", "20%");
			$('.chart-female .bar-2').css("height", "10%");
			$('.chart-female .bar-3').css("height", "20%");
			$('.chart-female .bar-4').css("height", "50%");
			$('.chart-female .bar-5').css("height", "60%");
			$('.chart-female .bar-6').css("height", "55%");
			$('.chart-female .bar-7').css("height", "70%");
			$('.chart-female .bar-8').css("height", "100%");
			$('.chart-female .bar-9').css("height", "60%");
			$('.chart-female .bar-10').css("height", "80%");
			$('.chart-female .bar-11').css("height", "70%");
			$('.chart-female .bar-12').css("height", "70%");
			$('.chart-female .bar-13').css("height", "40%");
			$('.chart-female .bar-14').css("height", "20%");
			$('.chart-female .bar-15').css("height", "10%");
			$('.chart-female .bar-16').css("height", "5%");
		};
	// Relate selected buttons function
	var relate = function() {
			if ($('#compareBtn1').hasClass('active') && $('#compareBtn2').hasClass('active')) {
				$('.compare1').fadeIn();
			} else if ($('#compareBtn1').hasClass('active') && $('#compareBtn3').hasClass('active')) {
				$('.compare2').fadeIn();
				genderVSsatisfaction();
			} else if ($('#compareBtn1').hasClass('active') && $('#compareBtn4').hasClass('active')) {
				$('.compare3').fadeIn();
			} else if ($('#compareBtn2').hasClass('active') && $('#compareBtn3').hasClass('active')) {
				$('.compare4').fadeIn();
				genderVSsatisfaction();
			} else if ($('#compareBtn2').hasClass('active') && $('#compareBtn4').hasClass('active')) {
				$('.compare5').fadeIn();
			} else if ($('#compareBtn3').hasClass('active') && $('#compareBtn4').hasClass('active')) {
				$('.compare6').fadeIn();
			}
		};
	//The array that will always hold the two most recent selected buttons
	var activeBtns = [];
	$('.btn-compare').bind('click', function() {
		var $btn = $(this);
		//1. Hide the right box, reset arrow
		$('.compare-result').fadeOut();
		barreset();
		$('.line-double').css("background-image", "url(img/line-double.png)");
		$('.line-merge').css("background-image", "url(img/line-merge.png)");
		//2. Push in the array if button is pushed
		if (!$btn.hasClass('active')) {
			activeBtns.push($btn); //add clicked elem to array
			if (activeBtns.length > 2) { //population control :)
				activeBtns.shift();
			}
		} else {
			activeBtns = $.grep(activeBtns, function(elem, index) {
				return elem.attr('class') !== $btn.attr('class'); //remove clicked element from the array. I compare classes as they provide a clean result, objects don't work
			});
		}
		//3. Run the show/hide buttons mambo jumbo
		$('.btn-compare').removeClass('active');
		for (x in activeBtns) {
			activeBtns[x].addClass('active');
		}
		//4. Change background lines
		if ($('#compareBtn1').hasClass('active') && $('#compareBtn2').hasClass('active')) {
			$('.line-double').css("background-image", "url(img/line-double_1.png)");
			$('.line-merge').css("background-image", "url(img/line-merge_1.png)");
		} else if ($('#compareBtn1').hasClass('active') && $('#compareBtn3').hasClass('active')) {
			$('.line-double').css("background-image", "url(img/line-double_2.png)");
			$('.line-merge').css("background-image", "url(img/line-merge_2.png)");
		} else if ($('#compareBtn1').hasClass('active') && $('#compareBtn4').hasClass('active')) {
			$('.line-double').css("background-image", "url(img/line-double_3.png)");
			$('.line-merge').css("background-image", "url(img/line-merge_3.png)");
		} else if ($('#compareBtn2').hasClass('active') && $('#compareBtn3').hasClass('active')) {
			$('.line-double').css("background-image", "url(img/line-double_4.png)");
			$('.line-merge').css("background-image", "url(img/line-merge_4.png)");
		} else if ($('#compareBtn2').hasClass('active') && $('#compareBtn4').hasClass('active')) {
			$('.line-double').css("background-image", "url(img/line-double_5.png)");
			$('.line-merge').css("background-image", "url(img/line-merge_5.png)");
		} else if ($('#compareBtn3').hasClass('active') && $('#compareBtn4').hasClass('active')) {
			$('.line-double').css("background-image", "url(img/line-double_6.png)");
			$('.line-merge').css("background-image", "url(img/line-merge_6.png)");
		}
	});
	//5. Relate button click, compare two active buttons
	$('.btn-relate').bind('click', function() {
		relate();
	});
	//6. Intro timed animation
	setTimeout(function() {
		genderVSsatisfaction();
	}, 1000);
	//7. Light up Sign up button after hero scrolled
	$(document).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 500) {
			$(".btnSignup").stop().css({"border-color":"#a7db67","color":"#a7db67"});
		} else {
			$(".btnSignup").stop().css({"border-color":"#aec4cb","color":"#aec4cb"});
		}
	});
	//8. Activate SKROLLR
	var s = skrollr.init();
});