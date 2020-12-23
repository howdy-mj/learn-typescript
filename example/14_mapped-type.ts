type Heroes14 = 'Hulk' | 'Capt' | 'Thor';
type HeroAges14 = { [K in Heroes14]: number }; // 타입이 변경된 것 확인 가능
const ages14: HeroAges14 = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};
