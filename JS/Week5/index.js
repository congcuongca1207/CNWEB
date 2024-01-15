// var a =10 //a là biến global scope

// if (1==1){
//     var a = 20
//     console.log(a)
// }

// //Functions
// //1
// function tenHam()
// {

// }
// //2
// const tenbien = function()
// {

// }
// //3. arrow function
// //Functional programming
// const tenham () => {

// }

var str = "this is Test"
var str2 = "hello a"
console.log(str.charAt(0).toUpperCase() + str.slice(1-str.length))
console.log(str2.charAt(0).toUpperCase() + str2.slice(1-str2.length))

var3 ="the quick brown fox"
var4 = "java script"


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
document.write(fruits)