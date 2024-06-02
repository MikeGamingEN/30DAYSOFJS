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
