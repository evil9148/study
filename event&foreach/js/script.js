{
  document.querySelectorAll(`.ex1 button`).forEach((w) => {
    w.addEventListener(`click`, e => {
      console.log(e.target.innerText)
    })
  })








  document.querySelector(`.ex2 button`).addEventListener(`click`, e => {
    let sum = 0
    document.querySelectorAll(`.ex2 input`).forEach((v => {
      sum += parseInt(v.value)
    }))
    document.querySelector(`.ex2 .output`).innerText = sum
  })




}

{
  document.querySelectorAll(`.ex3 input`).forEach(v => {
    v.addEventListener(`input`, e => {
      let sum = 0
      document.querySelectorAll(`.ex3 input`).forEach(v => {
        sum += parseInt(v.value)
      })
      document.querySelector(`.ex3 .output`).innerText = sum
    })

  })

}





{


  function fn(num) {
    document.querySelector(`.ex${num} button`).addEventListener(`click`, e => {
      document.querySelectorAll(`.ex${num} .box`).forEach(v => {
        v.style.backgroundColor = v.innerText
      })
    })
  }
fn(4)
fn(5)

}


