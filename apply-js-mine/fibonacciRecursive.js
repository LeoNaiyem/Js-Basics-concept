function fibonacciRecursive(num){
    if (num == 0){
        return 0;
    }
    if (num == 1){
        return 1;
    }
    else{
        return fibonacciRecursive(num-1) + fibonacciRecursive(num-2);
    }
}
const result = fibonacciRecursive(10);
console.log(result);