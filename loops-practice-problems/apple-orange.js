
// Practice Problem-1 
var moneyGiven = 1000
var applePrice = 400
var orangePrice = 300
var totalPrice = applePrice + orangePrice;
// console.log(totalPrice)
var getBack = moneyGiven - totalPrice
// console.log(getBack)

// Practice Problem-2
// 75.25.65,80,35.45,99.50

//Mathematics, Biology,Chemistry,Physics and bangla
var mathmarks = 75.25
var biologyMarks = 65
var chemistryMarks = 80
var physicsMarks = 35.45
var banglaMarks = 99.50

totalMarks = mathmarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks
console.log(totalMarks)
var average = totalMarks / 5
var averageTwoDecimal = average.toFixed(2)
console.log(averageTwoDecimal)

// practice problem-4

var fruits = ["Apple", "Banana", "Orange"]
var bananaIndex = fruits.indexOf("Banana")
fruits[bananaIndex] = 'Mango'
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.push('Watermelon')
console.log(fruits)
