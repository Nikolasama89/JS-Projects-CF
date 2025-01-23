const user = {
    firstname: "Nick",
    lastname: "Mick",
    getFirstname: function() {
        return this.firstname
    },

    getFullName() {
        return `${this.firstname},  ${this.lastname}`
    }
}

console.log(user.getFirstname())
console.log(user.getFullName())