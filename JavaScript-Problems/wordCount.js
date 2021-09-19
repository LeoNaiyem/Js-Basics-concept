const speech = 'My name is Shamol. Not like song. Only language English. See you, not for mind, have a Relax!';
let wordCount = 0;
for(let i = 0; i < speech.length; i++){
    let letter = speech[i];
    if(letter == ' ' && speech[i - 1] !== ' ' ){
        wordCount++
    }
}
wordCount++;
console.log(wordCount);