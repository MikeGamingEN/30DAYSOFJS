const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    } console.log(i)
}

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    } console.log(i)
}
// for of loops
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

const arr = ['a', 'b', 'c'];

console.log('Using for...in:');
for (const index in arr) {
  console.log(index); // outputs the indices 0, 1, 2
}

console.log('Using for...of:');
for (const value of arr) {
  console.log(value); // outputs the values 'a', 'b', 'c'
}

for (i = 10; i >= 0; i--) {
    console.log(i)
}
// test
const n = 6
for (let i = 0; i <= n; i++) {
    console.log(i)
}

const m = 7
for (i = 1; i <= m; i++) {
    console.log('#'.repeat(i))
}

for (let i = 0; i <=10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

console.log('i   i^2   i^3')
for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i ** 2}    ${i ** 3}`)
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true; // 2 and 3 are prime numbers
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
}
  
  // Iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
}

let sum = 0; // Initialize sum to 0

for (let i = 0; i <= 100; i++) {
  sum += i; // Add the current value of i to sum
}

console.log("The sum of all numbers from 0 to 100 is " + sum); // Print the result

let sumEvens = 0
let sumOdds = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) { 
        sumEvens += i
    } else {
        sumOdds += i
    }
}
//console.log("The sum of all evens from 0 to 100 is " + sumEvens) 
//console.log("And the sum of all odds from 0 to 100 is " + sumOdds)

const sums = [sumEvens, sumOdds]
console.log(sums)

function getRandomNumber() {
    return Math.floor(Math.random() * 101)
}

const randomNumbers = []

for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomNumber())
}

console.log(randomNumbers)

const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countriesInfo = countries.map(countries => [
countries, countries.slice(0,3).toUpperCase(), countries.length
])

const countriesWithLand = countries.filter(countries => countries.includes('land'))
console.log(countriesWithLand)
console.log(countriesInfo)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase())
    }
}

const fruits = ['banana', 'orange', 'mango', 'lemon']
const reversedFruits = []

for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i])
}
console.log(reversedFruits)

const technologies = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const tech of technologies) {
    console.log(tech)
}

const mernStack = ["MongoDB", "Express", "React", "Node"]

let acronym = ''

for (const techs of mernStack) {
    acronym += techs[0]
}
console.log(acronym)

const countriesCopy = countries.slice()
console.log(countriesCopy)
console.log(mernStack.sort())
console.log(webTechs.sort())

const reversedCountries = countries.reverse()
const capitalizedReversedCountries = reversedCountries.map(countries => countries.toUpperCase())
console.log(capitalizedReversedCountries)


// functions
function addTwoNumbers() {
    numOne = 10
    numTwo = 30
    sum = numOne + numTwo

    console.log(sum)
}
addTwoNumbers()

function printFullName() {
    let firstName = 'Michael'
    let lastName = 'Gbuwe'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function bundClub(firstNam, secondNam) {
    return `${firstNam} ${secondNam}`
}
console.log(bundClub('Bayer', 'Leverkusen'))

function calculateSpeed(distance, time) {
    if (time === 0) {
        return "Time cannot be zero"
    }
    return distance / time
}
let distance = 500
let time = 50

let speed = calculateSpeed(distance, time)
console.log(`Speed: ${speed} is meters per second`)

function convertCelciusToFahrenheit(celcius) {
    let fahrenheit = (celcius * 9/5) + 32
    return fahrenheit  
}
let celcius = 35
let fahrenheit = convertCelciusToFahrenheit(celcius)
console.log(convertCelciusToFahrenheit(fahrenheit))