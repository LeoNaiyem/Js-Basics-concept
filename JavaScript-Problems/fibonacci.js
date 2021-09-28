function fibonacciIterative(num){
    let fibonacci = [1, 1];
    for(i = 2; i <= num; i++ ){
      let newFibonacci = fibonacci[i -1] + fibonacci[i - 2];
        fibonacci.push(newFibonacci);
    }
    return fibonacci;
}
const result = fibonacciIterative(10);
console.log(result);

function fibonacciRecursive(num){
    // stopping condition
    if(num == 0){
        return [1];
    }
    if(num == 1){
        return [1, 1];
    }
    // recursive call
    let fibonacci = fibonacciRecursive(num -1);
    let newFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(newFibonacci);
    return fibonacci;

}
const result2 = fibonacciRecursive(5);
console.log(result);
