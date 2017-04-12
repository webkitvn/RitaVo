$(document).ready(function() {
  $('select').material_select();

  //Toggle sidebar when click the arrow
  $('.toggle-btn').on('click', function(){
    var target = $(this).data('target');
    var targetCollape = '#'+target;
    if($(targetCollape).hasClass('in')){
      $(targetCollape).slideUp('fast');
      $(targetCollape).removeClass('in');
      $(this).addClass('collapsed');
    }
    else{
      $(targetCollape).slideDown('fast');
      $(targetCollape).addClass('in');
      $(this).removeClass('collapsed');
    }
    return false;
  });
  //carousel
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  //Toggle Sidenav on Mobile
  $(".button-collapse").sideNav();
  //Quickview Modal
  $('.modal').modal({
    startingTop: '4%', // Starting top style attribute
    ready : function(){
      $('.modal #carousel').flexslider({
        animation: "slide",
        touch: true,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 140,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4,
        asNavFor: '#slider',
        customDirectionNav: $(".modal .carousel-custom-navigation a")
      });

      $('.modal #slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        customDirectionNav: $(".modal .slider-custom-navigation a")
      });
    }
  });

  //Product detail slider
  $('.product-detail #carousel').flexslider({
    animation: "slide",
    touch: true,
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 151,
    itemMargin: 5,
    minItems: 2,
    maxItems: 4,
    asNavFor: '#slider',
    customDirectionNav: $(".product-detail .carousel-custom-navigation a")
  });

  $('.product-detail #slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    customDirectionNav: $(".product-detail .slider-custom-navigation a")
  });

  //Product Detail Tabs
  $('ul.product-detail-tabs').tabs();
});
