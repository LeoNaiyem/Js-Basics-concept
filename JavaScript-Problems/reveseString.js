function sentenceReverse(string){
    let reverseString = "";
    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        reverseString = letter + reverseString;
    }
    return reverseString;
}
const speech = 'My name is Shamol. Not like song. Only language English. See you, not for mind, have a Relax!';
const outPut = sentenceReverse(speech);
console.log(outPut);