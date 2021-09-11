$(document).ready(function () {
  new WOW().init();
  // mobile menu
  $(".mobile-menu").click(function () {
    $(".header-nav").addClass("show");
  });
  $(".header-nav").click(function () {
    $(this).removeClass("show");
  });
  $(".header-nav ul").click(function (e) {
    e.stopPropagation();
  });

  $(".sub-menu-toggle").click(function () {
    $(this).toggleClass("active");
    $(this).parent().find(".hn-sub-menu").toggleClass("active");
  });

  $(window).on("resize", function () {
    var win = $(this);

    if (win.width() >= 930) {
      $(".header-nav").removeClass("show");
    }
  });
  // constructure slide
  setTimeout(function () {
    scaleSlide();
  }, 500);

 $(".sec-con-slide")
    .owlCarousel({
      center: true,
      autoplay: true,
      autoplaySpeed: 300,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      smartSpeed: 300,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      navText: [
        "<img src='images/prev-icon.png'>",
        "<img src='images/next-icon.png'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        930: {
          items: 5,
        },
      },
    })
    .on("translated.owl.carousel", scaleSlide);
  function scaleSlide() {
    $(".sec-con-slide .owl-item").removeClass("slide-scale");
    $(".sec-con-slide .owl-item").removeClass("slide-center");
    var centerSlide = $(".sec-con-slide .owl-item.center");
    centerSlide.addClass("slide-center");
    centerSlide.next().addClass("slide-scale");
    centerSlide.prev().addClass("slide-scale");
  }

  var allConSlide = [];
  $(".sec-con-list a").each(function(i,item){
    allConSlide.push($(item).attr('href'));
  })

  allConSlide.forEach(function(item){
    $(item).find('.sec-con-slide').on('mouseenter', '.owl-item', function(e) {
    var me = this
    var action = setTimeout(function(){
      var carousel = $(item).find('.sec-con-slide').data('owl.carousel');
      e.preventDefault();
      carousel.to(carousel.relative($(me).index()));
    },600)
    $(e.target).on('mouseleave',function(){
      clearTimeout(action);
    })
  })
})


  //projects slide
  var projectsSlide = $(".sec-pro-slide");
  projectsSlide
    .owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 400,
      nav: true,
      dots: false,
      smartSpeed: 400,
      autoplayHoverPause: true,
      navText: [
        "<img src='images/prev-icon.png'>",
        "<img src='images/next-icon.png'>",
      ],
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        500: {
          items: 2,
          slideBy: 2,
        },
        900: {
          items: 3,
          slideBy: 3,
        },
      },
    })
    .on("resized.owl.carousel", setButtonTop);

  setButtonTop();
  function setButtonTop() {
    var checkHeight = setInterval(function(){
        var heightImg = $(".sec-pro-slide .owl-item.active img").height();
        if(heightImg > 0){
          clearInterval(checkHeight);
        }
        $(".sec-pro-slide .owl-next").css("top", heightImg / 2 + "px");
        $(".sec-pro-slide .owl-prev").css("top", heightImg / 2 + "px");

    } ,200)

   
  }

  //partner slide
  $(".sec-par-slide").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    smartSpeed: 400,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 400,
    navText: [
      "<img src='images/prev-icon-2.png'>",
      "<img src='images/next-icon-2.png'>",
    ],
    responsive: {
      0: {},
      items: 3,
      900: {
        items: 6,
      },
    },
  });
  //menu tag
  $(".menu-tag-btn").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().find(".menu-tag-btn").removeClass("active");
    $(this).addClass("active");
    var target = $(this).attr("href");
    $(target).parent().find(".tag-control").removeClass("active");
    $(target).addClass("active");
  });
  //scroll Efect
  var pos = $("html").scrollTop();

  scrollEfectAbout(pos);
  $(window).on('scroll',function (event) {
    var posScroll = $("html").scrollTop();
    scrollEfectAbout(posScroll);
  });

   function scrollEfectAbout(pos) {
    $.each($(".img-group-wp"), function (i, item) {
      if ($(item).offset().top - 600 > pos) {
        $(item).find(".scoll-ef").addClass("scoll");
      }
      if ($(item).offset().top - 600 < pos) {
        $(item).find(".scoll-ef").removeClass("scoll");
      }
    });
  }

  //num-effect

