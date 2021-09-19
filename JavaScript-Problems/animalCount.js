function animalCount(depth) {
    let animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        let fistPart = 10 * 50;
        let remain = depth - 10;
        let secondPart = remain * 100;
        animal = fistPart + secondPart;
    }
    else {
        let fistPart = 10 * 50;
        let secondPart = 10 * 100;
        let remain = depth - 20;
        let thirdPart = remain * 300;
        animal = fistPart + secondPart + thirdPart;
    }
    return animal;
}
const result = animalCount(32);
console.log('Total Animal = ', result);