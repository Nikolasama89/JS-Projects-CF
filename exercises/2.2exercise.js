/**
 * Δημιουργήστε ένα object user με ιδιότητες, name, age, city. 
 * Εκτυπώστε ένα μήνυμα χρησιμοποιώντας αυτές τις 
 * ιδιότητες. Προσθέστε μια μέθοδο hello() που εκτυπώνει έναν 
 * χαιρετισμό χρησιμοποιώντας το name. Καλέστε τη μέθοδο hello()
 * 
 */

const user = {
  name: "Nikos",
  age: 35,
  city: "Zagora",
  hello() {
    return `Hello ${this.name}`
  }
}

console.log(`${user.name} is from ${user.city} and is ${user.age} years old!`)

// function hello() {
//   return `Hello ${user.name}`
// }

console.log(user.hello());
