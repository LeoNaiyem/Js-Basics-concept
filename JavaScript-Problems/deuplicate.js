const studentName = ['Badol','Kabir', 'Sohag', 'Shawn', 'Shakil', 'Shawn', 'Raju', 'Badol', 'Sohag'];
let uniqueStudent = [];
for(i = 0; i < studentName.length; i++){
    let element = studentName[i];
    let index = uniqueStudent.indexOf(element);
    if(index == -1){
        uniqueStudent.push(element);
    }
}
console.log(uniqueStudent);


// Programming Hero question
function add(a, b){

    return a + b;

}

console.log(add("adam" + "eve"))