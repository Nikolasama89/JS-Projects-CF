/**
 * Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη 
 * συνάρτηση filter για να δημιουργήσετε έναν νέο πίνακα 
 * που περιλαμβάνει μόνο τους ζυγούς αριθμούς
 * 
 */

const numbers = [2, 4, 5, 7, 8, 12, 9]

const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers);
