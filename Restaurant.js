const Type = Object.freeze({
  Korean: 1,
  Flour: 2,
  Dessert: 3,
  Japanese: 4,
  Fastfood: 5,
  Western: 6,
  Asain: 7,
  Nightfood: 8,
});

const Price = Object.freeze({
  Cheap: 1,
  Reasonable: 2,
  Expensive: 3,
});

const location = Object.freeze({
  FrontGate: 1,
  SideGate: 2,
  BackGate: 3,
});

export default { ...Type, ...Price, ...location };
