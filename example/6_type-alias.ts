// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum6(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Person6 = {
  name: string;
  age: number;
};

// function getPerson(): Person6 {
//   // ...
// }

// #3
type Hero = {
  skill: string;
};

// const capt6: Hero = {
//   // skill: 'throwing a shield'
// };
