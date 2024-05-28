// This script demonstrates two methods for approximating a linear function:
// the Finite Difference method and the Gradient Descent method.

// The training data consists of pairs of numbers, and the goal is to
// find a function that maps the first number to the second.
const training_data: [number, number][] = [
  [0.0, 2.0],
  [1.0, 3.0],
  [2.0, 4.0],
  [3.0, 5.0],
  [4.0, 6.0],
  [5.0, 7.0],
  [6.0, 8.0],
  [7.0, 9.0],
  [8.0, 10.0],
];

const MAX_ITERATIONS = 1000;

// MSE measures the average squared difference between the estimated
// values and the actual value.
const mse = (value: number) => {
  let result = 0.0;

  for (let [input, expected] of training_data) {
    const prediction = value + input;
    const deviation = prediction - expected;
    result += deviation * deviation;
  }

  result /= training_data.length;

  return result;
};

// The Finite Difference method approximates the derivative of a function
// by calculating the difference between the function values at two points
// and dividing by the distance between the points. This method can be
// computationally expensive and less accurate due to the approximation of epsilon.

const gradientDescentWithFiniteDifference = () => {
  const learningRate = 1e-3;

  let value = Math.random() * 10;
  let loss = mse(value);

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    value -= ((mse(value + learningRate) - loss) / learningRate) * learningRate;
    loss = mse(value);
  }

  return { value, loss };
};

const computeGradient = (value: number) => {
  let result = 0.0;

  for (let [input, expected] of training_data) {
    // cost derivative
    result += 2 * (input + value - expected) * input;
  }

  result /= training_data.length;

  return result;
};

// The Gradient Descent method is a more accurate and faster method for approximating a linear function.
// It calculates the gradient of the loss function by using the derivative of the function.
const gradientDescent = () => {
  const learningRate = 1e-3;
  let value = Math.random() * 10;
  let loss = computeGradient(value);

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    loss = computeGradient(value);
    value -= learningRate * loss;
  }

  return { value, loss };
};

export const runLinearFunctionTraining = () => {
  const result1 = gradientDescentWithFiniteDifference();
  const result2 = gradientDescent();

  console.log();
  console.log("=================================");
  console.log("Linear Function Training");
  console.log("=================================");
  console.log();
  console.log("---------------------------------");
  console.log("Finite difference");
  console.log("---------------------------------");
  console.log({ value: result1.value, loss: result1.loss });
  console.log("---------------------------------");
  console.log("Gradient Descent");
  console.log("---------------------------------");
  console.log({ value: result2.value, loss: result2.loss });
};
