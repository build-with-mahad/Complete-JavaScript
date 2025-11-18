const getdata = (dataid) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ID", dataid)
            resolve();
        }, 3000);
    })
}
console.log("getting data 1")
getdata(1).then((res) => {
    console.log("getting data 2")
    return getdata(2)
}).then((res) => {
    console.log("getting data 3")
    return getdata(3)
}).then((res) => {
    console.log("All Data Id are Successfully Fetched")
})