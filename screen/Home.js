import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Button, Card } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Theme from "../style/Theme";
import PostPreview from "../components/PostPreview";
import RestaurantTypeCard from "../components/RestaurantTypeCard";
import CustomCard from "../components/CustomCard";

const Home = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <CustomCard
        title="식당 리스트"
        moreButtonTitle="전체 보기"
        onMoreClick={() => navigation.navigate("RestaurantList")}
        flex={4}
      >
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <RestaurantTypeCard index={0} />
          <RestaurantTypeCard index={1} />
          <RestaurantTypeCard index={2} />
          <RestaurantTypeCard index={3} />
          <RestaurantTypeCard index={4} />
          <RestaurantTypeCard index={5} />
          <RestaurantTypeCard index={6} />
          <RestaurantTypeCard index={7} />
        </ScrollView>
      </CustomCard>
      <CustomCard
        title="게시글"
        moreButtonTitle="더 보기"
        // onMoreClick={() => navigation.navigate("RestaurantList")}
        flex={3.5}
      >
        <PostPreview />
        <PostPreview />
      </CustomCard>
      <Card style={{ marginTop: 15, flex: 0 }}>
        <Card.Content>
          <CardContentWrapper>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Title>공지</Title>
              <Content>게시판</Content>
            </View>
            <MaterialIcons
              name="fiber-new"
              size={20}
              color={Theme.hlColor}
              style={{ marginRight: 5 }}
            />
          </CardContentWrapper>
        </Card.Content>
      </Card>
      <EmptySpace />
    </Screen>
  );
};

export default Home;

const EmptySpace = styled.View`
  flex: 1;
`;

const RecentPostHolder = styled.View``;

const Title = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  margin-right: 10px;
`;

const Content = styled.Text`
  font-size: 13px;
  opacity: 0.65;
`;

const CardContentWrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Screen = styled.View`
  flex: 1;
`;
