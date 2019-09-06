// Callback, promises, and async await

// Sync
// const sayName = (name, cb) => {
//     console.log('running some code')
//     console.log('running some code')
//     console.log('running some code')
//     console.log('running some code')
//     console.log(`My name is ${name}`)
//     cb()
// }

// function callback() {
//     console.log('This ran at the end');
// }

// sayName('Farhan', callback)

// ========

console.log('first');

setTimeout(() => {
    console.log('from callback');
}, 2000)

console.log('last');
