// interface Hero {
//   name: string;
//   skill: string;
// }

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {};
// const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'shield';
// 누락을 하는 에러가 생길 수 있음

// const a: string | null;
// a!; // a는 값이 있다고 하는 것. 하지만 사각지대 에러가 있을 수 있어서 주의해서 써야함
// if (a) {
//   // non-null type assumption
//   a; // string으로 추론
// }
