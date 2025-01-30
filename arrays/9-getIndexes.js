const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

function findIndexes(arr, num) {
  const indexArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      indexArr.push(i)
    }
  }
  return indexArr
}

const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
      if (v === val) {
        indexes.push(index)
      }
  })

  return indexes
}

console.log(getIndexes(arr, 2))
console.log(findIndexes(arr, 2))