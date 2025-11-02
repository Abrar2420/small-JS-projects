// fibonacci sequence generator

// fibonacci sequence generator

const fibonacci = (n) => {
  let fibonacciOutput = [];
  let fNum = -1;
  let sNum = 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = fNum + sNum;
    fibonacciOutput.push(sum);
    fNum = sNum;
    sNum = sum;
  }

  return fibonacciOutput;
};

let printFibonacci = fibonacci(20);
console.log(printFibonacci);
