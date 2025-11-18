//With Normal Function
let x = 0;
function getdata() {
    console.log("fetching data", x++)
}
function dosomething(fn, d) {
    let timer;
    return function () {
        let self = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args)
        }, d);

    }
}
const debounce = dosomething(getdata, 400)

//With Arrow Function 
let y = 0
const getdata = ()=>{
    console.log("fetching data",y++)
}
const dosomething = (fn,d)=>{
let timer;
return (...args)=>{
clearTimeout(timer)
timer = setTimeout(() => {
    fn(...args)
}, d);
}
}
const debounce1 = dosomething(getdata,400)