function callBack(name, age, task){
    console.log("Hello Mr. ", name);
    console.log("Your Age: ", age);
    task();
}
function washHand(){
    console.log("Wash Your Hand With Soap");
}
function shower(){
    console.log("Take shower");
}
function scrollFacebook(){
    console.log("Scroll Facebook. But do't like any post");
}
callBack("Abdul Kuddus", 20, washHand);
callBack("Abdul Kader", 30, shower);
callBack("Abdur Rahaman", 21, scrollFacebook);

