function logMessage1(value: string) {
  console.log(value);
}
function logMessage2(value: number) {
  console.log(value);
}
function logMessage3(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage4(value: string | number) {
  console.log(value);
}

function logMessage5(value: string | number) {
  // 타입 가드
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number');
}

// # Intersection 타입 문법
interface Developer7 {
  name: string;
  skill: string;
}

interface Person7 {
  name: string;
  age: number;
}

function askSomeone7_1(someone: Developer7 | Person7) {
  someone.name; // O, 교집합만 바로 접근 가능
  // someone.age; // X, 어떤 값이 들어올지 모르기 때문에 우선 접근 불가
}
askSomeone7_1({ name: 'kmj', skill: 'fe' });
askSomeone7_1({ name: 'kmj', age: 20 });

// let inter1: string | number | boolean;
// let inter2: string & number & boolean; // never

function askSomeone7_2(someone: Developer7 & Person7) {
  someone.name;
  someone.age;
  someone.skill;
  // 전부 접근 가능
}
askSomeone7_2({ name: 'kmj', skill: 'fe', age: 20 }); // 전부다 넣어야 함
