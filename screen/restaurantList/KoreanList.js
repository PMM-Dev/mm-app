import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import RestaurantCard from "../../components/RestaurantCard";

const Dummy = [
  {
    name: "창평국밥",
    description: "맛있음",
    type: "KOREAN",
    price: "CHEAP",
    location: "ARTGATE",
    deliveryable: "FALSE",
  },
  {
    name: "어머님국밥",
    description: "맛있음",
    type: "KOREAN",
    price: "CHEAP",
    location: "ARTGATE",
    deliveryable: "FALSE",
  },
  {
    name: "할아버님국밥",
    description: "맛있음",
    type: "KOREAN",
    price: "CHEAP",
    location: "ARTGATE",
    deliveryable: "FALSE",
  },
];
// Home.js 마찬가치로 더미 밖으로

// Screen 에서는 navigation을 props로 원래 주어줌.
// https://reactnavigation.org/docs/navigation-prop/
// 여기서 위쪽에 있는
// It's important to highlight the navigation prop is not passed in to all components; only screen components receive this prop automatically! ~
// 이 부분부터 읽어봐. useNavigation을 굳이 넣은 이율가 있겠지? 전역변수가 편하다고 늘 쓰지 않는 것 처럼.
const KoreanList = ({ navigation: { navigate } }) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    setCount(Dummy);
  }, []);

  // Home 의 RestaurantList 와 같은 이유. 심지어 이 RestaurantCard 버튼의 경우에는 아주 많은 곳에서 재활용하므로
  // 무조건 별도의 파일로 분리해야 하며 (버튼이니까, component로), map은 return() 안에서 작성하기

  // 여기서는 List 스크린내에서 서버 요청을 모아둔 다른 파일의 함수를 실행 후, 결과값을 hook에 저장할거니까 count (이름 이상함 변경좀) 에
  // 저장하는 코드가 괜찮지만, Home에서 분리한 PostMenu(구 PostList)는 Home이 데이터를 불러오고 PostMenu에 넘겨줘야 하니까 PostMenu는
  // hook 없이 props 로 데이터를 받는다. 이 흐름과 차이점을 이해하기

  return (
    <Holder>
      <ScrollView>
        {count.map((element, key) => (
          // RestaurantCard 를 따로 뺏는데 TouchableOpacity만 따로 뺏네..? 왜지?
          <RestaurantCard
            key={key}
            onPress={() => navigate("Restaurant", { data: element })}
            name={element.name}
            price={element.price}
            location={element.location}
          />
        ))}
      </ScrollView>
    </Holder>
  );
};

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default KoreanList;
