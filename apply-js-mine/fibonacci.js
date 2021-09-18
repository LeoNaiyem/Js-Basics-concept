// fibonacciNumber[2] = fibonacciNumber[2-1] + fibonacciNumber[2-2];
// fibonacciNumber[3] = fibonacciNumber[3-1] + fibonacciNumber[3-2];
// fibonacciNumber[4] = fibonacciNumber[4-1] + fibonacciNumber[4-2];
// fibonacciNumber[5] = fibonacciNumber[5-1] + fibonacciNumber[5-2];
// fibonacciNumber[6] = fibonacciNumber[6-1] + fibonacciNumber[6-2];
// fibonacciNumber[7] = fibonacciNumber[7-1] + fibonacciNumber[7-2];
// fibonacciNumber[8] = fibonacciNumber[8-1] + fibonacciNumber[8-2];
// fibonacciNumber[9] = fibonacciNumber[9-1] + fibonacciNumber[9-2];
// fibonacciNumber[n] = fibonacciNumber[n-1] + fibonacciNumber[n-2];


function fibonacci(num){
    let fibonacciNumber = [0, 1]
    for(let n = 2; n <= num; n++){
        fibonacciNumber[n] = fibonacciNumber[n - 1] + fibonacciNumber[n - 2];
    }
    return fibonacciNumber;
}
const yourResult = fibonacci(10);
console.log(yourResult);