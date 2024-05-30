//console.log(name, single, age)
//console.log(typeof 'Variety')

let firstName = 'Michael'
let lastName = 'Gbuwe'
let country = 'Nigeria'
let age = 20
let isMarried = false
let yea = 2024


console.log(``)
/*
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof '10' == 10)
console.log(parseInt(9.8) == 10)
*/
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 == '4')
console.log(4 === '4')

let python = 'python'
let jargon = 'jargon'

console.log(python.length !== jargon.length)

const now = new Date()
console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getMonth() + 1)
console.log(now.getSeconds())
console.log(now.getMinutes())

const allSeconds = Date.now()
console.log(allSeconds)

console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))

let base = 20
let height = 10

console.log(area = 0.5 * base * height)

let myAge = 250
let yourAge = 25

console.log(`I am ${myAge - yourAge} older than you`)

let hour = 40
let ratePerHours = 28

console.log(hour * ratePerHours)

const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
function myFunction() {
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");

length = parseFloat(length)
width = parseFloat(width)

const area = length * width
const perimeter = 2 * (length + width)

console.log("The area of the rectangle is: " + area);
console.log("The perimeter of the rectangle is: " + perimeter);
}

// Coordinates of the points
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

// Calculate the slope
let slope = (y2 - y1) / (x2 - x1);

// Output the result
console.log("The slope between the points (2, 2) and (6, 10) is: " + slope);


const PI = 3.14
let r = prompt()