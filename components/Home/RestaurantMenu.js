import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomCard from "../CustomCard";
import RestaurantTypeCard from "./RestaurantTypeCard";

const RestaurantMenu = ({ restaurantTypeList }) => {
  const navigation = useNavigation();

  return (
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
        {restaurantTypeList.map((element, key) => (
          <TouchableOpacity
            key={key}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(element.screen.toString())}
          >
            <RestaurantTypeCard index={key} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </CustomCard>
  );
};

export default RestaurantMenu;
