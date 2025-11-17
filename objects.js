const number = Symbol("0330-2177456-9")
const obj  = {
    name:"alice",
    'age' : 52, //another representation of object
    residence : "Los Angeles",
    [number] : "02234561", // defining symbol in objects ,
    greet : function(){
    return (`hello ${this.name}`)
    }
//with arrow function there is window bcz the window obj or with function there is value for normal function points the parent obj 
}
console.log(Object.entries(obj))
console.log(Object.values(obj))
console.log(Object.keys(obj))
obj.name = "John"
Object.freeze(obj)
console.log(obj.name )
obj.name = "maddy"
console.log(obj.name)
console.log(obj['age'])
console.log(typeof[number])
console.log(obj.greet())
const obj1 = {
    course : "Porgramming Fundamentals" ,
    Instructor : "John adams",
    fees : "10k",
    timing : "10AM to 1PM"
}
//destructuring objects 
const {course,Instructor,fees,timing} = obj1
console.log(course)
console.log(Instructor)
console.log(fees)
console.log(timing)
//
