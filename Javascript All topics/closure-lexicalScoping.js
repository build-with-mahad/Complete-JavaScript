//Lexical Scoping 
function greet() {
    let name = "Alice"
    function inner() {
        console.log(`Hello ${name}`)
    }
    inner()
}
greet()



let num = 10;
function first() {
    console.log(num);
}
function sec() {
    let num = 20;
    first();
}
sec();
//

//Closures 

function outer(){
    let score = 0
    function inner(){
        console.log(score)
        score++
    }
    return inner;
}
const run = outer()
run()
run()
run()
run()
run()
