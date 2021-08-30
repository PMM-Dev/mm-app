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
    case "ARTGATE":
      return KoreanEnum.ARTGATE;
  }
};
