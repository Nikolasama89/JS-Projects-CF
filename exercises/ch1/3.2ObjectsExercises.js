/**
 *Γράψτε μια συνάρτηση που παίρνει ως είσοδο ένα 
 *αντικείμενο και μια συνάρτηση mapping και επιστρέφει ένα 
 *νέο αντικείμενο όπου οι τιμές είναι το αποτέλεσμα της 
 *εφαρμογής της συνάρτησης mapping στις αρχικές τιμές
 */



const obj = {a: 1, b: 2, c: 3}
const double = (x) => x * 2

const mapValues = (obj, mapping) => {
  let result = {}
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = mapping(value)
  })
  return result
}
result = mapValues(obj, double)

console.log(result)