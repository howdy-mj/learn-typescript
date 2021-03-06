// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: 'hi', age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User): void {
  console.log(user);
}
getUser(seho);

// 함수의 전체 타입에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number;
}
let sum4: SumFunction;
sum4 = function (num1: number, num2: number): number {
  return num1 + num2;
};

// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string;
}
let arr: StringArray;
arr[0] = 'hi';
// arr[1] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
const obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
};
// obj['a'] = 'a' // 에러
Object.keys(obj).forEach((value) => {}); // value 타입 추론

// 인터페이스 확장
interface Person4 {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer4 extends Person4 {
  language: string;
}
const joo4: Developer4 = { name: 'joo', age: 20, language: 'ts' };
