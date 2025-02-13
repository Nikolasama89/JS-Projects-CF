/**
 *  Exercise 1.1 
 *  Δηλώστε μία μεταβλητή ‘name‘ τύπου string και ορίστε 
 *  το όνομά σας σε αυτή. Εκτυπώστε ένα μήνυμα 
 *  χρησιμοποιώντας συνένωση όπως “Hello, [όνομα]! “
 */

const name = "Nikos"
console.log(`Hello, ${name}!`);

console.log("Hello, " + name + "!");

console.log("Hello, ".concat(name +"!"))