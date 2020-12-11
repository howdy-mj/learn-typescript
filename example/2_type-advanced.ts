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
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str2 = '이건 문자열 타입이 됩니다.';

let num2: number;
num2 = 'str' as any;

const divElement = document.querySelector('#app');
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
