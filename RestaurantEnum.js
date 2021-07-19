const Type = {
  KOREAN: "KOREAN",
  FLOUR: "FLOUR",
  DESSERT: "DESSERT",
  JAPANESE: "JAPANESE",
  FASTFOOD: "FASTFOOD",
  WESTERN: "WESTERN",
  ASIAN: "ASIAN",
  NIGHTFOOD: "NIGHTFOOD",
};

const Price = {
  CHEAP: "CHEAP",
  REASONABLE: "REASONABLE",
  EXPENSIVE: "EXPENSIVE",
};

const location = {
  FRONTGATE: "FRONTGATE",
  SIDEGATE: "SIDEGATE",
  BACKGATE: "BACKGATE",
};

export default { ...Type, ...Price, ...location };
