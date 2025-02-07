const obj = { name: "Nikos", age: 35, city: "Athens" }
const keys = ["name", "city"]

// const newObj = (obj, keys) => keys.reduce((acc, key) => {
//   if (key in obj) {
//     acc[key] = obj[key]
//   }
//   return acc
// }, {})

// console.log(newObj(obj, keys))

const newObj = (obj, keys) => {
  const result = {}
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

console.log(newObj(obj, keys))