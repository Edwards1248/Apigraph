$(document).ready(function(){

  $(window).load(function() {
    $('.preloader').fadeOut('1200');
  });


  $("#portfolio-contant-active").mixItUp();


  $("#testimonial-slider").owlCarousel({
      paginationSpeed : 500,
      singleItem:true,
      autoPlay: 3000,
  });




  $("#clients-logo").owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5],
  });

  $("#works-logo").owlCarousel({
    autoPlay: 3000,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5],
  });


  // google map
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

  var windowWidth = Math.max($(window).width(), window.innerWidth);



  // Counter

  $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    var sections = $('.section-hero, .section, .hero-slider--item');
    sections.each(function() {
      if ($(this).attr('data-background-image')) {
        var bg = $(this).attr('data-background-image');
        $(this).css('background-image', 'url(' + bg + ')');
      }
    });


    $(window).on('resize', function() {
      var windowHeight = $(window).height();
      $('.section-hero').height(windowHeight);
    }).trigger('resize');

  //function headerSticky() {
    var headerOffsetTop = $('#header-page').offset().top;
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > headerOffsetTop) {
        $('#header-page').addClass('header-page-fixed');
      } else {
        $('#header-page').removeClass('header-page-fixed');
      }
    }).trigger('scroll');
 // }


  // function subToggle()

  function subToggle() {
    if ($('.menu-list').find('.submenu-toggle').length === 0) {
      $('.menu-item-has-children')
        .children('a')
        .after(
        '<span class="submenu-toggle">\
<i class="fa fa-angle-right"></i>\
</span>\
');
      $('.menu-list').on('click', '.submenu-toggle', function(evt) {
        evt.preventDefault();
        $(this)
          .siblings('.sub-menu')
          .addClass('sub-menu-active');
      });
    }
  };

  // function submenuBack()

  function submenuBack() {
    $('.menu-list .sub-menu').each(function() {
      var $this = $(this);
      if ($this.find('.back-mb').length === 0) {
        $this
          .prepend(
          '<li class="back-mb">\
<a href="#">\
<i class="fa fa-angle-left"></i>Back\
</a>\
</li>\
');
      }
      $('.menu-list').on('click', '.back-mb a', function(evt) {
        evt.preventDefault();
        $(this)
          .parent()
          .parent()
          .removeClass('sub-menu-active');
      });
    });
  };


  //function menuResponsive()
  (function menuResponsive() {
  $(window).on('load resize', function() {
      var dataResponsive = $('.navigation').data('responsive'),
          windowWidth = window.innerWidth,
          windowHeight = window.innerHeight;
      $('.open-menu-responsive').hide();
      if (windowWidth <= dataResponsive) {
        $('.open-menu-responsive').show();
        $('.navigation')
          .removeClass('pi-navigation')
          .addClass('pi-navigation-responsive');
        $('.pi-navigation-responsive .menu-list').innerHeight(windowHeight);
        $('.toggle-search').css('margin-right', '50px');
        subToggle();
        submenuBack();
      } else {
        $('.navigation')
          .removeClass('pi-navigation-responsive')
          .addClass('pi-navigation');
        $(document).find('.navigation .menu-list').css('height', 'auto');
        $('.toggle-search').css('margin-right', '0');
        $('.submenu-toggle, .back-mb').remove();
      }
    });
    $('.open-menu-responsive').on('click', function(evt) {
      evt.preventDefault();
      $('.close-menu-responsive').toggleClass('close-menu-responsive-active');
      $('.pi-navigation-responsive .menu-list').toggleClass('menu-list-active');
    });
    $('.close-menu-responsive').on('click', function(evt) {
      evt.preventDefault();
      $(this).removeClass('close-menu-responsive-active');
      $('.pi-navigation-responsive .menu-list').removeClass('menu-list-active');
    });

    $(document).on('click', function () {
      $('.close-menu-responsive').removeClass('close-menu-responsive-active');
      $('.pi-navigation-responsive .menu-list').removeClass('menu-list-active');
    });

    $('.menu-list, .open-menu-responsive, .close-menu-responsive').on('click', function(evt) {
      evt.stopPropagation();
    });
  }());
});




