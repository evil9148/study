$(function () {
  $('.ex1 .div1 button').click(function () {
    var num1 = parseInt($(`.ex1 .div1 .num1`).val())
    var num2 = parseInt($(`.ex1 .div1 .num2`).val())
    var sum = num1 + num2
    var multi = num1 * num2
    $(`.ex1 .div1 .output`).text(`${sum}, ${multi}`)
  })

  $('.ex1 .div2 button').click(function () {
    var num1 = parseInt($(`.ex1 .div2 .num1`).val())
    var num2 = parseInt($(`.ex1 .div2 .num2`).val())
    var sum = num1 + num2
    var minus = num1 - num2
    $('.ex1 .div2 .output').text(`${sum}, ${minus}`)
  })

  $('.ex1 .div3 button').click(function () {
    var num1 = parseInt($(`.ex1 .div3 .num1`).val())
    var num2 = parseInt($(`.ex1 .div3 .num2`).val())
    var minus = num1 - num2
    var multi = num1 * num2
    $('.ex1 .div3 .output').text(`${minus}, ${multi}`)
  })

  $('.ex1 .div4 button').click(function () {
    var num1 = parseInt($(`.ex1 .div4 .num1`).val())
    var num2 = parseInt($(`.ex1 .div4 .num2`).val())
    var sum = num1 + num2
    var divide = num1 / num2
    $('.ex1 .div4 .output').text(`${sum}, ${divide}`)
  })

  var fn1 = (divN)=>{
    var num1 = parseInt($(`.ex2 .div${divN} .num1`).val())
    var num2 = parseInt($(`.ex2 .div${divN} .num2`).val())
    var sum = num1 + num2
    var minus = num1 - num2
    var multi = num1 * num2
    var divide = num1 / num2
    var calc = {sum, minus, multi, divide}
    return calc
  }

  $('.ex2 .div1 button').click(function () {
    var {sum, multi} = fn1(1)
    $(`.ex2 .div1 .output`).text(`${sum}, ${multi}`)
  })

  $('.ex2 .div2 button').click(function () {
    var {sum, minus} = fn1(2)
    $('.ex2 .div2 .output').text(`${sum}, ${minus}`)
  })

  $('.ex2 .div3 button').click(function () {
    var {minus, multi} = fn1(3)
    $('.ex2 .div3 .output').text(`${minus}, ${multi}`)
  })

  $('.ex2 .div4 button').click(function () {
    var {sum, divide} = fn1(4)
    $('.ex2 .div4 .output').text(`${sum}, ${divide}`)
  })


  $(`.ex3 .div1 button`).click(function(){
    var num1 = parseInt($(`.ex3 .div1 .num1`).val())
    var num2 = parseInt($(`.ex3 .div1 .num2`).val())
    var num3 = parseInt($(`.ex3 .div1 .num3`).val())
    var total = num1 + num2 
    var mean = total / 2
    $(`.ex3 .div1 .output`).text(`총점: ${total}, 평균: ${mean}`)
  })

  var fn2 = (divN, num)=>{
    var {} = numObj
    var num1 = parseInt($(`.ex3 .div${divN} .num1`).val())
    var num2 = parseInt($(`.ex3 .div${divN} .num2`).val())
    var num3 = parseInt($(`.ex3 .div${divN} .num3`).val())
    var total = num1 + num2 
    var mean = total / 2
    $(`.ex3 .div${divN} .output`).text(`총점: ${total}, 평균: ${mean}`)
  }

 

})