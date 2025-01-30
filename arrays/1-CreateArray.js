const arr = []                   // empty array
const arr1 = [1, 2, 3, 4, 5]    // populated array
const arr2 = [1, "Alice", 3.4, true]
const sparseArr = [1, , 3]     //sparse array
const arr3 = [,,,]            //length is 3
const arr4 = Array(2)
const grid = [[1, 2], [3, 4], [5, 6]]
const objArr = [{id: 1}, {id: 2}, {id: 3}]

console.log(arr1[0])  // 1

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

for (const el of arr1) {
  console.log(el)
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j])
  }
}

for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}