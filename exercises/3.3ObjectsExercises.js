/**
 * Γράψτε μια συνάρτηση που παίρνει ως είσοδο ένα 
 * αντικείμενο και μία callback συνάρτηση μετασχηματισμού και 
 * μετασχηματίζει το αντικείμενο για κάθε ζεύγος κλειδιού-τιμής 
 * (π.χ. μετατρέπει τα keys σε uppercase)
 */


const uppercaseKeys = (obj) => Object.keys(obj).reduce((acc, k) => {
  acc[k.toUpperCase()] = obj[k]
  return acc
}, {})

const user = {name: "Nikos", age: 35, city: "Zagora"}

console.log(uppercaseKeys(user))