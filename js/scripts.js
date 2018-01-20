    // ==== Hamburger ==== 
    $(document).ready(function() {
      $(".cross").hide();
      $(".menu").hide();
      $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
          $(".hamburger").hide();
          $(".cross").show();
        });
      });
      $(".cross").click(function() {
        $(".menu").slideToggle("slow", function() {
          $(".cross").hide();
          $(".hamburger").show();
        });
      });
    });


    // ==== Carousel ====
    var $item = $('.carousel .item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');
    $('.carousel img').each(function() {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image': 'url(' + $src + ')',
        'background-color': $color
      });
      $(this).remove();
    });
    $(window).on('resize', function() {
      $wHeight = $(window).height();
      $item.height($wHeight);
    });
    $('.carousel').carousel({
      interval: 6000,
      pause: "false"
    });

    // ==== Arrow ====
    var $arrow = $("#arrow");
    var $off = $(".values").offset().top;

    $("#arrow").on("click", function() {
      $("body, html").animate({
        scrollTop: $(".values").offset().top
      }, 1200)
    })

    // ==== brand carousel ====

    // left
    $(function() {
      var imgWidth = 300;
      var transtion = 800;
      var carouselList = $("#brands-carousel-left ul");
      var intervalOne = setInterval(changeSlide, 3000);

      function changeSlide() {
        carouselList.animate({
          'marginLeft': -imgWidth
        }, transtion, moveFirstSlide);
      };

      function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
          marginLeft: 0
        });
      };
    });

    // center
    $(function() {
      var imgWidth = 300;
      var transtion = 800;
      var carouselList = $("#brands-carousel-center ul");
      var intervalOne = setInterval(changeSlide, 3000);

      function changeSlide() {
        carouselList.animate({
          'marginLeft': -imgWidth
        }, transtion, moveFirstSlide);
      };

      function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
          marginLeft: 0
        });
      };
    });

    // right
    $(function() {
      var imgWidth = 300;
      var transtion = 800;
      var carouselList = $("#brands-carousel-right ul");
      var intervalOne = setInterval(changeSlide, 3000);

      function changeSlide() {
        carouselList.animate({
          'marginLeft': -imgWidth
        }, transtion, moveFirstSlide);
      };

      function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
          marginLeft: 0
        });
      };
    });