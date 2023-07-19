console.clear();

let counter = document.getElementById('primary');
let increment = document.getElementById('increment');
let reset = document.getElementById('reset');
let decrement = document.getElementById('decrement')


let counterValue = 0;

increment.addEventListener('click', function () {
    counterValue += 1;
    counter.innerText = counterValue;
    console.log(counterValue)

});
decrement.addEventListener('click', function () {
    counterValue -= 1;
    counter.innerText = counterValue;
    console.log(counterValue)
})

reset.addEventListener('click', function () {
    counterValue = 0;
    counter.innerText = counterValue;
    console.log(counterValue)

})