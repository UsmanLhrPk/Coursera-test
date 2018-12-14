
// // Lecture 50 Part 1
// var array = new Array();
// array[0] = "Usman";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};
// console.log(array);
// array[2](array[0]);
// console.log("I know you are learning" + array[3].course);
// console.log(array.length);


// Lecture 50 Part 2
// var names2 = ["Usman", "Javaid", "Iqra"];
// // var myObj = {
// // 	name: "Usman",
// // 	course: "HTML, CSS and JS",
// // 	platform: "Coursera"
// // };

// // for (var prop in myObj) {
// // 	console.log(prop + ": " + myObj[prop]);
// // }

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }

// Lecture 51 Closures

// function makeMultiplier(multiplier) {
// 	return (
// 		function (x) {
// 			return multiplier * x;
// 		}

// 		);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));


// Lecture 52 Part 1

 (function(window) {

 var obj = {};

 obj.dreamOn = function () {
  console.log("I want to see the global scope! Let me out!");
};
 window.doer = obj;
 
 });

 window.doer.dreamOn();



