$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    //최종값 + (스크롤값 - (스크롤목적지)) * 속도
    var offTop = $(`.ex1`).offset().top
    var h = $(`.ex1`).innerHeight()
    var meta = 0 + (scrTop - (offTop - winHeight * 0.5 + h * 0.5)) * -0.8
    if(meta >= 0) {
      meta = 0
    }
    $(`.ex1 .car`).css({'transform':`translate(${meta}px)`})
  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})





$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    var offTop = $(`.ex2`).offset().top
    var h = $(`.ex2`).innerHeight()

    var meta = 50 + Math.abs(scrTop - (offTop - winHeight * 0.5 + h * 0.5)) * -0.1
    $(`.ex2`).css({'border-radius':`${meta}%`})
  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})

$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    var offTop = $(`.ex3`).offset().top
    var h = $(`.ex3`).innerHeight()

    var meta = 1 - Math.abs(scrTop - (offTop - winHeight * 0.5 + h * 0.5)) * -0.003
    $(`.ex3`).css({'transform': `scale(${meta})`})

  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})

$(function(){
  var req;
  function parallax(){
    var scrTop = $(window).scrollTop();
    var winHeight = $(window).height();

    $(`.ex4 div`).each(function(){
      var offTop = $(this).offset().top;
      var h = $(this).innerHeight();
      var meta = 1 + Math.abs(scrTop - (offTop - winHeight * 0.5 + h * 0.5)) * -0.002;
 

   
      $(this).children(`div`).css({
        'transform':`scale(${meta})`,
        'opacity':meta
    })
    });
  };

  parallax();

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  });


})

$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})

$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})

$(function(){
  var req
  function parallax(){

  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})

$(function(){
  var req
  function parallax(){

  }

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})