function addition (num){
    var add = num + num;
    console.log(add)
}
addition(5)

function multiplication(num){
    var multiply = num*2;
    console.log(multiply);
}
multiplication(10);

function sum(num1, num2){
    var result = num1 + num2;
    return result;
}
var firstSum = sum(30, 20);
var secondSum = sum(10, 20);
var total = firstSum + secondSum;
console.log(total);


var numbers = [1,2,3,4,5];

var result = numbers.slice(-1,3);

console.log(result)