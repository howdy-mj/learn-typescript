// 타입 추론 기본 1
var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a',
};
var shoppingItem: Dropdown<string> = {
  value: 'shoe',
  title: 'hoho',
};

// 타입 추론 기본 3
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<string> = {
  // T가 올라감
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c',
};

// Best common type
var arr9 = [1, 2, true]; // 알아서 추론
