const Type = {
  KOREAN: "한식",
  FLOUR: "분식",
  DESSERT: "디저트",
  JAPANESE: "일식",
  FASTFOOD: "패스트푸드",
  WESTERN: "양식",
  ASIAN: "아시안",
};

const Price = {
  CHEAP: "킹성비",
  REASONABLE: "평타",
  EXPENSIVE: "FLEX",
};

const location = {
  FRONTGATE: "정문",
  SIDEGATE: "쪽문",
  BACKGATE: "후문",
  ARTGATE: "예대"
};

export default { ...Type, ...Price, ...location };
