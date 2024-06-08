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