//Map
//with array
const arr = [2, 3, 4, 5, 6, 7]
const finarr = arr.map(val => val * 2)
console.log(finarr)
//with array of objects 
const arr1 = [
    { name: "john", age: "15" },
    { name: "alice", age: "20" }
]
const finarr1 = arr1.map(items => items.age * 2)
const finarr2 = arr1.map(items => items.name)
console.log(finarr1)
console.log(finarr2)
//with objects 
const arr2 = { a: 1, b: 2, c: 3 }
const finarr3 = Object.entries(arr2).map(([key, value]) => [key, value * 2])
console.log(finarr3)

//Filter
//with array
const arr3 = [2, 4, 6, 8, 10]
const finarr4 = arr3.filter(value => value > 8)
console.log(finarr4)
//with array of objects
const arr4 = [
    { name: "alice", age: "20", address: "California" },
    { name: "john", age: "45", address: "USA" }
]
const finarr5 = arr4.filter(value => value.name == "john")
console.log(finarr5)
//with objects 
const arr5 = { a: 3, b: 5, c: 10, d: 20 }
const finarr6 = Object.entries(arr5).filter(([key, value]) => value > 10)
console.log(finarr6)

//Reduce 
//with arrays
const arr6 = [3, 4, 5, 6, 7, 8]
const finarr7 = arr6.reduce((acc, value) => acc + value, 0)
console.log(finarr7)
//with objects 
const arr7 = { a: 3, b: 5, c: 56 }
const finarr8 = Object.values(arr7).reduce((acc, val) => acc + val, 0)
console.log(finarr8)
//with array of objects 
const arr8 = [
    { name: "Rice", price: 300, vender: "All Over Pakistan" },
    { name: "wheat", price: 800, vender: "All Over Pakistan" }
]
const finarr9 = arr8.reduce((acc, value) => acc + value.price, 0)
console.log(finarr9)