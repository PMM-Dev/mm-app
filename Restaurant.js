const Type = Object.freeze({
  Korean: 0,
  Flour: 1,
  Dessert: 2,
  Japanese: 3,
  Fastfood: 4,
  Western: 5,
  Asain: 6,
  Nightfood: 7,
});

const Price = Object.freeze({
  Cheap: 0,
  Reasonable: 1,
  Expensive: 2,
});

const location = Object.freeze({
  FrontGate: 0,
  SideGate: 1,
  BackGate: 2,
});

export default { ...Type, ...Price, ...location };
