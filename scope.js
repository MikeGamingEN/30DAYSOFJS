/*let a = 'JavaScript'
let b = 10
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        let a = 'Python'
        let b = 10
        console.log(a, b)
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b)
*/

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

function letLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
}
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81
  
for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
}
console.log(i) // 3

const person = {
    firstName: 'Michael',
    lastName: 'Gbuwe',
    age: 20,
    country: 'Germany',
    city: 'Leverkusen',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+35596084930'
}

console.log(person.age)
console.log(person['phone number'])
/*
person.nationality = 'Canadian'
person.country = 'Spain'
person.title = 'Student'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill} and ${lastSkill}`
    let fullName = this.fullName
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe knows ${skills}.`
    return statement
}

console.log(person)
console.log(person.getPersonInfo())
const copyPerson = Object.assign({}, person)
console.log(copyPerson)
const keys = Object.keys(copyPerson)
console.log(keys)
const values = Object.values(copyPerson)
console.log(values)
const entries = Object.entries(copyPerson)
console.log(entries)
console.log(copyPerson.hasOwnProperty('name'))
*/
const dog = {
    name: 'Billy',
    legs: 4,
    color: 'Brown',
    age: 6,
    bark: 'woof woof'
}
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
dog.breed = 'Wolfgang'

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
let userWithMostSkills = ''
let maxSkills = 0

for (const user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length
        userWithMostSkills = user
    }
}

console.log('User with the most skills:', userWithMostSkills)

let loggedInUsersCount = 0
let usersWith50Points = 0

for (const user in users) {
    if (users[user].isLoggedIn) {
        loggedInUsersCount++
    }
    if (users[user] >= 50) {
        usersWith50Points++
    }
}
console.log('Number of logged in users:', loggedInUsersCount);
console.log('Number of users with 50 or more points:', usersWith50Points);

const mernStackSkills = ['MongoDB', 'Express', 'React', 'Node']
const mernDevelopers = []

for (const user in users) {
    const userSkills = users[user].skills
    const isMernDeveloper = mernStackSkills.every(skill => userSkills.includes(skill))
    if (isMernDeveloper) {
        mernDevelopers.push(user)
    }
}
console.log('MERN stack developers:', mernDevelopers)

const michael = {
    age: 19,
    email: 'michaelgbuwe@michael.com',
    skills: ['HTML', 'CSS', 'React', 'JavaScipt', 'Node'],
    isLoggedIn: true,
    points: 60
}
const newUsers = { ...users, MyName: michael }

console.log('New users object:', newUsers)