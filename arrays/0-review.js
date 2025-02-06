const cities = ["Athens", "Paris", "Toronto"]

// Add - Modifies the Array
cities.push("London")

let city = cities[0]
console.log(city);

cities[1] = "London"

cities.forEach(c => console.log(c))


cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en"))

// Creates a new copy of the array(sorted)
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en"))

// Copy Deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

// Shallow copies -- Spread operator
const cities3 = [...cities]

const numbers = [1, 2, 3, 4]
let maxVal = Math.max(...numbers)
let maxIndex = numbers.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)