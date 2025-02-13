/**
 *  Γράψτε μια συνάρτηση που παίρνει έναν 
 *  πίνακα και ένα μέγεθος υποπίνακα και 
 *  χωρίζει τον πίνακα σε υποπίνακες του 
 *  καθορισμένου μεγέθους
 */

function nestedArr(arr, nestNum) {
  let nestArr = []
  // looping the arr and incrementing i with the value we pass in the function
  for (let i = 0; i < arr.length; i += nestNum) {
    // slice from the original array from index i to index + nestNum
    nestArr.push(arr.slice(i, i + nestNum));  //slice creates the subarray and we add it with push to nestArr
  }
  return nestArr;
}

const arr = [1,3,5,6,7,8,9,3,4,5,6,7,8]

console.log(nestedArr(arr, 1))