function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i ++){
        fact = fact * i;
    }
    return fact;
}
const result = factorial(5);
console.log("Iterative Factorial Result = ", result);

function factorialRecursive(num){
    if( num == 1){
        return 1;
    }
    else{
        return factorial = num * factorialRecursive(num-1);
    }
}
const recursiveResult = factorialRecursive(5);
console.log("Recursive Factorial Result = ", recursiveResult);