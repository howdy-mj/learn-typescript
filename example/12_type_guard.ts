// type guard
interface Developer12 {
  name: string;
  skill: string;
}

interface Person12 {
  name: string;
  age: number;
}

function introduce(): Developer12 | Person12 {
  return { name: 'Tony', age: 23, skill: 'Iron Making' };
}

const tony = introduce();
console.log(tony.skill); // 타입들의 공통된 속성만 보여지기 때문에 빨간줄

// 타입 단언으로 해결 가능
if ((tony as Developer12).skill) {
  (tony as Developer12).skill; // 자동완성에 보임
} else if ((tony as Person12).age) {
  (tony as Person12).age;
}
// 상당히 귀찮은 과정...

// 타입 가드 정의
function isDeveloper12(target: Developer12 | Person12): target is Developer12 {
  // 해당 타입에 해당하는지가 return type
  return (target as Developer12).skill !== undefined;
}

if (isDeveloper12(tony)) {
  // Developer로 자동 완성
  tony.skill;
} else {
  // Person으로 자동 완성
  tony.age;
}
