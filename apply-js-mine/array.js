var groceryPrice = [20, 100, 50, 60, 30];
console.log(typeof groceryPrice);
var ricePrice = groceryPrice.indexOf(50);
console.log(ricePrice);
groceryPrice[2] = 55;
console.log(groceryPrice);
var position = groceryPrice.indexOf(30);
console.log(position);
groceryPrice.push(15);
groceryPrice.push(10, 5);
console.log(groceryPrice);
groceryPrice.pop();
console.log(groceryPrice);


var friends = ['Aubdullah', 'Muhammad', 'Zakir'];
friends.unshift('Umar');
friends.unshift('Usman')
console.log(friends);
friends.shift()
console.log(friends);
console.log(friends.length)
var bestFriends = friends.slice(1)
console.log(bestFriends);

// Programming hero question
// var numbers = [1,2,3,4,5];

// var result = numbers.slice(1,3);

// console.log(result)

