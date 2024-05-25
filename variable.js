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