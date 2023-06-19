$(function () {
  function fnZoom(pageX, pageY, container, bigImg) {
    bigImg.show()
    var offsetX = pageX - container.offset().left //문서기준의 마우스 좌표 - 문서 기준의 요소위치
    var ratioX = offsetX / container.innerWidth()// 요소기준의 마우스 위치
    var moveRangeX = container.innerWidth() - bigImg.innerWidth() //큰이미지가 이동할 수 있는 최대거리
    var moveX = ratioX * moveRangeX

    var offsetY = pageY - container.offset().top //문서기준의 마우스 좌표 - 문서 기준의 요소위치
    var ratioY = offsetY / container.innerWidth()// 요소기준의 마우스 위치
    var moveRangeY = container.innerWidth() - bigImg.innerWidth() //큰이미지가 이동할 수 있는 최대거리
    var moveY = ratioY * moveRangeY

    bigImg.css({left:`${moveX}px`,top:`${moveY}px`})
  }



  $(`.ex1 figure`).mousemove(function (e) {
    fnZoom(e.pageX, e.pageY, $(this), $(this).find(`.big`))
  })
  $(`.ex1 figure`).bind('touchmove', function (e) {
    fnZoom(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY, $(this), $(this).find(`.big`))
  })
  $(`.ex1 figure`).mouseleave(function () {
    $(this).find(`.big`).hide()
  })
  $(`.ex1 figure`).bind('touchend', function (e) {
    $(this).find(`.big`).hide()
  })
})
//  마우스 움직임(비율) X 움직일 수 있는 최대 수치(제어량)
//   mouseoffset/박스크기 X
// pageX-offset)/박스크기 X (figure - img크기)