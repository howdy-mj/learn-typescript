// ES5
function Person5_1(name, age) {
  this.name = name;
  this.age = age;
}
const hulk = new Person5_1('Banner', 33);

// ES6 + 타입스크립트
class Person5_2 {
  name: string;
  age: number;
  readonly data: string; // 읽기만 가능, 수정 불가

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const capt = new Person5_2('Steve', 100);

// NOTE: 위 코드의 컴파일 결과 확인
// https://www.typescriptlang.org/play/index.html?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6aYAtvAFzQQAuiAlmgOYDcu+Y9ZBArkQEZLMs8wdFUSdglFIgAUhEuVF16AGmhsOabn0QBKLIPx5KACxoQAdHPjQAvAWLxmhwybPn1tteyf4AvtgMAExROHhB4AEF2aT0cZ3xXCw87RPd2aAAqaAAmHzx-XyA
