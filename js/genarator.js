function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-pin-button').addEventListener('click', function () {
    const getPinCalled = getPin();
    const pinFiled = document.getElementById('pin-filed');
    pinFiled.value = getPinCalled;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    console.log(number);
    const typedNumber = document.getElementById('nember-typed');
    const priviousTypedNumber = typedNumber.value;
    if (isNaN(number)) {
        if(number === 'C'){
            typedNumber.value = '';
        }
        else{
            const disits = priviousTypedNumber.split('');
            disits.pop();
            const remainingDisits = disits.join('');
            typedNumber.value = remainingDisits;
        }
    }
    else {
        
        const newTypedNumber = priviousTypedNumber + number ;
        typedNumber.value = newTypedNumber;
    }
})
