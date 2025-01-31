/**
 * Γράψτε μια συνάρτηση που να παίρνει ως 
 *  παράμετρο έναν nested πίνακα και 
 *  επιστρέφει έναν μονοδιάστατο πίνακα που 
 *  να περιέχει όλα τα στοιχεία.
 */

function flattedArr(arr) {
  return arr.flat(Infinity)   // Ισοπεδώνει ολους τους nested πινακες
}

const arr = [[1,2], [3,4], [5,6]]
console.log(flattedArr(arr))
