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
  