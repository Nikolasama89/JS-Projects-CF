/**
  * Γράψτε μια συνάρτηση που παίρνει δύο 
  *  πίνακες και επιστρέφει έναν νέο πίνακα που 
  *  περιέχει στοιχεία που είναι κοινά και στους 
  *  δύο πίνακες
*/




// 1st way
// function sameValuesInArray(arr1, arr2) {
//   sameVals = []
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         sameVals.push(arr1[i])
//       }
//     } 
//   }
//   return sameVals 
// }

//2nd way 
function sameValuesInArray(arr1, arr2) {
  return arr1.filter(val => arr2.includes(val));
}

const arr1 = [1, 2, 3, 5, 6, 8, 9]
const arr2 = [1, 2, 4, 5, 8, 7]

console.log(sameValuesInArray(arr1, arr2))
