// 기본 함수
function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
// 함수를 호출할 때 타입을 넘겨주는 것
getValue('hi').toLocaleUpperCase();
getValue<string>('hi'); // string 타입을 같이 넘겨줌
getValue(100).toLocaleString();

function logText8<T>(text: T): T {
  console.log(text);
  if (typeof text === 'string') {
    text.split('').reverse().join('');
  }
  return text;
}
logText8<string>('a');
logText8<number>(10);
logText8<boolean>(true);

// 제네릭 기본 문법 - 인터페이스
interface Developer8_1 {
  name: string;
  age: number;
}
// const jane: Developer8_1 = { name: 'jane', age: '10' };

interface Developer8_2<T> {
  name: string;
  age: T;
}
const tony: Developer8_2<number> = { name: 'tony', age: 100 };
const iron: Developer8_2<string> = { name: 'iron', age: '100' };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray8_1<T>(value: T): T {
  // value.length; // X, 타입스크립트 입장에서 어떤 타입이 들어오는지 작성하지 않으면 추론할 수 없음
  return value;
}
getNumberAndArray8_1('hi');

function getNumberAndArray8_2<T>(value: T[]): T[] {
  value.length; // O
  return value;
}
getNumberAndArray8_2(['hi']); // 무조건 배열을 넣어야 함

// 제네릭 타입 제한 - 정의된 타입 사용
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a');
// logTextLength(10); // 숫자는 length를 사용할 수 없어서
logTextLength({ length: 10 });

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions8<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
// getAllowedOptions8('nothing');
const a = getAllowedOptions8('name');
getAllowedOptions8('price');
a.toUpperCase(); // Name
