//exe1
function delayedGreet(name, delay){
    return new Promise((resolve, reject) => {setTimeout(() => resolve(`Hello, ${name}!`), delay)})
}
delayedGreet("Alice", 2000).then((message) => console.log(message))

// exe3
function randomOperation() {
    return new Promise((resolve, reject) => {
        const num = Math.random()

        if(num<0.5) {resolve("Success!")}
        else {reject("Failure!")}
    })
}

randomOperation().then((result) => console.log(result)).catch((error) => console.log(error))

//exe4
function raceTimers() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {resolve("Timer A finished!")},2000)
        setTimeout(() => {resolve("Timer B finished!")},3000)}
    )}
raceTimers().then((result) => console.log(result))

//exe6
function waitAll() {
    const first = new Promise((resolve, reject) => {setTimeout(()=> {resolve("First")},1000)})
    const second = new Promise((resolve, reject) => {setTimeout(()=> {resolve("Second")},2000)})
    const third = new Promise((resolve, reject) => {setTimeout(()=> {resolve("Third")},3000)})

    return Promise.all([first, second, third])
}
waitAll().then((results) => {console.log(results)})

//exe7
function chainedGreetings() {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve("Hi!")}, 1000)})
    .then((message) => {console.log(message) 
        return new Promise((resolve, reject) => {setTimeout(() => {resolve("How are you?")}, 2000)})
    })
    .then((message) => {console.log(message)
         return new Promise((resolve, reject) => {setTimeout(() => {resolve("Goodbye!")}, 1000)})
        })
        }

chainedGreetings()
    .then((message) => { console.log(message) })