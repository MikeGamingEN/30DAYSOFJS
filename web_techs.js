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
