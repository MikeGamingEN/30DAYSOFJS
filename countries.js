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
  