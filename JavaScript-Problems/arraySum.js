// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let sum = 0;
// for(i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     sum = sum + element;
// }
// console.log('The total is: ', sum);


function arraySum(numbers){
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10]

const result = arraySum(numbers);
console.log('The result is: ', result);