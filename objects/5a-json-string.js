const jsObj = {
  id: 1,
  hobies: [ {id:1, title: "gym"}, {id:2, title: "music"} ]
}

// Serialization
const jsonStr = JSON.stringify(jsObj)
console.log(jsonStr);

// Deserialization
const obj2 = JSON.parse(jsonStr)
console.log(obj2);
