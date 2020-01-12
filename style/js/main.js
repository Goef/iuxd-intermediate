



$(window).scroll(function() {

    var hT = $('#convo1').offset().top,
        hH = $('#convo1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
      var convo1 = document.getElementById("convo1");
      convo1.classList.add("animated");
      convo1.classList.add("bounceInLeft")
      document.getElementById("convo1").style.visibility = "visible";


    }
 });
 
$(window).scroll(function() {

    var hT = $('#convo2').offset().top,
        hH = $('#convo2').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
      var convo2 = document.getElementById("convo2");
      convo2.classList.add("animated");
      convo2.classList.add("bounceInRight")
      document.getElementById("convo2").style.visibility = "visible";


    }
 });
 
$(window).scroll(function() {

    var hT = $('#convo3').offset().top,
        hH = $('#convo3').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
      var convo3 = document.getElementById("convo3");
      convo3.classList.add("animated");
      convo3.classList.add("bounceInLeft")
      document.getElementById("convo3").style.visibility = "visible";


    }
 });
 
$(window).scroll(function() {

    var hT = $('#convo4').offset().top,
        hH = $('#convo4').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
      var convo4 = document.getElementById("convo4");
      convo4.classList.add("animated");
      convo4.classList.add("bounceInRight")
      document.getElementById("convo4").style.visibility = "visible";


    }
 });
 $(window).scroll(function() {

    var hT = $('#convo5').offset().top,
        hH = $('#convo5').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
      var convo5 = document.getElementById("convo5");
      convo5.classList.add("animated");
      convo5.classList.add("bounceInLeft")
      document.getElementById("convo5").style.visibility = "visible";


    }
 });
 $(window).scroll(function() {

  var hT = $('#convo6').offset().top,
      hH = $('#convo6').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    var convo6 = document.getElementById("convo6");
    convo6.classList.add("animated");
    convo6.classList.add("bounceInRight")
    document.getElementById("convo6").style.visibility = "visible";


  }
});
$(window).scroll(function() {

  var hT = $('#convo7').offset().top,
      hH = $('#convo7').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    var convo7 = document.getElementById("convo7");
    convo7.classList.add("animated");
    convo7.classList.add("bounceInLeft")
    document.getElementById("convo7").style.visibility = "visible";


  }
});
$(window).scroll(function() {

  var hT = $('#convo8').offset().top,
      hH = $('#convo8').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    var convo8 = document.getElementById("convo8");
    convo8.classList.add("animated");
    convo8.classList.add("bounceInRight")
    document.getElementById("convo8").style.visibility = "visible";


  }
});
 console.log()

