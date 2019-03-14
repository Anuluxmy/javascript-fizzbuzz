// var fizzBuzz = function() {
//
// };
//
// //
// function FizzBuzz() {
//
// };
// FizzBuzz.prototype.isDivisible = function(number) {
//   if (number % 15 == 0){
//   return "FizzBuzz";
// }
// else if ( % 5 == 0){
// return "Buzz";
// }
// else if
// (isDivisible % 3 == 0) {
// return "Fizz";
// }
// else {
//   return "number";
// }
// };
// // fizzBuzz.byThree(3);
// console.log(fizzBuzz(3));


//
// for ( i = 1; i <= 100; i++){
//
//
//    if ( i%15 == 0 ){
//      console.log("Fizzbuzz");
//    } else if (i%3 == 0)
//    {
//      console.log("Fizz");
//    } else if (i%5 == 0){
//      console.log( "Buzz");
//    }
//
//    else  {
//      console.log(i)
//
//    }
// }
function FizzBuzz() {

};
 FizzBuzz.prototype.isDivisible = function(num) {
 if (num % 15 == 0) {
   return 'FizzBuzz';
 }
 else if (num % 5 == 0) {
   return 'Buzz'
 }
 else if (num % 3 == 0) {
   return 'Fizz'
 }
 else {
   return num
 }
};
var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
 console.log(fizzBuzz.isDivisible(i));
}

// Javabuzz.prototype.isDivisibleByThree(function())
