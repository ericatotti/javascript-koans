var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];

    // Check if the number is odd. Number (x) divided (%) by 2 should not be equal to 0
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1, 2, 3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2, 4, 6];
    var mixedBag = [2, 4, 5, 6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2, 4, 6];
    var mixedBag = [2, 4, 5, 6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {
      // The _.range(3) call generates an array of numbers starting from 0 up to, but not including, 3
      expect(_.range(3)).toEqual([0, 1, 2]);

      // The _.range(1, 4) call generates an array of numbers starting from 1 up to, but not including, 4
      expect(_.range(1, 4)).toEqual([1, 2, 3]);

      // The _.range(0, -4, -1) call generates an array of numbers starting from 0 and decrementing by 1 each step, up to, but not including, -4
      expect(_.range(0, -4, -1)).toEqual([0, -1, -2, -3]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      // The flatten function is a higher-order function that takes a nested array and returns a new array with all the nested elements flattened into a single level.
      // In this case, it takes the nested array [ [1, 2], [3, 4] ] and flattens it into [1, 2, 3, 4]
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      // The chain method is used to wrap the initial array [ [0, 1], 2 ] and enable chaining of multiple higher-order functions
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x + 1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(6);
  });

});

