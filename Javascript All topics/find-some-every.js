const arr = [2, 3, 4, 5, 6,]
console.log(arr.some(num => num > 6))

const arr1 = [2, 4, 6, 8, 10]
console.log(arr1.every(num => num >= 2 && num / 2))

const arr2 = [4, 8, 12, 16, 20, 24, 25]
console.log(arr2.find(num => num % 2))
