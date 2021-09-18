let sohan = 300;
let araf = 200;
console.log('Before Swap sohan =' + sohan, 'araf =' + araf);
let temp = araf;
araf = sohan;
sohan = temp;
console.log('After Swap sohan =' + sohan, 'araf =' + araf);

let a = 500;
let b = 400;
console.log('Before Swap a =' + a, 'b =' + b);
a = a + b;
b = a - b;
a = a - b;
console.log('After Swap a =' + a, 'b =' + b);

let x = 5;
let y = 3;
console.log('Before Swap x =' + x, 'y =' + y);
[x, y] = [y, x];
console.log('After Swap x =' + x, 'y =' + y);





