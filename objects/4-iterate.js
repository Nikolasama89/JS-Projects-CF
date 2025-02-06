const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens",
  isStudent: false
}

const keys = Object.keys(person)
keys.forEach(key => console.log(`key: ${key}, value: ${person[key]}`))

console.log(Object.values(person))

const grades = {
  maths: 8, 
  science: 10,
  history: 5
}

const total = Object.values(grades).reduce((sum, value) => sum + value, 0)
let avg = total / Object.values(grades).length
console.log(avg.toFixed(2))