console.log('Hello, World!')

const now = new Date()
console.log(now.getUTCHours())

console.log(now.getSeconds())

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

//const now = new Date()
const year = now.getFullYear() // return year
//const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes()
//console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

let grade = 76
switch(true) {
    case grade <= 49:
        console.log('Grade is F')
        break
    case grade <= 59:
        console.log('Grade is D')
        break
    case grade <= 69:
        console.log('Grade is C')
        break
    case grade <= 79:
        console.log('Grade is B')
        break
    case grade <= 100:
        console.log('Grade is A')
        break
}

// Prompt the user to enter a month
let month = "september";

// Convert the input to lowercase to make the comparison case-insensitive
month = month.toLowerCase();

// Determine the season based on the month
let season;
if (month === "september" || month === "october" || month === "november") {
  season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
  season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
  season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
  season = "Summer";
} else {
  season = "Invalid month entered.";
}

// Output the season
console.log(`The season is ${season}.`);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

const ln = 'Leverkusen'
const clubName = ln.split('')
console.log(clubName)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies)