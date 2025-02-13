/**
 *  Δεδομένου ενός πίνακα αντικειμένων, 
 *  χρησιμοποιήστε τη συνάρτηση filter για να 
 *  δημιουργήσετε έναν νέο πίνακα που περιλαμβάνει 
 *  μόνο χρήστες κάτω των 30 ετών
 *  ------------------------------------
 *  Στη συνέχεια χρησιμοποιήστε τη συνάρτηση map για 
 *  να δημιουργήσετε έναν νέο πίνακα που περιέχει μόνο 
 *  τα ονόματα.
 */

const people = [
  {name: "Alice", age: 30},
  {name: "Bob", age: 25},
  {name: "Charlie", age: 35}
];

const peopleUnder30 = people.filter(person => person["age"] < 30)
console.log(peopleUnder30)

const namesOnlyArray = people.map(person => person["name"])
console.log(namesOnlyArray)

