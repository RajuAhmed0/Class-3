/* How to declare an array in JS */
var FruitsName = ["Apple", "Orange", "Banana", "Watermelon"];
var number = [12, 14, 16, 45, 56, 50, 60];
 


/* Number of elements in an Array */
var FruitsName = ["Apple", "Orange", "Banana", "Watermelon"];
var lenth = FruitsName.length;
FruitsName.length = 2;
console.log(FruitsName);

// number Array 
var myArray = [122, 134, 156, 179, 234, 359];
var total = myArray.length;
myArray.length = 3;
console.log(myArray);


// Find the value of an element by index
var fruit = ["Banana", "Orange", "Apple", "Mango"];
var index = fruit.indexOf("Apple");
console.log(index);


//Change an element by index 
var FruitsNames = ["Banana", "Orange", "Apple", "Mango"];
FruitsNames[2] ="Watermalon";
console.log(FruitsNames);


// get the index of an element by the value
var marks = [122, 213, 233, 344, 434, 790];
console.log(marks[2]);

// what does it mean when you get -1 while getting the value of an element by index
var array = [122, 213, 233, 344, 434, 790];
array++
console.log(array);


// How can you add an element to an array at the last position
var mynumber = [12, 26, 43, 56, 78];
mynumber.push(55);
console.log(mynumber);


// How can you remove the last element from array
var numbers = [12, 10, 52, 23];
var removed = numbers.pop();
console.log(numbers); 

// Add an element at the first position of an array (challenge)
var names = ["sajib", "raju", "mehedi",]
names.unshift("asif")
console.log(names);


// Remove the first element of an array (challenge)
let student = ["raju", "asif", "mehedi", "sajib", "ridoy"];
student.shift();
console.log(student);


