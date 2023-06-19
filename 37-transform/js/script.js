{
  /*
  마우스 좌표 - 요소의 좌표
  client - getBouding
  window innerWidth
  element clientWidth
  */

  const fn = (clientX) => {
    document.querySelectorAll(`.ex1 figure img`).forEach((img) => {
      img.classList.remove(`deactive`)
      var diffX = clientX - (img.getBoundingClientRect().x + img.clientWidth * 0.5)
      console.log(diffX);
      img.style.transform = `rotateY(${diffX * 0.05}deg)`
    })
  }

  const fnInit = () => {
    document.querySelectorAll(`.ex1 figure img`).forEach((img) => {
      img.classList.add(`deactive`)
    })
  }

  document.querySelector(`.ex1`).addEventListener(`mousemove`, (e) => {
    fn(e.clientX)
  })

  document.querySelector(`.ex1`).addEventListener(`touchmove`, (e) => {
    fn(e.changeTouches[0].clientX)
  })

  document.querySelector(`.ex1`).addEventListener(`mouseleave`, (e) => {
    fnInit()
  })

  document.querySelector(`.ex1`).addEventListener(`touchend`, (e) => {
    fnInit()
  })
}