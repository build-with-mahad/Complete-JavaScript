//Arithmetic Operators
let x = 10
let y = 30
let z = 50
console.log(x + y + z)
console.log(x - y - z)
console.log(x / y / z)
console.log(x & y & z)

//Assignment Operators
console.log(x += 3)
console.log(y -= 10)
console.log(x > y)
console.log(x < y)

//Logical Operators
console.log(x < 30 && y >= 20)
console.log(x == 10 || y == 20)
console.log(!x)

//Short Circuiting 

// with && Operator gives the first falsy value either there is not falsy values gives the last truthy value
const obj = {
    name: "Alice",
    age: 56,
    residence: "Los Angeles"
}
console.log(obj.name && obj.age && obj.residence)

//with || Operator gives the first truthy value either there is no truthy value gives the first falsy value

const obj2 = {
    name: false,
    age: 40,
    residence: "California"
}

console.log(obj2.name || obj2.age || obj2.residence)