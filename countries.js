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

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
    console.log('Ethiopia added to list')
}
  
  // Find the middle country(ies)
  const midIndex = Math.floor(countries.length / 2);
  let middleCountries;
  
  if (countries.length % 2 === 0) {
    middleCountries = countries.slice(midIndex - 1, midIndex + 1);
  } else {
    middleCountries = [countries[midIndex]];
  }
  
  console.log('Middle country(ies):', middleCountries);
  
  // Divide the countries array into two equal arrays
  let firstHalf, secondHalf;
  
  if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, midIndex);
    secondHalf = countries.slice(midIndex);
  } else {
    firstHalf = countries.slice(0, midIndex + 1);
    secondHalf = countries.slice(midIndex + 1);
  }
  
  console.log('First half:', firstHalf);
  console.log('Second half:', secondHalf);


  const numbers = [1, 2, 3, 4, 5]

  for (const num of numbers) {
    console.log(num)
  }
  
  // 1 2 3 4 5
  
  for (const num of numbers) {
    console.log(num * num)
  }
  
  // 1 4 9 16 25
  
  // adding all the numbers in the array
  //let sum = 0
  //for (const num of numbers) {
 //   sum = sum + num  
    // can be also shorten like this, sum += num
    // after this we will use the shorter synthax(+=, -=, *=, /= etc)
 // }
 // console.log(sum) // 15
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }
  
  // HTML CSS JAVASCRIPT REACT NODE MONGODB
  
  for (const tech of webTechs) {
    console.log(tech[0]) // get only the first letter of each element,  H C J R N M
  }

  // Function to generate a random number between 0 and 100
function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}

// Initialize an empty array to store unique random numbers
const uniqueRandomNumbers = new Set();

// Use a loop to generate 5 unique random numbers
while (uniqueRandomNumbers.size < 5) {
  uniqueRandomNumbers.add(getRandomNumber());
}

// Convert the Set to an array
const randomNumbersArray = Array.from(uniqueRandomNumbers);

// Print the array of unique random numbers
console.log(randomNumbersArray);

function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }
  return randomId;
}

const randomId = generateRandomId(6);
console.log(randomId);

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) 
console.log(sumAllNums(10, 20, 13, 40, 10))  
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) 

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

const square = function(n) {
  return n * n
}
console.log(square(2))

const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
const countriess = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countriess))

function solveLinEquationForY(a, b, c, x) {
  if (b === 0) {
    return 'The equation is not solvable for y (division by zero)';
  }
  let y = -(a * x + c) / b;
  return y;
}

// Example usage:
let a = 2, b = 3, c = -6, x = 1;
let y = solveLinEquationForY(a, b, c, x);
console.log(`For x = ${x}, y = ${y}`); // Output: For x = 1, y = 0

function solveQuadratic(a = 0, b = 0, c = 0) {
  let discriminant = b * b - 4 * a * c;
  let roots = [];

  if (discriminant > 0) {
    // Two distinct real roots
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  } else if (discriminant === 0) {
    // One real root
    let root = -b / (2 * a);
    roots.push(root);
  } else {
    // No real roots, but we can return the complex roots
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    roots.push(`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`);
  }

  return roots;
}

// Example usage:
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); // {2, -2}
console.log(solveQuadratic(1, -1, 0)); // {1, 0}

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}
const exampleArray = [1, 2, 3, 4, 5, 6]
printArray(exampleArray)

function showDateTime() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hours = now.getHours()
  const minutes = now.getMinutes()

  const formattedTime = `${month}/${day}/${year} ${hours}:${minutes}`
  console.log(formattedTime)
}

showDateTime()

function swapValues(x, y) {
  return { x: y, y: x}
}

let swapped = swapValues(3,4)
console.log(`x => ${swapped.x}, y => ${swapped.y}`)

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A']

function capitalizeArray(arr) {
  const capitalizedArray = []
  for (let i = 0; i < arr.length; i++) {
    capitalizedArray.push(arr[i].toUpperCase())
  }
  return capitalizedArray
}

function addItem(arr, item) {
  const newArray = arr.slice(); // Create a copy of the array to avoid mutation
  newArray.push(item);
  return newArray;
}

const initialArray = [1, 2, 3]
const newItem = 4
const updatedArray = addItem(initialArray, newItem)
console.log(updatedArray)

function removeItem(arr, item) {
  const reArray = arr.splice()
  reArray.pop(item)
  return reArray
}
const initiaArray = [1, 2, 3, 4, 5]

function sumOfNumbers(numberr) {
  let summ = 0
  for (let i = 0; i < numberr; i++) {
    summ += 1
  }
  return summ
}
const rangeEnd = 5
const summ = sumOfNumbers(rangeEnd)
console.log(summ)

function evenAndOdds(number) {
  let evenCount = 0
  let oddCount = 0

  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evenCount++
    } else {
      oddCount++
    }
  }
  console.log(`${evenCount}, ${oddCount}`)
}

evenAndOdds(100)
