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