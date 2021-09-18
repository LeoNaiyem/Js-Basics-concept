function inchToFeetConverter (inch){
    var feet = inch/12;
    var finalFeet = feet.toFixed(3)
    return finalFeet;
}

var yourFeet = inchToFeetConverter(300);
console.log(yourFeet);
var AubulKuddusResult = inchToFeetConverter(3106);
console.log(AubulKuddusResult);

