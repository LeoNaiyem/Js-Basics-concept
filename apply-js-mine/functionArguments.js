function addNumbers(){
    let sum =0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

const result = addNumbers(10, 30, 60, 50, 100, 20, 30);
console.log(result);