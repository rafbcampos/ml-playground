# Machine Learning Playground

This project serves as a playground for experimenting with machine learning and neural network concepts.

## Getting Started

To install the necessary dependencies, run:

```bash
bun install
```

## Running the Scripts

To execute the scripts, use the following command:

```bash
bun run index.ts
```

Should result display the results for the models contained in the `playground` directory:

```bash

=================================
Linear Function Training
=================================

---------------------------------
Finite difference
---------------------------------
{
  value: 2.2716853159744956,
  loss: 0.07381291091616173,
}
---------------------------------
Gradient Descent
---------------------------------
{
  value: 2.0025849678349643,
  loss: 0.020846514798094615,
}

=================================
Logical Gates Training
=================================

{
  w1: 5.385914815649175,
  w2: 5.386079670438996,
  bias: -2.4381292726904977,
  loss: 0.0028543596484585164,
}

--------------------------------------------------
| input1 | input2 | expected | predicted           |
--------------------------------------------------
| 0      | 0      | 0        | 0.08031097775689913 |
--------------------------------------------------
| 1      | 0      | 1        | 0.9501587226031045  |
--------------------------------------------------
| 0      | 1      | 1        | 0.9501665290725625  |
--------------------------------------------------
| 1      | 1      | 1        | 0.9997598160395132  |
--------------------------------------------------
```

## Playground

The playground directory contains scripts for different machine learning concepts:

- `linear-function.ts`: This script demonstrates two methods for approximating a linear function: the Finite Difference method and the Gradient Descent method.
- `logical-gates.ts`: This script demonstrates the training of logical gates (AND, OR, NAND) using a single layer perceptron.
