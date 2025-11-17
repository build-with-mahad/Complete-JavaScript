const arr = ["apple","banana","orange","guava"]
for (const i of arr) {
    console.log(i)
}
console.log("*********************")
for (const j in arr) {
   console.log(arr[j])
}
const obj = {
    a : 30,
    b : 50,
    c : 100
}
console.log("***********")
for (const k in obj) {
    console.log(obj[k])
}