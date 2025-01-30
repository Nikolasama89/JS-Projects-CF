const objArray = [
  {id: 1, first: "Bob", age: 23},
  {id: 2, first: "Alice", age: 34},
  {id: 3, first: "Costas", age: 53},
  {id: 4, first: "George", age: 13},
]

// Sort by age
objArray.sort(function(a, b) {
  return a.age - b.age
})

console.log(objArray)