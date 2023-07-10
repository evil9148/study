{
  let arr1 = ['a', 'b']
  let arr2 = arr1

  arr2.push('c')
  console.log(arr2); // ['a','b','c']
  console.log(arr1); // ['a','b','c']
}

{
  let arr1 = ['a', 'b']
  let arr2 = arr1.slice()

  arr2.push('c')
  console.log(arr1); // ['a','b']
  console.log(arr2); // ['a','b','c']

  let arrA = ['a', 'b']
  let arrB = arrA.map(c => c)

  arrB.push('c')
  console.log(arrA); // ['a','b']
  console.log(arrB); // ['a','b','c']

}

{
  let arr1 = [1, 2, 3]
  let arr2 = [...arr1]

  arr2.push(4)

  console.log(arr1); // [1,2,3]
  console.log(arr2); // [1,2,3,4]
}

{
  let arrA = [{ name: '기준', age: 31 }]
  let arrB = [...arrA]

  arrB[0].name = 'jun'

  console.log(arrA); //[{name: 'jun', age: 31}]
  console.log(arrB); //[{name: 'jun', age: 31}]
}

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
    let arrIdx = document.querySelector(`.ex3 .day`).innerHTML.split(',').map(c => arr.indexOf(c))
    console.log(arrIdx);
    arrIdx.forEach(c => {
      document.querySelector(`.ex3 .output`).append(`${c}, `)
    });
  })

}



