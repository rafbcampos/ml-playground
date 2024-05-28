import { printTable } from "../helpers/print_table.ts";

type TrainingSample = [number, number, number][];

const orTrainingData: TrainingSample = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
];

const andTrainingData: TrainingSample = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

const nandTrainingData: TrainingSample = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 0],
];

// a single layer perceptron can't solve XOR
const xorTrainingData: TrainingSample = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 0],
];

let currentTrainingData: TrainingSample = orTrainingData;

// Activation function
const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));

const computeGradients = (w1: number, w2: number, bias: number) => {
  let gradientW1 = 0.0;
  let gradientW2 = 0.0;
  let gradientBias = 0.0;

  for (let [input1, input2, expected] of currentTrainingData) {
    const predicted = sigmoid(input1 * w1 + input2 * w2 + bias);
    const error = predicted - expected;
    const derivative = predicted * (1 - predicted);

    gradientW1 += 2 * error * derivative * input1;
    gradientW2 += 2 * error * derivative * input2;
    gradientBias += 2 * error * derivative;
  }

  gradientW1 /= currentTrainingData.length;
  gradientW2 /= currentTrainingData.length;
  gradientBias /= currentTrainingData.length;

  return { gradientW1, gradientW2, gradientBias };
};

const MAX_ITERATIONS = 1000000;

const gradientDescent = () => {
  const learningRate = 1e-3;
  let w1 = Math.random();
  let w2 = Math.random();
  let bias = Math.random();

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const { gradientW1, gradientW2, gradientBias } = computeGradients(
      w1,
      w2,
      bias,
    );
    w1 -= learningRate * gradientW1;
    w2 -= learningRate * gradientW2;
    bias -= learningRate * gradientBias;
  }

  // Compute the final loss
  let loss = 0.0;

  for (let [input1, input2, expected] of currentTrainingData) {
    const predicted = sigmoid(input1 * w1 + input2 * w2 + bias);
    const error = predicted - expected;
    loss += error * error;
  }
  loss /= currentTrainingData.length;

  return { w1, w2, bias, loss };
};

export const runLogicalGatesTraining = () => {
  const columnDesc = ["input1", "input2", "expected", "predicted"];
  const { w1, w2, bias, loss } = gradientDescent();

  const table: (string | number)[][] = currentTrainingData.map((row) => {
    const input1 = row[0];
    const input2 = row[1];
    const expected = row[2];
    const predicted = sigmoid(input1 * w1 + input2 * w2 + bias);
    return [input1, input2, expected, predicted];
  });

  table.unshift(columnDesc);

  console.log();
  console.log("=================================");
  console.log("Logical Gates Training");
  console.log("=================================");
  console.log();
  console.log({ w1, w2, bias, loss });
  console.log();
  printTable(table);
};
