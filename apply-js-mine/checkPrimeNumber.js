function checkPrimeNumber(num){
    for(i = 2; i < num; i++){

        if(num % i == 0){
            return 'The given number is NOT a PRIME number'
        }
    }
    return 'The given number is a PRIME number'
}
const result = checkPrimeNumber(1233);
console.log(result);