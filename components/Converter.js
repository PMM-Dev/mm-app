import KoreanEnum from "../KoreanEnum";

export const Converter = (data) => {
  switch (data) {
    case "KOREAN":
      return KoreanEnum.KOREAN;
    case "FLOUR":
      return KoreanEnum.FLOUR;
    case "DESSERT":
      return KoreanEnum.DESSERT;
    case "JAPANESE":
      return KoreanEnum.JAPANESE;
    case "FASTFOOD":
      return KoreanEnum.FASTFOOD;
    case "WESTERN":
      return KoreanEnum.WESTERN;
    case "ASIAN":
      return KoreanEnum.ASIAN;
    case "CHEAP":
      return KoreanEnum.CHEAP;
    case "REASONABLE":
      return KoreanEnum.REASONABLE;
    case "EXPENSIVE":
      return KoreanEnum.EXPENSIVE;
    case "FRONTGATE":
      return KoreanEnum.FRONTGATE;
    case "SIDEGATE":
      return KoreanEnum.SIDEGATE;
    case "BACKGATE":
      return KoreanEnum.BACKGATE;
    case "COMMERCEGATE":
      return KoreanEnum.COMMERCEGATE;
  }
};

export const ThemeConverter = (data) => {
  switch (data) {
    case "CAFE_STUDY":
      return KoreanEnum.CAFE_STUDY;
    case "EXAM_MEAL":
      return KoreanEnum.EXAM_MEAL;
    case "FLEX_COURSE":
      return KoreanEnum.FLEX_COURSE;
    case "WITH_PARENT":
      return KoreanEnum.WITH_PARENT;
    case "KOREAN_SOUP":
      return KoreanEnum.KOREAN_SOUP;
  }
};

export const SearchConverter = (searchType) => {
  switch (searchType) {
    case "restaurant":
      return KoreanEnum.restaurant;
    case "post":
      return KoreanEnum.post;
    case "member":
      return KoreanEnum.member;
  }
};
