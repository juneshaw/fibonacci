// Fibonacci series functions
// 3 attack methods:
// 1)  Recursion
// 2)  Temp variables
// 3)  Populating array

// Recursion
function fibonacci(input) {
  if (input <= 1)
    return input
  else
    return fibonacci(input-1) + fibonacci(input-2)
}

// Temp variables
function fibonacciWithLoop(number) {

  if (number < 2) {
    return number;
  }

  var onebehind;
  var twobehind;
  var sum;

  for (var i = 2; i <= number; i++) {
    if (i === 2) {
      twobehind = 0;
      onebehind = 1;
    }

    sum = onebehind+twobehind;
    twobehind = onebehind;
    onebehind = sum;

  }
  return sum;
}

// Populating array
function fibbWithArray(input) {
  var arr = [0,1];
  if (incoming<=1)
    return incoming
  else {
    for (var i = 2; i <= input; i++) {
      array.push( array[i-2] + array[i-1] );
    }
  }
  return array[array.length-1]; // Pop would mutate the array, which you might want later.
}

// Testing
arrayFibNums = [0,1,2,3,4,5,6,7,8,9,10];
arrayFibNums.forEach(function(element) {
  console.log('element: ', element, 'fibonacci number: ', fibonacciWithLoop(element));

})
console.log('70 fib with loop', fibonacciWithLoop(70));
