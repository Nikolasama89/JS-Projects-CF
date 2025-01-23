let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)
let intResult = Math.floor(num1 / num2)
let upperInt = Math.ceil(num1 / num2)
let roundResult = Math.round(num1 / num2)

let modResult = num1 % num2 //JS & JAVA remaining part of a division

console.log(divResult, fixedDiv,expr, intResult, upperInt, roundResult, modResult)