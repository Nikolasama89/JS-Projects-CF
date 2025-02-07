const initial = { name: "Alice", age: 30, address: { street: "Patission", num: 76}}

// With spreading. Spread operator give a shallow copy
const copyInitial = {...initial} 
console.log(copyInitial);

// 2. Object type
const copyInitial2 = Object.assign({}, initial)

// 3. With JSON function
const copyInitial3 = JSON.parse(JSON.stringify(initial))

const initial2 = { name: "Alice", age: undefined, address: { street: "Patission", num: 76}}
console.log(JSON.stringify(initial2));
