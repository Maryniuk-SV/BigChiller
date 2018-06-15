$(document).ready(function() {
	//////////////// MENU //////////////////////////
	$(window).resize(function() {
		var htmlWidth = $('html').width();
		if(htmlWidth > 768) {
			$('.menu').removeClass('menu__active');
		}
	});
	$('.menu__list').hover(function() {
		$('.menu__drop').addClass('menu__drop--active');
	}, 
	function() {
		$('.menu__drop').removeClass('menu__drop--active');
	});

	$('.hamburger').click(function(e) {
		e.preventDefault();
		$('.menu').toggleClass('menu__active');
		$(this).find('span').toggleClass('hamburger__active');
	});

	$('#mainnav a').click(function(e) {
		e.preventDefault();
		$('.menu').removeClass('menu__active');
		$('.hamburger').find('span').removeClass('hamburger__active');
	});

  $(document).mouseup(function (e){
		var div = $(".menu");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			div.removeClass('menu__active');
		$('.hamburger').find('span').removeClass('hamburger__active');
		}
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 40) {
			$('.header__navigation').addClass('navigation__fixed');
		} else {
			$('.header__navigation').removeClass('navigation__fixed');
		}
	});

		//   // Anchor links/////////////////

		$("#top__menu").on("click","a", function (event) {
			event.preventDefault();
			if($(this).hasClass('show_menu'))return;
			if($(this).parent().hasClass('show_right_menu'))return;
			var id  = $(this).attr('href'),
			top = $(id).offset().top - 65;
			$('body,html').stop().animate({scrollTop: top}, 1500);    
		});

	  ///////////////////////
	  var lastId,
	  topMenu = $("#top__menu"),
	  topMenuHeight = topMenu.outerHeight() + 65,
  // All list items
  menuItems = topMenu.find("#mainnav > li > a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
  	var item = $($(this).attr("href"));
  	if (item.length) {
  		return item;
  	}
  });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;

		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
  	if ($(this).offset().top < fromTop)
  		return this;
  });
  // Get the id of the current element

  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  if (lastId !== id) {
  	lastId = id;

		// Set/remove active class
		menuItems.parent().removeClass("active")
		.end().filter("[href='#" + id + "']").parent().addClass("active");
	}

});



	var $slideItems = $('.banner__item'),
	$dots  			= $('.dot'),
	current 		= 0;

	var slideItems  = document.getElementsByClassName('banner__item');
	var sliderInterval = setInterval(moveSlides, 4000);

	$($dots).click(function() {
		clearInterval(sliderInterval);
		var $this = $(this).index();
		current = $this;
		$(this).addClass('dot__active').siblings().removeClass('dot__active');
		$($slideItems).each(function(i) {
			$(this).removeClass('banner__item--active');
			if(i === $this) {
				$(this).addClass('banner__item--active');
			}
		});
		sliderInterval = setInterval(moveSlides, 4000);
	});

	function moveSlides() {
		clearInterval(sliderInterval);
		if(current === $slideItems.length) {
			current = 0;
		}
		$($slideItems).each(function(i) {
			$(this).removeClass('banner__item--active');
		});
		$($dots).each(function(i) {
			$(this).removeClass('dot__active');
			if(i === current) {
				$(this).addClass('dot__active');
			}
		});

		slideItems[current].classList.add('banner__item--active');
		current++;
		sliderInterval = setInterval(moveSlides, 4000);
	}

	///////////////////////////////////////////////////////
	var $sliderItems = $('.slider__item'),
	$sliderDots  			= $('.slider__dot'),
	curr 		= 1;

	var aboutItems  = document.getElementsByClassName('slider__item');
	var sliderInt = setInterval(moveSlidesAbout, 4000);

	$($sliderDots).click(function() {
		clearInterval(sliderInt);
		var $th = $(this).index();
		curr = $th;
		$(this).addClass('slider__dot--active').siblings().removeClass('slider__dot--active');
		$($sliderItems).each(function(i) {
			$(this).removeClass('slider__item--active');
			if(i === $th) {
				$(this).addClass('slider__item--active');
			}
		});
		sliderInt = setInterval(moveSlidesAbout, 4000);
	});

	function moveSlidesAbout() {
		clearInterval(sliderInt);
		if(curr === $sliderItems.length) {
			curr = 0;
		}
		$($sliderItems).each(function(i) {
			$(this).removeClass('slider__item--active');
		});
		$($sliderDots).each(function(i) {
			$(this).removeClass('slider__dot--active');
			if(i === curr) {
				$(this).addClass('slider__dot--active');
			}
		});

		aboutItems[curr].classList.add('slider__item--active');
		curr++;
		sliderInt = setInterval(moveSlidesAbout, 4000);
	}
	////tabs
	var $tabLink = $('.tabs__link ul li a'),
			$tabItem = $('.tabs__item'),
			item 		 = 0;

	$($tabLink).click(function(e) {
		e.preventDefault();

		$($tabLink).each(function(i) {
			$(this).removeClass('tabs__active');
		});
		$(this).addClass('tabs__active');
		$($tabLink).each(function(i) {
			if($(this).hasClass('tabs__active')) {
				item = i;
			}
		});
		showTab(item)
	});

	function showTab(n) {
		$($tabItem).each(function(i) {
			$(this).removeClass('tabs__item--active')
			if(i === n) {
				$(this).addClass('tabs__item--active');
			};
		});
	};

});