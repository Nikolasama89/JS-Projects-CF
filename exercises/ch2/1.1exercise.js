/**
 * Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη 
 * συνάρτηση map για να δημιουργήσετε έναν νέο πίνακα 
 * όπου κάθε αριθμός διπλασιάζεται
 */

const numbers = [5, 4, 3, 2, 6, 10, 7]

let mappedNumbers = numbers.map(number => number * 2)

console.log(mappedNumbers)