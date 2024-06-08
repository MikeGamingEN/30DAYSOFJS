//console.log(name, single, age)
//console.log(typeof 'Variety')
/*
let firstName = 'Michael'
let lastName = 'Gbuwe'
let country = 'Nigeria'
let age = 20
let isMarried = false
let yea = 2024

console.log(``)
*/
/*
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof '10' == 10)
console.log(parseInt(9.8) == 10)
*/
/*
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
*/
/*
const now = new Date()
console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getMonth() + 1)
console.log(now.getSeconds())
console.log(now.getMinutes())

const allSeconds = Date.now()
console.log(allSeconds)
*/
/*
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
*/
/*
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
*/
/*
function myFunction() {
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");

length = parseFloat(length)
width = parseFloat(width)

//const area = length * width
const perimeter = 2 * (length + width)

console.log("The area of the rectangle is: " + area);
console.log("The perimeter of the rectangle is: " + perimeter);
}
*/
// Coordinates of the points
/*
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

// Calculate the slope
let slope = (y2 - y1) / (x2 - x1);

// Output the result
console.log("The slope between the points (2, 2) and (6, 10) is: " + slope);
*/
/*
function yourFunction() {
const PI = 3.14
let r = prompt("Enter the radius:")

const area = PI * r * r

const circumference = 2 * PI * r
console.log("The area of the circle is: " + area);
console.log("The circumference of the circle is: " + area);
}

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number
}
const now = new Date()
const year = now.getFullYear();
const month = addLeadingZero(now.getMonth() + 1); // Months are zero-based
const day1 = addLeadingZero(now.getDate());
const hours = addLeadingZero(now.getHours());
const minutes = addLeadingZero(now.getMinutes());

// Format the date and time in YYYY-MM-DD HH:mm format

const formattedDateTime = `${year}-${month}-${day1} ${hours}:${minutes}`;

console.log(formattedDateTime);

let num = 4

if (num > 0) {
    console.log(`${num} is a positive number`)
} else if (num < 0) {
    console.log(`${num} is a negative number`)
} else if (num == 0) {
    console.log(`${num} is zero`)
} else {
    console.log(`${num} is not a number`)
}

let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.

// if else if else
*/
/*
let weather = 'sun'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
*/
/*
let weather = 'sunny'
switch (weather)  {
    case 'rainy':
        console.log('You need a raincoat')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket')
        break
    case 'sunny':
        console.log('Go out freely')
        break
    default :
    console.log('No need for rain coat')    
}   

function akpFunction() {
    let dayUserInput = prompt('What day is today ?')
    let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
}

function mikFunction() {
    let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
}

let a = 4
let b = 3
let c = a > b
*/
/*
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}
*/
c 
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is less than ${b}`)