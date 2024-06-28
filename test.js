const numbers = [1, 2, 3, 4, 5]
console.log(numbers[0])
const lastIndex = numbers.length - 1
console.log(numbers[lastIndex])

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies[0].toLocaleUpperCase())
console.log(itCompanies[1].toLocaleUpperCase())
console.log(itCompanies[2].toLocaleUpperCase())
console.log(itCompanies[3].toLocaleUpperCase())
console.log(itCompanies[4].toLocaleUpperCase())
console.log(itCompanies[5].toLocaleUpperCase())
console.log(itCompanies[6].toLocaleUpperCase())

console.log(itCompanies.join(', ')+ ' ' + 'are big tech companies')
let index = itCompanies.indexOf('Google')

index === -1
? console.log('company does exist')
: console.log('company does not exist')


itCompanies.sort()
console.log(itCompanies)

//console.log(itCompanies.slice(-1))

/*
let middleCompanies;
const length = itCompanies.length;

if (length % 2 === 0) {
  // Even number of elements, take the two middle elements
  const mid1 = length / 2 - 1;
  const mid2 = length / 2;
  middleCompanies = itCompanies.slice(mid1, mid2 + 1);
} else {
  // Odd number of elements, take the middle element
  const mid = Math.floor(length / 2);
  middleCompanies = itCompanies.slice(mid, mid + 1);
}

console.log(middleCompanies);
*/

itCompanies.splice(0, 1); // Removes the first element
console.log(itCompanies); // Output: ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompanies.pop(); // Removes the last element
console.log(itCompanies); // Output after removing the last element
itCompanies.length = 0; // Clears the array
console.log(itCompanies); // Output: []

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(" ")
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort();
console.log('Sorted ages:', ages);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// Find the median age
const midIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
  medianAge = ages[midIndex];
}
console.log('Median age:', medianAge);

// Find the average age
const totalAge = ages.reduce((sum, age) => sum + age, 0);
const averageAge = totalAge / ages.length;
console.log('Average age:', averageAge);

// Find the range of the ages
const ageRange = maxAge - minAge;
console.log('Age range:', ageRange);

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

function showArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

showArguments('JavaScript', 'Python', 'Ruby');
