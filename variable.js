/*let age = 35
const gravity = 9.81
let mass = 72
const PI = 3.14

*/

/*const num = Math.floor(Math.random () * 11)

console.log(num)


let space = ' '
let firstName = 'Michael'
let lastName = 'Gbuwe'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250

let fullName = firstName + space + lastName

console.log(fullName)

//template literal
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let a = 2
let b = 3
console.log(`${a} is less than ${b} : ${a < b}`)

let string = 'Leverkusen'

console.log(string.length)

let lastLetter = string[9]

console.log(string.substring(0,5))

let string = '51 games unbeaten run'

console.log(string.replace('unbeaten', 'losing'))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))

let name = '   Mike   '

console.log(name.trim())

let club = 'Bayer04'

console.log(club.concat("Leverkusen"))

//let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
//console.log(string.match(/javascript/gi))


let string = 'love'
console.log(string.repeat(5))

// Different javascript data types
// Let's declare different data types

let firstName = 'Michael'      // string
let lastName = 'Gbuwe'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 25                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

let num = '10'
let numInt = parseInt(num)

console.log(numInt)

let num = '10'
let numInt = +num

console.log(numInt) // 10

*/
let challenge = '30 Days Of JavaScript'
//let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(challenge.repeat(2))
//console.log(companies.split(','))
let word = 'You cannot end a sentence with because because because is a conjunction'
console.log(word.substr(31,23))


let num = '9.8'
let numInt = parseInt(num)

console.log(numInt + 1)


//let randomNumber = Math.floor(Math.random() * challenge)
let target = 'JavaScript'
let targetIndex = challenge.indexOf(target)
const randomIndex = Math.floor(Math.random() * target.length);
const randomCharacter = challenge[targetIndex + randomIndex];
console.log(randomCharacter)

console.log('1 1 1 1 1\n 2 1 2 4 8')

let poet = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(poet.match(/love/gi))

let club

console.log(club)

let empty = null
console.log(empty)
const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

console.log(3>2)

console.log(1 == true)

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false