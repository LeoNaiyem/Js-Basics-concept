function factorialCalculator(n){
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const yourFactorial = factorialCalculator(10);
console.log('Factorial by forLoop= ' + yourFactorial);



function factorialCalculatorWhile(n){
    let factorial = 1;
    let i = 1;
    while(i <= n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const yourFactorialWhile = factorialCalculator(5);
console.log('Factorial by whileLoop= ' + yourFactorialWhile);