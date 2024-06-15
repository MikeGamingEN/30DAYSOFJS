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