$('.num-effect').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  
  //icon gif
   scrollEfectIcon(pos);
  $(window).on('scroll',function (event) {
    var posScroll = $("html").scrollTop();
     $.each($(".icon-gif"), function (i, item) {
      if ($(item).offset().top - 500 > posScroll) {
        $(this).removeClass('stop');
      }
    })
    if($(".icon-gif").hasClass('stop')){
      return;
    }
    scrollEfectIcon(posScroll);
  });

   function scrollEfectIcon(pos) {
    $.each($(".icon-gif"), function (i, item) {

      if ($(item).offset().top - 500 < pos) {
        $('.icon-gif').each(function(){
          var src = $(this).attr("data-src");
          $(this).attr('src', src);
          $(this).addClass('stop');
        })
      }
    });
  }

  //slide image and video
 $(".sec-iv-slide").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 400,
      nav: false,
      dots: false,
      smartSpeed: 400,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        900: {
          items: 2,
          slideBy: 2,
        },
      },
    })

     //slide hero banner
  $('.hero-banner .banner-cont').addClass('show');
 $(".hero-banner-slide").owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 400,
      nav: false,
      dots: false,
      smartSpeed: 400,
      items: 1,
      slideBy: 1,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    }).on("change.owl.carousel", effectSlide);

    function effectSlide(){
      $('.hero-banner .banner-cont').removeClass('show');
      setTimeout(function(){
        $('.hero-banner .banner-cont').addClass('show');
      },500)
      
    }

    setTimeout(function(){
      $(".logo-banner").addClass('hidden');
    },4000)

    setTimeout(function(){
      $(".logo-banner .some-text span").addClass('show');
    },1700)
    
    //slide news

  mySlides();
  var sIn1;
  var sIn2

  $(window).on('resize',function(){
    clearInterval(sIn1);
    clearInterval(sIn2);
    mySlides();
  })

  function mySlides(){
    var mySlides = $("#news");
    var transform = 0;
    var height = 0;
    initialMySlide()
    
    function initialMySlide(){
      transform = 0;
      height = 0;
      $(mySlides).find('.my-slide').removeClass("active last")
      $(mySlides).find('.my-slide').each(function(i, item){
        if( i <= 3){
          $(item).addClass('active');
          if(i == 3){
            $(item).addClass('last');
          }
        }
      })
      setHeight();
      mySlides.css("min-height", height + "px")
    }
    

    sIn1 =  setInterval(function(){

        if($( $(mySlides).find('.last').length == 0 || mySlides).find('.last').nextAll().length == 0){
          initialMySlide()
          return;
        }

        $(mySlides).find('.last').nextAll().each(function(i, item){
          if(i == 0){
             $(mySlides).find('.my-slide').removeClass("active last");
          }
          
          if( i <= 3){
            $(item).addClass('active');
            if(i == 3){
              $(item).addClass('last');
            }
          }
        })

        setHeight()
    },5000)
    sIn2 = setInterval(function(){
        $(mySlides).find('.my-slide').removeClass("show");
        $(mySlides).find('.my-slide.active').addClass("show");

    },7500)

    function setHeight(){
       $(mySlides).find('.my-slide').addClass("show");

      transform = transform + height;

      $(mySlides).find(".my-slide-wp").css("transform", "translateY(-"+ transform  +"px)");
      
      height = 0;
      $(mySlides).find('.my-slide.active').each(function(i, item){
          height = height + $(item).height();
      })
      mySlides.css("height", height + "px");
    }
  }



});
function mySearch() {
  var element = document.getElementById("form_search");
  element.classList.toggle("show");
}
