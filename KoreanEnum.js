const Type = {
  KOREAN: "한식",
  FLOUR: "분식",
  DESSERT: "디저트",
  JAPANESE: "일식",
  FASTFOOD: "패스트푸드",
  WESTERN: "양식",
  ASIAN: "아시안",
};

const Genre = {
  DELIVERABLE: "배달",
  RANK: "랭킹"
}

const Price = {
  CHEAP: "킹성비",
  REASONABLE: "평타",
  EXPENSIVE: "FLEX",
};

const location = {
  FRONTGATE: "정문",
  SIDEGATE: "쪽문",
  BACKGATE: "후문",
  COMMERCEGATE: "상대"
};

const theme = {
  CAFE_STUDY: "🧑‍💻 카페에서 공부할 땐?",
  EXAM_MEAL: "✍️ 시험기간에는 싸고 빠르게!",
  FLEX_COURSE: "🤑 오늘은 FLEX 해볼까?",
  WITH_PARENT: "🚙 친구나 부모님이 놀러왔을 땐?",
  KOREAN_SOUP: "🍲 예! 그 돈이면 뜨근한 국밥이 몇 그릇인지 아니?"
}

export default { ...Type, ...Genre, ...Price, ...location, ...theme };
