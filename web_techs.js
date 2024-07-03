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

function checkSeason(month) {
    // Convert the input month to lowercase to make the function case-insensitive
    month = month.toLowerCase();
  
    // Determine the season based on the month
    if (month === 'september' || month === 'october' || month === 'november') {
      return 'Autumn';
    } else if (month === 'december' || month === 'january' || month === 'february') {
      return 'Winter';
    } else if (month === 'march' || month === 'april' || month === 'may') {
      return 'Spring';
    } else if (month === 'june' || month === 'july' || month === 'august') {
      return 'Summer';
    } else {
      return 'Invalid month';
    }
  }
  
  // Example usage:
  console.log(checkSeason('September')); // Output: Autumn
  console.log(checkSeason('December'));  // Output: Winter
  console.log(checkSeason('April'));     // Output: Spring
  console.log(checkSeason('July'));      // Output: Summer
  console.log(checkSeason('xyz'));       // Output: Invalid month

function surm(...args) {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}
console.log(surm(1, 2, 3))

// Function to generate a random IPv4 address
function randomUserIp() {
    const getRandomOctet = () => Math.floor(Math.random() * 256);
    return `${getRandomOctet()}.${getRandomOctet()}.${getRandomOctet()}.${getRandomOctet()}`;
}

console.log(randomUserIp()); 

// Function to generate a random MAC address
function randomMacAddress() {
    const getRandomHexPair = () => {
      const hexPair = Math.floor(Math.random() * 256).toString(16);
      return hexPair.padStart(2, '0'); // Ensure two digits
    };
    
    return `${getRandomHexPair()}:${getRandomHexPair()}:${getRandomHexPair()}:${getRandomHexPair()}:${getRandomHexPair()}:${getRandomHexPair()}`;
}
  
  
console.log(randomMacAddress)
  
// Function to generate a random user ID
function userIdGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 7;
    let id = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  
    return id;}
  

console.log(userIdGenerator())
/*
function userIdGeneratedByUser() {
    const numChars = parseInt(prompt("Enter the number of characters for the id:"))
    const numIds = parseInt(prompt("Enter the number of IDs to generate:"))

    let ids = ''
    for (let i = 0; i < numIds; i++) {
        ids += userIdGenerator(numChars) + '\n'
    }
    return ids
}

console.log(userIdGeneratedByUser())
*/

function rgbColorGenerator() {
    const getRandomValue = () => Math.floor(Math.random() * 256)
    const red = getRandomValue()
    const green = getRandomValue()
    const blue = getRandomValue()

    return `rgb(${red}, ${green}, ${blue})`
}

console.log(rgbColorGenerator())

function arrayOfRgbColors(numColors) {
    const rgbColors = []
    for (let i = 0; i < numColors; i++) {
        rgbColors.push(rgbColorGenerator())
    }
    return rgbColors
}    

console.log(arrayOfRgbColors(4))

// Generating random hex numbers
function getRandomNewColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
  }
  
  function arrayOfHexaColors(numColors) {
    const hexColors = [];
    for (let i = 0; i < numColors; i++) {
      hexColors.push(getRandomNewColor());
    }
    return hexColors;
}
console.log(arrayOfHexaColors(4))

function convertHexaToRgb(hex) {
    if (hex.startsWith('#')) hex = hex.slice(1)
    const bigint = parseInt(hex, 16)
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
  
    return `rgb(${red},${green},${blue})`;
}
console.log(convertHexaToRgb('#a3e12f'))

function convertRgbToHexa(rgb) {
    const rgbValues = rgb.match(/\d+/g).map(Number);
    const hex = rgbValues.map(value => value.toString(16).padStart(2, '0')).join('');
    
    return `#${hex}`;
  }
console.log(convertRgbToHexa('rgb(163,225,47)'))  

function generateHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

function generateRgbColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

function generateColors(type, num) {
    const colors = []

    for (let i = 0; i < num; i++) {
        if (type === 'hexa') {
            colors.push(generateHexColor)
        } else if(type === 'rgb') {
            colors.push(generateRgbColor)
        }
    }
    return num === 1 ? colors[0] : colors;
}

console.log(generateColors('hexa', 3))