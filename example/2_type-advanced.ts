// 이넘(Enum)
// 주로 드롭다운 형태의 목록, 예외처리에서 사용
enum Avengers {
  Capt = 'capt',
  Ironman = 'ironman',
  Hulk = 'hulk',
}
// 아무 값도 넣지 않았을 때는 숫자가 default 값으로 됨
const myHero = Avengers.Capt;
console.log('myHero', myHero);

// enum 활용
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}
askQuestion(Answer.Yes); // 무조건 해당 이넘 값만 넣을 수 있음
// askQuestion('yes')
// askQuestion('y')
// askQuestion('예스')

// any
let a2: any = 'hi';
a2 = 20;
a2 = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 단언/추정 (type assertion)
// 타입스크립트보다 개발자가 더 정확할 경우 쓰임
let str2 = '이건 문자열 타입이 됩니다.';

let num2: number;
num2 = 'str' as any;

let anything2;
anything2 = 20;
anything2 = 'a';

const anything3 = anything2 as string;
// 그냥 쓰면 any로 추정되지만, string이라고 알려줌으로써 anything3도 string으로 추정(단언)
// 주로 DOM API 조작할 때 자주 쓰임

const divElement = document.querySelector('#app');
// 해당 div가 있을 때 체크하고 innerHTML을 하는 것이 안전함
divElement.innerHTML;

const empty = document.querySelector('#app') as null;
// empty.innerHTML;
