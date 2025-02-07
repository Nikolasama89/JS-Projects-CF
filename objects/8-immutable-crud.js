const obj = {id: 1, firstname: "Alice"}


// Add Properties

// Modify the object
// obj.lastname = "W."
// console.log(obj)

// Immutable - fresh copy
const addToObj = (obj, field, value) => ( {...obj, [field]: value} )
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy);

// Update the object

// Modifies / updates the obj
obj.firstname = "Athana"
console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({ ...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Athana") 
console.log(updatedObj)

// Delete a property of an object

// Immutable delete
const deleteIdFromObject = (obj, field) => {
  const {[field]: _, ...objToReturn} = obj
  return objToReturn
}

const objFromDelete = deleteIdFromObject(obj, "id")
console.log(objFromDelete)