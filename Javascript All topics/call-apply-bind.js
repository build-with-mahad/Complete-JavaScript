//Call
function greet(age, city) {
    return `hello ${this.name}, Your'e ${age} Years Olds. You live in ${city}`
}
const obj = {
    name: "Alice"
}
console.log(greet.call(obj, 18, "Los Angeles"))

//Apply
function car (brand,color,model){
return `${this.name}. This car is made by ${brand}. The color of this car is ${color}, and the model is ${model}.`;
}
const carname = {
name : "Civic"
}
console.log(car.apply(carname,["Honda","Black","2025"]))

//Bind
const car1 = {
    brand: "Toyota",
    color: "Red",
    model: "2025",
    showDetails: function(owner) {
        console.log(`${owner}, this car is a ${this.color} ${this.brand} model ${this.model}.`);
    }
}

const newcar = car1.showDetails
const newcar1 = newcar.bind(car1)
newcar1("Sportage")