// FizzBuzz challange

// FizzBuzz rules:
// - Print "Fizz" for numbers divisible by 3.
// - Print "Buzz" for numbers divisible by 5.
// - Print "FizzBuzz" for numbers divisible by both 3 and 5.
// - Otherwise, print the number itself.

let output = []; // all the prints for fizzbuzz challange will be pushed here
let num = 1;
const FizzBuzz = (nOfTimes) => {
  // takes a parameter for the number of times the function should rin
  for (let i = 1; i <= nOfTimes; i++) {
    // loop all statements in the function
    if (num % 3 === 0 && num % 5 === 0) {
      output.push("FizzBuzz");
    } else if (num % 3 === 0) {
      output.push("Fizz");
    } else if (num % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(num);
    }
    num++;
    console.log(output);
  }
};

FizzBuzz(15); // calling the function with specifing how many we want the function to run.
