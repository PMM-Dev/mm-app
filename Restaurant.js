const Type = Object.freeze({
  KOREAN: 0,
  FLOUR: 1,
  DESSERT: 2,
  JAPANESE: 3,
  FASTFOOD: 4,
  WESTERN: 5,
  ASIAN: 6,
  NIGHTFOOD: 7,
});

const Price = Object.freeze({
  CHEAP: 0,
  REASONABLE: 1,
  EXPENSIVE: 2,
});

const location = Object.freeze({
  FRONTGATE: 0,
  SIDEGATE: 1,
  BACKGATE: 2,
});

export default { ...Type, ...Price, ...location };
