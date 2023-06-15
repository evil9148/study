{
let num = 0

document.getElementById('increase').addEventListener(`click`,()=>{
  let total = num ++
  document.getElementById(`number`).innerHTML = num
})

document.getElementById('decrease').addEventListener(`click`,()=>{
  let total = num --
  document.getElementById(`number`).innerHTML = num
})
}

{

    // age가 19 이상 입력되었을 경우 '성인입니다.' 출력
    document.querySelector(`.ex2 button`).addEventListener(`click`,()=>{
      let age = parseInt(document.querySelector(`.ex2 input`).value)
      if(age >= 19){
        alert('성인 입니다.')
        } else{
          alert(`미성년자 입니다.`)
        }
    })
    
}

{
  document.querySelector(`.ex3 button`).addEventListener(`click`,()=>{
    let x = 1
    let sum = 0
    while(sum<=5){
      sum += x
      document.querySelector(`.ex3 .output`).append('안녕하세요')
    }
  })
}