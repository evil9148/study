document.addEventListener('DOMContentLoaded', () => {

  const fnMouseHandler = (clientX, clientY, pageX, pageY, offsetX, offsetY) => {
    document.querySelector(`.clientX`).innerHTML = clientX
    document.querySelector(`.clientY`).innerHTML = clientY
    document.querySelector(`.pageX`).innerHTML = pageX
    document.querySelector(`.pageY`).innerHTML = pageY
    // document.querySelector(`.offsetX`).innerHTML = offsetX
    // document.querySelector(`.offsetY`).innerHTML = offsetY
  }

  window.addEventListener(`mousemove`, (e) => {
    fnMouseHandler(e.clientX, e.clientY, e.pageX, e.pageY, e.offsetX, e.offsetY)

  })

  window.addEventListener(`touchmove`, (e) => {
    fnMouseHandler(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY,
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY,

    )
  })
})

{
  const fnGetMouseOffset = (clientX, clientY, objX, objY) => {
    let offsetX = clientX - objX
    let offsetY = clientY - objY
    document.querySelector(`.ex2 .offsetX`).innerHTML = offsetX
    document.querySelector(`.ex2 .offsetY`).innerHTML = offsetY
  }
  document.querySelector(`.ex2`).addEventListener(`mousemove`, (e) => {
    fnGetMouseOffset(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect().x, e.currentTarget.getBoundingClientRect().y)

  })

  document.querySelector(`.ex2`).addEventListener(`touchmove`, (e) => {
    fnGetMouseOffset(e.changedTouches[0].clientX, e.changedTouches[0].clientY, e.currentTarget.getBoundingClientRect().x, e.currentTarget.getBoundingClientRect().y)
  })

  {//cursor
    window.addEventListener(`mousemove`, (e) => {
      document.querySelector(`.cur`).style.opacity = 1
      document.querySelector(`.cur`).style.top = `${e.clientY}px`
      document.querySelector(`.cur`).style.left = `${e.clientX}px`
    })

    document.querySelector(`.ex2`).addEventListener(`mouseenter`, (e) => {
      document.querySelector(`.cur`).classList.add(`beat`)
    })

    document.querySelector(`.ex2`).addEventListener(`mouseleave`, (e) => {
      document.querySelector(`.cur`).classList.remove(`beat`)
    })


    document.querySelectorAll(`button, a`).forEach((el) => {
      el.addEventListener(`mouseenter`, () => {
        document.querySelector(`.cur`).classList.add('active')
      })     
      el.addEventListener(`mouseleave`, () => {
        document.querySelector(`.cur`).classList.remove('active')
      })
    })
  }

}






/*-------------------JQuery--------------------*/
// $(function () {
//   $(window).bind('mousemove', function () {
//     console.log('move');
//   })

//     $(window).bind('touchmove', function () {
//     console.log('touchMove');
//   })
// })


// window.addEventListener(`mousemove`, (e) => {

//   fnMouseHandler(e.clientX, e.clientY)
// })

// window.addEventListener(`touchmove`, (e) => {
//   console.log(e.changedTouches[0].clientX)
// })

/*-------------------JQuery--------------------*/
// $(function () {
//   $(window).bind('mousemove', function () {
//     console.log('move');
//   })

//     $(window).bind('touchmove', function (e) {
//     console.log(e.originalEvent.changedTouches[0].clientX);
//   })
// })