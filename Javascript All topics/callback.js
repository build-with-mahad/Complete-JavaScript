const calculate = (a, b, cb) => {
    return cb(a, b)
}
function add(a, b) {
    return (a + b)
}
function sub(a, b) {
    return (a - b)
}
function div(a, b) {
    return (a / b)
}
function mul(a, b) {
    return (a * b)
}
console.log(calculate(10, 20, add))
console.log(calculate(200, 100, sub))
console.log(calculate(10, 20, mul))
console.log(calculate(10, 20, div))

//callback hell 
function getdata(dataid, getnextdata) {
    setTimeout(() => {
        console.log("Data Id ", dataid)
        if (getnextdata) {
            getnextdata();
        }
    }, 2000);
}
console.log("getting data 1")
getdata(1, function () {
    console.log("getting data 2")
    getdata(2, function () {
        console.log("getting data 3")
        getdata(3, function () {
            console.log("All Data Are Successfully Fetched ")
        })
    })
})