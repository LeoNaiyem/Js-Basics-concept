let marks = [70, 80, 12, 34, 45, 65, 67, 23, 90, 20, 99, 98, 95, 85, 76]
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log( 'The highest Marks is: ', max);

const price = [100, 45,34, 3433, 23676, 16797, 34567, 87645, 147895, 9754, 5463, 34325, 6789, 9632, 1253, 12098, 6540, 1267, 1279]
let heightPrice = price[0];
for(let i = 0; i < price.length; i++){
    let element = price[i];
    if(element > heightPrice){
        heightPrice = element;
    }
}
console.log('The height Price is: ', heightPrice);

var numbers = [12, 45, 65, 21, 2, 6, 68];
let small = numbers[0];
for(i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element < small){
        small = element;
    }
}
console.log('The smallest number is: ', small);



// programming hero question
var numbers = [12, 45, 65, 21, 6, 68];
var smallest = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num < smallest) {
        smallest = num;
    }
}
console.log(smallest)