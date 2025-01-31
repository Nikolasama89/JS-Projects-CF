/**
 * Γράψτε μια συνάρτηση που παίρνει ως 
 * παράμετρο έναν πίνακα και επιστρέφει έναν 
 * νέο πίνακα που περιέχει μόνο τις μοναδικές 
 * τιμές (χωρίς διπλότυπα)
 * 
 */

function noDuplicates(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const arr = [1, 2, 3, 4, 2, 6, 6, 6]


console.log(noDuplicates(arr));
