
console.log('Welcome to 30DaysOfJavaScript')


console.log('working on thiry days of Js')

let count = 0
console.log(count++)
console.log(count)

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

  console.log(5 + 4 * 3); // 3 + 20
// Expected output: 23

console.log(4 * 5 ** 2); // 4 * 9
// Expected output: 36

//const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)

const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

//let lastIndex = fruits.length - 1
//lastFruit = fruits[lastIndex]

//console.log(lastFruit)  // lemon

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100

const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

let longestCountry = countries[0]

for (const country of countries) {
  if (country.length > longestCountry.length) {
    longestCountry = country
  }
}
console.log(longestCountry)
