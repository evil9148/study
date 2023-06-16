{
  let num = 0

  document.getElementById('increase').addEventListener(`click`, () => {
    let total = num++
    document.getElementById(`number`).innerHTML = num
  })

  document.getElementById('decrease').addEventListener(`click`, () => {
    let total = num--
    document.getElementById(`number`).innerHTML = num
  })
}

{

  // age가 19 이상 입력되었을 경우 '성인입니다.' 출력
  document.querySelector(`.ex2 button`).addEventListener(`click`, () => {
    let age = parseInt(document.querySelector(`.ex2 input`).value)
    if (age >= 19) {
      alert('성인 입니다.')
    } else {
      alert(`미성년자 입니다.`)
    }
  })

}

{
  document.querySelector(`.ex3 button`).addEventListener(`click`, () => {
    let x = 1
    let sum = 0
    while (sum < 5) {
      sum += x
      document.querySelector(`.ex3 .output`).append('안녕하세요 ')
    }
  })
}

{
  document.querySelector(`.ex4 .while`).addEventListener(`click`,()=>{
    let sum = 0
    let cnt = 0
    while(cnt < 10){
      cnt ++
      sum += cnt
    
      document.querySelector(`.ex4 .output`).append(`${sum}, `)
    }
  })
}


{
  const makeImg = (x) => {
    let make = document.createElement('img')
    make.src = "../../img/" + `img${x}` + '.jpg'
    document.getElementById('frame').appendChild(make)
  }

  document.querySelector(`.ex5 .while`).addEventListener(`click`, () => {
    let x = 0
    while (x <= 4) {
      x++
      makeImg(x)
    }
  })

  document.querySelector(`.ex5 .for`).addEventListener(`click`, () => {
    for (let i = 1; i <= 5; i++){
      makeImg(i)
    }
  })

}