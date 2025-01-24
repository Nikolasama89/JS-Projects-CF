const s = "Coding Factory"
const s2 = "CODING FACTORY"

const replaced = s.replace("Coding", "Code")
const lower = s.toLowerCase()
const upper = s.toUpperCase()

if (s.toUpperCase() === s2.toUpperCase()) {
    console.log("Equals")
}

const firstname = "Nikos   "
if (firstname.trim() === "Nikos") {
    console.log("EQUAL")
}