"use strict";
/*
 * ----------------------------------------------------------------------------------------
 Author       : Iniciativa_develop
 Template Name: Theme-simon - Multipurpose
 Version      : 1.0
 * ----------------------------------------------------------------------------------------
 */

$(document).ready(function() {

  /*
   * ----------------------------------------------------------------------------------------
   *  PRELOADER JS
   * ----------------------------------------------------------------------------------------
   */
  $('.preloader').fadeOut();
  $('.preloader-area').delay(450).fadeOut('slow');

  /*
   * ----------------------------------------------------------------------------------------
   *  Revolution Slider JS
   * ----------------------------------------------------------------------------------------
   */
  var header, bannerRevSlider;
  // Home slider height fix
  function homeSliderHeightFix() {
    $('#home').height($(window).height());
  }

  var simonRevSlider = $('[data-action="simon_revslider"]'),
    simonRevSliderArrow = {
      style: '',
      enable: false,
    };

  var simonRevSliderBullet = {
    enable: true
  };

  simonRevSlider.each(function() {

    var revSliderWrapID = $(this);

    if (revSliderWrapID.attr('id') == 'simon_revslider_1') {
      simonRevSliderArrow = {
        style: 'simon-revslider-1-arrow',
        enable: true,
      }
    }
    if (revSliderWrapID.attr('id') == 'simon_revslider_2') {
      simonRevSliderArrow = {
        style: 'simon-revslider-2-arrow',
        enable: true,
      }
    }
    if (revSliderWrapID.attr('id') == 'simon_revslider_3') {
      simonRevSliderBullet = {
        enable: true,
      }
    }

    if (revSliderWrapID.revolution == undefined) {
      revslider_showDoubleJqueryError(revSliderWrapID);
    } else {

      bannerRevSlider = revSliderWrapID.show().revolution({
        sliderType: "standard",
        jsFileLocation: "assets/libs/revolution/js/",
        sliderLayout: "fullscreen",
        stopLoop: "off",
        stopAfterLoops: 0, //-1
        stopAtSlide: 1,
        responsiveLevels: [1240, 1024, 778, 485],
        gridwidth: [1400, 1170, 778, 480],
        gridheight: [800, 700, 1050, 500],
        delay: 6000,
        shuffle: "on",

        navigation: {
          keyboardNavigation: "on",
          onHoverStop: "off",
          arrows: {
            style: simonRevSliderArrow.style,
            enable: simonRevSliderArrow.enable,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: '',
            left: {
              container: "slider",
              h_align: "left",
              v_align: "center",
              h_offset: 30,
              v_offset: 0
            },
            right: {
              container: "slider",
              h_align: "right",
              v_align: "center",
              h_offset: 30,
              v_offset: 0
            }
          },
          bullets: {
            style: "",
            enable: simonRevSliderBullet.enable,
            hide_onmobile: false,
            hide_onleave: false,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "middle",
            h_offset: 0,
            v_offset: 50
          }
        },

        lazyType: "none",
        parallax: {
          type: "mouse+scroll",
          origo: "slidercenter",
          speed: 2000,
          levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50],
          disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "spinner2",
        autoHeight: "on",
        disableProgressBar: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false
        }
      });
      revSliderWrapID.bind("revolution.slide.onchange", function(e, data) {
        if (data.currentslide.hasClass('slider-color-schema-white')) {
          $('body').removeClass('color-schema-white').addClass('color-schema-dark');
        } else if (data.currentslide.hasClass('slider-color-schema-dark')) {
          $('body').removeClass('color-schema-dark').addClass('color-schema-white');
        }
      });
    }
  });
  // Home slider height fix
  homeSliderHeightFix();

  /*
   * ----------------------------------------------------------------------------------------
   *  MENU RESPONSIVE JS
   * ----------------------------------------------------------------------------------------
   */
  $(function() {
    var ancho = $(window).width(),
      links = $('#links'),
      btnMenu = $('#btn-menu'),
      icono = $('#btn-menu .icono');
    if (ancho < 768) {
      links.hide();
      icono.addClass('ion-navicon-round');
    }
    btnMenu.on('click', function() {
      links.slideToggle();
      icono.toggleClass('ion-navicon-round');
      icono.toggleClass('ion-close-round');
    });
    $(window).on('resize', function() {
      if ($(this).width() > 768) {
        links.show();
        icono.addClass('ion-navicon-round');
        icono.removeClass('ion-close-round');
      } else {
        links.hide();
      }
    });
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  CHANGE MENU BACKGROUND AND TO UP JS
   * ----------------------------------------------------------------------------------------
   */

  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      header = $('.main-header'),
      button = $('#backToTop');
    if (scroll > 250) {
      header.addClass('is-sticky');
      button.fadeIn();
      button.addClass('visible');
    } else {
      header.removeClass('is-sticky');
      button.fadeOut();
      button.removeClass('visible');
    }
  });

  $('#backToTop').on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  SMOTH SCROOL JS
   * ----------------------------------------------------------------------------------------
   */
  $('nav a.page-scroll').on("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 81
    }, 1000);
    e.preventDefault();
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  TABS JS
   * ----------------------------------------------------------------------------------------
   */

  $(function() {
    $('ul.nav-tabs li a:first').addClass('active');
    $('.tab-content div').hide();
    $('.tab-content div:first').show();
    $('ul.nav-tabs li a').on("click", function() {
      $('ul.nav-tabs li a').removeClass('active');
      $(this).addClass('active');
      $('.tab-content div').hide();
      var activeTab = $(this).attr('href');
      $(activeTab).fadeIn('slow');
      return false;
    });

  });

  /*
   * ----------------------------------------------------------------------------------------
   *  USER & SCREENSHOTS JS
   * ----------------------------------------------------------------------------------------
   */

   // carousel
	$("#client-slider").owlCarousel({
     loop: true,
     center: false,
     margin: 35,
     nav: false,
     dots: false,
     navText: ["&#xf124", "&#xf125"],
     pag:false,
     responsive: {
       320: { items: 2 },
       600: { items: 2 },
       768: { items: 3 },
       1024: { items: 5 },
       1366: { items: 5 },
       1440: { items: 5 }
     }
   });

   /*/ carousel
   $("#single-carousel").owlCarousel({
     loop: true,
     center: false,
     margin: 35,
     nav: false,
     dots: true,
     navText: ["&#xf124", "&#xf125"],
     pag:true,
     responsive: {
       320: { items: 1 },
       600: { items: 1 },
       768: { items: 1 },
       1024: { items: 1 },
       1366: { items: 1 },
       1440: { items: 1 }
     }
   });

   // carousel
   $("#team-carousel").owlCarousel({
     loop: true,
     center: false,
     margin: 35,
     nav: false,
     dots: false,
     navText: ["&#xf124", "&#xf125"],
     pag:false,
     responsive: {
       320: { items: 1 },
       600: { items: 2 },
       768: { items: 2 },
       1024: { items: 3 },
       1366: { items: 4 },
       1440: { items: 4 }
     }
   });

  */// carousel
   $("#blog-carousel").owlCarousel({
     loop: true,
     center: false,
     margin: 25,
     nav: false,
     dots: false,
     navText: ["&#xf124", "&#xf125"],
     pag:false,
	 
     responsive: {
       320: { items: 1 },
       600: { items: 1 },
       768: { items: 1 },
       1024: { items: 2 },
       1366: { items: 3 },
       1440: { items: 3 }
     }
   });
	
   $('.jquery_accordion_title').on("click", function() {
     $(this).closest('.jquery_accordion_item').siblings().removeClass('in').find('.jquery_accordion_content').slideUp(400);
   	$(this).closest('.jquery_accordion_item').siblings().removeClass('active').find('.jquery_accordion_content').slideUp(400);
   	$(this).closest('.jquery_accordion_item').toggleClass('active').find('.jquery_accordion_content').slideToggle(400);
   	return false;
   });
$('.dropdown-toggle').dropdown();
});
