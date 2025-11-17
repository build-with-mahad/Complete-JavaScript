const greet = (name) => {
    return (age) => {
        return (address) => {
            return `Hello ${name} , you are ${age} years old and you live in ${address}`
        }
    }
}
console.log(greet("Alice")(25)("New York"))

//Another Example

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(add(40)(10)(50))
const step1 = add(10)
const step2 = step1(40)
console.log(step2(100))