function max(...rest) {
  let maxVal = -Infinity

  for (let n of rest) {
    if (n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}
console.log(max(1, 6, 9, 35, 45, 88))

function sum(...rest) {
  return rest.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 4, 5, 15))

function greet(message, ...names) {
  console.log(message + ", " + names.join(", "))
}
greet("Hello", "Alice", "Bob", "Nikos")