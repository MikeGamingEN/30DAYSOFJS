/*
//const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
 // ] // List of web technologies
  
  console.log(webTechs)        // all the array items
  console.log(webTechs.length) // => to know the size of the array, which is 7
  console.log(webTechs[0])     //  -> HTML
  console.log(webTechs[6])     //  -> MongoDB
*/
//const lastIndex = webTechs.length - 1
//console.log(webTechs[lastIndex])
/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries
  
 console.log(countries)      // -> all countries in array
  console.log(countries[0])   //  -> Albania
  console.log(countries[10])  //  -> Kenya
*/
 // let lastIndex = countries.length - 1;
 // console.log(countries[lastIndex]) //  -> Kenya

  const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products
  
  console.log(shoppingCart) // -> all shoppingCart in array
  console.log(shoppingCart[0]) //  -> Milk
  console.log(shoppingCart[7]) //  -> Sugar
  
 // let lastIndex = shoppingCart.length - 1;
 // console.log(shoppingCart[lastIndex]) //  -> Sugar

//const numbers = [1, 2, 3, 4, 5]
//numbers[0] = 10      // changing 1 at index 0 to 10
//numbers[1] = 20      // changing  2 at index 1 to 20
  
//console.log(numbers) // [10, 20, 3, 4, 5]
  
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
  
console.log(countries)

const arr = Array() // creates an an empty array
console.log(arr)

const sevenEmptyValues = Array(7) // it creates eight empty values
console.log(sevenEmptyValues) // [empty x 8]

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const four4values = Array(4).fill(4)
console.log(four4values)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList)

//const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
//const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

//console.log(fruitsAndVegetables)

//const numbers = [1, 2, 3, 4, 5]
//console.log(numbers.indexOf(6))

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('apple')  // 0
/*
if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
*/

index === -1
? console.log('This fruit does not exist in the array')
: console.log('This fruit does exist in the array')

//const numbers = [1, 2, 3, 4, 5]
//console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
console.log(names.join( ))

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
/*
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1

const guys = ['Mike', 'Martins', 'Patrick', 'Ebi', 'Lawrence']
console.log(guys.toString())

const number = [1,2,3,4,5]

console.log(number.slice()) // -> it copies all  item
console.log(number.slice(0)) // -> it copies all  item
console.log(number.slice(0, number.length)) // it copies all  item
console.log(number.slice(2,3)) // -> [2,3,4] // it doesn't include the ending position

const digits = [1, 2, 3, 4, 5]
console.log(digits.splice(1,6))
*/
const nums = [1, 2, 3, 4, 5, 6]
 nums.splice(3, 3, 7, 8, 9)
console.log(nums.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// syntax
const arry  = ['item1', 'item2','item3']
arry.push('new item')
console.log(arry)
// ['item1', 'item2','item3','new item']

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers))

function sumAllNums() {
  console.log(arguments)
 }
 
 sumAllNums(1, 2, 3, 4)