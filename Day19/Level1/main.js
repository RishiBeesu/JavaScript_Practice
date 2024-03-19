// Create a closure which has one inner function

function outerFunction() {
    let name = 'Rishi'
    function innerFunction() {
        name += ' Beesu'
        return name
    }
    return innerFunction()
}
console.log(outerFunction())