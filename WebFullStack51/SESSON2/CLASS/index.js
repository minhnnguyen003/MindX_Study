// init promise

const promisePending = new Promise((resolve, reject) => {

})

console.log(promisePending)

const promiseFulfilled = new Promise((resolve, reject) => {
    resolve();
})

console.log(promiseFulfilled);

const promiseReject = new Promise((resolve, reject) => {
    reject();
})

console.log(promiseReject);