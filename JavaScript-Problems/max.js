const businessman = 900;
const doctor = 100;
const banker = 600;
if(businessman> doctor){
    if(businessman> banker){
    console.log('Businessman is bigger');
    }
    else{
    console.log('Banker is bigger');
    }
}
else{
    if(doctor> banker){
    console.log('Doctor is bigger');
    }
    else{
    console.log('Banker is bigger');
    }
}

const a =8;
const b = 5;
const c = 4;
if(a > b){
    if(a > c){
        console.log('A is bigger');
    }
    else{
        console.log('C is bigger');
    }
}
else{
    if(b > c){
        console.log('B is bigger');
    }
    else{
        console.log('C is bigger');
    }
}

const x = 10;
const y = 12;
const z = 24;
const maxNumber = Math.max(x, y, z);
console.log('The number ' + maxNumber + ' is Bigger');