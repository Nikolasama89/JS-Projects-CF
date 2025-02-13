/**
 * Δημιουργήστε έναν πίνακα που ονομάζεται cities με τις τιμές 
 * “Athens", “London", “Paris". Προσθέστε “Berlin" στο τέλος 
 * του πίνακα. Διασχίστε τον πίνακα και εκτυπώστε κάθε πόλη
 */


const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")

// forEach Method
cities.forEach(el => console.log(el))

//For of method
for (const city of cities) {
  console.log(city)
}