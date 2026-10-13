// Arrow function that performs division and returns a Promise
const divideNumbers = (numerator, denominator) => {
  return new Promise((resolve, reject) => {
    if (denominator === 0) {
      reject("Error: Division by zero is not allowed.");
    } else {
      resolve(numerator / denominator);
    }
  });
};

// 5 dummy values
const testCases = [
  { num: 10, den: 2 },
  { num: 10, den: 0 },
  { num: 45, den: 5 },
  { num: -21, den: 3 },
  { num: 0, den: 4 }
];

// function to run and display each dummy values
const runTests = async () => {
  for (let i = 0; i < testCases.length; i++) {
    const { num, den } = testCases[i];
    console.log(`Example ${i + 1}`);
    console.log(`Dividing ${num} by ${den}`);

    await divideNumbers(num, den)
      .then((result) => {
        console.log(`Result: ${result}`);
      })
      .catch((error) => {
        console.log(`${error}`);
      });

    console.log(""); // Empty line for neat spacing
  }
};

runTests();