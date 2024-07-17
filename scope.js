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
/*
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
const keys = Object.keys(users)
console.log(keys)
const values = Object.values(users)
console.log(values)
*/
const countries = {
    Ethiopia: {
      capital: 'Addis Ababa',
      population: 114963588,
      languages: ['Amharic']
    },
    Canada: {
      capital: 'Ottawa',
      population: 37742154,
      languages: ['English', 'French']
    },
    Germany: {
      capital: 'Berlin',
      population: 83149300,
      languages: ['German']
    },
    Japan: {
      capital: 'Tokyo',
      population: 126476461,
      languages: ['Japanese']
    },
    Kenya: {
      capital: 'Nairobi',
      population: 53771296,
      languages: ['Swahili', 'English']
    }
};
  
for (const country in countries) {
    const { capital, population, languages } = countries[country];
    console.log(`Country: ${country}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);
    console.log('-------------------------'); // seperator line
}

const personAccount = {
    firstName: 'Florian',
    lastName: 'WIrtz',
    income: [],
    expenses: [],

    totalIncome: function() {
        return this.income.reduce((total, income) => total + income.amount, 0)
    },
    totalExpenses: function() {
        return this.expenses.reduce((total, expenses) => total + expenses.amount, 0)
    },
      // Method to get account information
    accountInfo: function() {
        return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpenses()}\nAccount Balance: $${this.accountBalance()}`;
    },

// Method to add an income
    addIncome: function(description, amount) {
        this.income.push({ description, amount });
    },

  // Method to add an expense
    addExpense: function(description, amount) {
       this.expenses.push({ description, amount });
    },

  // Method to calculate account balance
    accountBalance: function() {
       return this.totalIncome() - this.totalExpenses();
  }
};
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelance', 800);
personAccount.addExpense('Rent', 1200);
personAccount.addExpense('Groceries', 400);

console.log(personAccount.accountInfo());

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false
    }
];
  
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
];

function signUp(newUser) {
    const userExist = users.some(user => user.email === newUser.email);
    if (userExist) {
        console.log('User already has an account')
    } else {
        users.push(newUser)
        console.log('User signed up successfully')
    }
}
function signIn(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      user.isLoggedIn = true;
      console.log('User signed in successfully.');
    } else {
      console.log('Invalid email or password.');
    }
}

// Function to rate a product
function rateProduct(productId, userId, rating) {
    const product = products.find(product => product._id === productId);
    if (product) {
      const userRating = product.ratings.find(rate => rate.userId === userId);
      if (userRating) {
        userRating.rate = rating;
      } else {
        product.ratings.push({ userId, rate: rating });
      }
      console.log('Product rated successfully.');
    } else {
      console.log('Product not found.');
    }
  }
  
  // Function to calculate the average rating of a product
function averageRating(productId) {
    const product = products.find(product => product._id === productId);
    if (product) {
      const totalRatings = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
      const avgRating = totalRatings / product.ratings.length;
      return avgRating || 0;
    } else {
      console.log('Product not found.');
      return null;
    }
  }
  
  // Function to like or unlike a product
function likeProduct(productId, userId) {
    const product = products.find(product => product._id === productId);
    if (product) {
      const likeIndex = product.likes.indexOf(userId);
      if (likeIndex === -1) {
        product.likes.push(userId);
        console.log('Product liked.');
      } else {
        product.likes.splice(likeIndex, 1);
        console.log('Like removed.');
      }
    } else {
      console.log('Product not found.');
    }
}
  
// Example usage
signUp({
    _id: 'newuser123',
    username: 'NewUser',
    email: 'newuser@example.com',
    password: 'password123',
    createdAt: '08/01/2020 11:00 AM',
    isLoggedIn: false
});
  
signIn('alex@alex.com', '123123');
  
rateProduct('eedfcf', 'newuser123', 4);
console.log(averageRating('eedfcf'));
  
likeProduct('aegfal', 'newuser123');
likeProduct('aegfal', 'newuser123');
  
console.log(users);
console.log(products);

const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
   let sum = 0
   arr.forEach(function(element) {
    sum += element
   })
   return sum
}

console.log(sumArray(numbers))

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000)
/*
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
  // The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/
const cities = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
cities.forEach((element) => console.log(element.toUpperCase()))

const nations = [
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
    'Kenya',
  ]
  const countriesToUpperCase = nations.map((nation) => nation.toUpperCase())
  console.log(countriesToUpperCase)
  
  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */