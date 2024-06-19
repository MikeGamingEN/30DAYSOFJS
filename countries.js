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
  let sum = 0
  for (const num of numbers) {
    sum = sum + num  
    // can be also shorten like this, sum += num
    // after this we will use the shorter synthax(+=, -=, *=, /= etc)
  }
  console.log(sum) // 15
  
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
