// describe('Javabuzz', function() {
//   var javabuzz;
//
//   describe('knows when a number is', function(){
//
//     it('divisible by 3', function() {
//
//       fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.byThree(3)).toEq ("Fizz");
//
//     });
//
//   });
//
//   describe('knows when a number is NOT', function() {
//     it('divisible by 3', function() {
//       fizzbuzz = new Fizzbuzz();
//       expect(fizzbuzz.byThree(1)). toBe(false);
//     });
//   });
//
// });
// describe('Fizzbuzz', function() {
//  var game;
//
//  // beforeEach(function() {
//  //   game = new fizzBuzz();
//  // });
//  it("Prints the number 1", function() {
//    expect(game.fun(1)).toEqual(1);
//  });
//
//  it("Prints 'fizz' on a 3", function() {
//    expect(game.fun(3)).toEqual('fizz');
//  });
//
//  it("Prints 'buzz' on a 5", function() {
//    expect(game.fun(5)).toEqual("buzz");
//  });
//
//  it("Print 'fizzbuzz' on 15", function() {
//    expect(game.fun(15)).toEqual("fizzbuzz");
//  });
//
//  it ("Print the number 2 on 2", function() {
//    expect(game.fun(2)).toEqual(2);
//  });
//
//  it ("Prints 'fizz' on a divisible of 3", function() {
//    expect(game.fun(9)).toEqual('fizz')
//  });
//
//  it ("Prints 'buzz' on a divisible of 5", function() {
//    expect(game.fun(20)).toEqual('buzz')
//  });
//
//  it ("Prints 'fizzbuzz' on a divisible of 15", function() {
//    expect(game.fun(30)).toEqual('fizzbuzz')
//  });
// });
describe("FizzBuzz", function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


describe("FizzBuzz", function() {
  it ("has a method isDivisible by 15 with parameter", function() {
    fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.isDivisible(15)).toBe("FizzBuzz");
  });

});

describe("FizzBuzz", function() {
  it ("has a method isDivisible by 5 with parameter", function() {
    expect(fizzBuzz.isDivisible(5)).toBe("Buzz");
  });
});
 describe("FizzBuzz", function() {
   it ("has a method isDivisible by 3 with parameter", function() {
     expect(fizzBuzz.isDivisible(3)).toBe("Fizz");
   });
 });
 describe("FizzBuzz", function() {

   it ("returns the number itself if not divisible", function() {
     expect(fizzBuzz.isDivisible(i)).toBe(i);
   });
 });
});
