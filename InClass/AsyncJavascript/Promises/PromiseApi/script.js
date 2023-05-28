// Prmomise Api 

// 6 Static Methods....

/* 
    1. Promise.all
    All the prmomises needs to get resolved then only i will go to then block.
*/
// It takes a array, array of promises


// 1. Payer -> 

// API
// let payerPromise = new Promise((res, rej) => {
//     res(95)
// })

// let shopKeeperPromise = new Promise((res, rej) => {
//     res(1000 + 5)
// })




// Promise.all([
//     payerPromise,
//     shopKeeperPromise
// ]).then((data) => {
//     // rbi take the ledger
//     console.log("RBI take the ledger, take note", data)
// }).catch(error => {
//     // rollback the transaction
//     console.log("Rollback the transaction")
// })



/*
    2. Promise.race 
    It will wait till the first promise is settled and then it will be resolved.
*/

// let promise1 = new Promise((res, rej) => {
    
//     // setTimeout(() => {
//     //     res(1000);
//     // }, 5000)

//     rej("errro")
    
// })

// let promise2 = new Promise((res, rej) => {
    
//     setTimeout(() => {
//         res(100)
//     }, 10000)
    
// })

// user js file 

// promise1.then(data => {
//     console.log(data, "data after 5 sec")
// })



// promise2.then(data => {
//     console.log(data, "immediate")
// })


// Promise.race([
//     promise1,
//     promise2
// ]).then(data => {
//     console.log("data", data)
// }).catch(error => {
//     console.log("error")
// })



/*
    3. Promise.any
    It will take the first promise that is resolved successfully,
    if 2 promises are resolved in same time then the 1st promise in the order 
    will be accepted
*/


// const promise1 = new Promise((res, rej) => {
//     res("live score: 272");
// })

// const promise2 = new Promise((res, rej) => {
//     rej("error")
// })

// const promise3 = new Promise((res, rej) => {
//     res("dasdasdadas")
// })

// Promise.any([
//     promise2,
//     promise3,
//     promise1,
// ]).then(data => {
//     console.log("data", data)
// }).catch(error => console.log(error, "error"))



// so what is the difference b/w race and any 
// ans -> in race all the promises needs to be fulfilled (not rejected)
// but in any, promises can be rejected 



/*
    4. Promise.reject()

*/

// function callAServer(string) {

//     if(!string) {
//         return Promise.reject("Asdasdas")
//     }

//     fetch(string).then(data => {
//         // beautiful things
//     })
// }

// const ans = callAServer()

// if(ans) {
//     // some error has happened 
//     // beautiful page

//     ans.catch(data => {
//         console.log(data)
//     })
// }
// console.log("asns", ans)


// const promise1 = new Promise((res, rej) => {
//     return Promise.resolve("1000")
// })


// promise1.then(data => {
//     console.log("data", data )
// })



/*
    5. Promise.resolve();
*/


// function callAServer1(string) {

//     if(!string) {
//         return Promise.resolve("Asdasdas")
//     }

//     fetch(string).then(data => {
//         // beautiful things
//     })
// }

// const res = callAServer1()
// res.then(data => {
//     console.log("callAServer1", data)
// })



// 6 Promise.allSettle

// you guys can find out