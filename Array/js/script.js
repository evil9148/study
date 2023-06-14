{
  let arr = []
  let arr2 = new Array(4).fill(1)
  console.log(arr2);
  arr2[2] = 3
  console.log(arr2);
  arr2.push(4)
  console.log(arr2);

  for (let i = 1; i <= 100; i++) {
    arr.push(i * 2)
  }
  document.querySelector(`.ex1 button`).addEventListener(`click`, () => {
    document.querySelector(`.ex1 .output`).append(arr)
  })

}

{
  let arr = []
  for (let i = 1; i <= 100; i++) {
    arr.push(i)
  }

  document.querySelector(`.ex2 button`).addEventListener(`click`, () => {
    let result = arr.filter(c => c % 2 === 0)
    document.querySelector(`.ex2 .output`).append(result)
  })

}


{
  let arr = ['월', '화', '수', '목', '금', '토', '일']
  let arrCopy = [...arr]
  for (let i = 1; i <= 3; i++) {
    let random = Math.floor(Math.random() * arrCopy.length)
    let combine = (i < 3) ? ',' : ''
    document.querySelector(`.ex3 .day`).append(`${arrCopy[random]}${combine}`)
    arrCopy.splice(random, 1)//배열에서 선정된 랜덤번째 요일은 한 개씩 삭제된다.
  }
  document.querySelector(`.ex3 button`).addEventListener(`click`, () => {

  })
}

{
  // let arr = ['월', '화', '수', '목', '금', '토', '일']
  // let arrCopy = [...arr]
  // for (let i = 1; i <= 3; i++) {
  //   let random = Math.floor(Math.random() * arrCopy.length)
  //   let combine = (i < 3) ? ',' : ''
  //   document.querySelector(`.ex3 .day`).append(`${arrCopy[random]}${combine}`)
  //   arrCopy.splice(random, 1)
  // }

  // document.querySelector(`.ex3 button`).addEventListener(`click`, e => {
  //   let arrIdx = document.querySelector(`.ex3 .day`).innerHTML.split(',').map(v => {
  //     return arr.indexOf(v)
  //   })
  //   arrIdx.forEach(v => {
  //     document.querySelector(`.ex3 .output`).append(`${v},`)
  //   })
  // })
}





// {
//   let arr = []
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//   }

//   document.querySelector(`.ex4 button`).addEventListener(`click`, e => {
//     let sum = 0
//     let arrRST = arr.map(v => {
//       return sum += v

//     })
//     document.querySelector(`.ex4 .output`).innerHTML = arrRST
//   })
// }

// {
//   let arr = []
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//   }
//   document.querySelector(`.ex5 button`).addEventListener(`click`, e => {
//     let sum = 0
//     let arrSum = arr.map(v => {
//       return sum += v
//     })
//     document.querySelector(`.ex5 .output`).innerHTML = arrSum
//   })
// }

// {
//   let arr = ['월', '화', '수', '목', '금', '토', '일']
//   let arrCopy = [...arr]
//   for (let i = 1; i <= 3; i++) {
//     let random = Math.floor(Math.random() * arrCopy.length)
//     let combine = (i < 3) ? ',' : ''
//     document.querySelector(`.ex6 .day`).append(arrCopy[random], combine)
//     arrCopy.splice(random, 1)
//   }

//   document.querySelector(`.ex6 button`).addEventListener(`click`, e => {
//     let arrIdx = document.querySelector(`.ex6 .day`).innerHTML.split(',').map(v => {
//       return arr.indexOf(v)
//     })
//     arrIdx.forEach(v => {
//       document.querySelector(`.ex6 .output`).append(`${v},`)
//     })
//   })
// }


// {
//   let arr = ['월', '화', '수', '목', '금', '토', '일']
//   let arrCopy = [...arr]
//   for (let i = 1; i <= 3; i++) {
//     let random = Math.floor(Math.random() * arrCopy.length)
//     let combine = (i < 3) ? ',' : ''
//     document.querySelector(`.ex7 .day`).append(arrCopy[random], combine)
//   }

//   document.querySelector(`.ex7 button`).addEventListener(`click`, e => {
//     let arrIdx = document.querySelector(`.ex7 .day`).innerHTML.split(',').map(v => {
//       return arr.indexOf(v)
//     })
//     document.querySelector(`.ex7 .output`).append(arrIdx)
//   })

// }


// {
//   let arr = []
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i)
//   }

//   document.querySelector(`.ex8 button`).addEventListener(`click`, e => {
//     let sum = 0
//     arr.map(v => {
//       return sum += v
//     })
//     document.querySelector(`.ex8 .output`).append(sum)
//   })
// }