// 타입 호환
interface Developer13 {
  name: string;
  skill: string;
}

interface Person13 {
  name: string;
}

let developer: Developer13;
let person: Person13;

developer = person; // developer 속성이 더 많기 때문에 호환이 안됨
person = developer; // 주로 우측에 타입이 더 많은 것을 둠

class Person13_2 {
  name: string;
}
developer = new Person13_2(); // 구조적으로 맞지 않음
// 내부 적으로 존재하고 있는 속성과 타입에 대한 비교를 진행

// 함수
let add13 = function (a: number) {
  // console.log(a);
};

let sum13 = function (a: number, b: number) {
  // return a + b;
};

sum13 = add13;
add13 = sum13;

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
// 아무것도 없는 것에 타입을 주입하면 호환이 됨

interface NotEmpty<T> {
  data: T;
}
let notemty1: NotEmpty<string>;
let notemty2: NotEmpty<number>;
notemty1 = notemty2;
notemty2 = notemty1;
// 있는 변수에 타입을 주입한다면 호환이 되지 않음
