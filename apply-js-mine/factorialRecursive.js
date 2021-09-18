// 0! = 1
// 1! = 1
// 2! = 1*2*3*4*5*6*7*8*9
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 5!*6
// 7! = 6!*7
// 8! =(8-1)!*8
// 9! =(9-1)!*9
// n! = (n-1)! *n

function factorialRecursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return factorialRecursive(n-1)* n;
    }
}
const yourFactorial = factorialRecursive(5);
console.log(yourFactorial);







