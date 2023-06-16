{
  document.querySelector(`.for button`).addEventListener(`click`, () => {
    for (let i = 1; i <= 10; i++)
      document.querySelector(`.for .output`).innerHTML = i;
  })

  document.querySelector(`.while button`).addEventListener(`click`, () => {
    let n = 0
    let x = 0
    while (n < 3) {
      n++
      x += n
      document.querySelector(`.while .output`).append(`${x}, `);
    }
  })

  document.querySelector(`.for-test button`).addEventListener(`click`, () => {
    const number = [1, 2, 3, 4, 5]
    for (let i = 0; i < number.length; i++) {
      console.log(number[i]);
      document.querySelector(`.for-test .output`).innerHTML = i;
    }
  })

  document.querySelector(`.forEach button`).addEventListener(`click`, () => {
    const number = [1, 2, 3, 4, 5]
    number.forEach((c) => console.log(c))
})

}