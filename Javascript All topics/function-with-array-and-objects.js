const arr = [1, 2, 3, 4, 5]
function abc(newarr) {
    return newarr[4]
}
console.log(abc(arr))
console.log(abc([2, 3, 4, 5, 6])) // With direct applying Array

const obj = {
    name: "DELTA",
    age: 55,
    profession: "Software Engineer"
}
function a(newobj) {
    return newobj.name
}
console.log(a(obj))
function b(newobj1) {
    return newobj1.age
}
console.log(b({
    name: "john",
    age: 35,
    profession: "doctor"
})) // With direct applying values