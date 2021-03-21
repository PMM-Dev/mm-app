import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {ScrollView,TouchableOpacity} from "react-native";
import RestaurantCard from "../components/RestaurantCard";

const KoreanScreen = () => {
  const Dummy = 
  [{
    name: "창평국밥",
    description: "맛있음" ,
    type: "KOREAN",
		price: "CHEAP",
		location: "ARTGATE",
		deliveryable: "FALSE" 
  },
  {
    name: "어머님국밥",
    description: "맛있음" ,
    type: "KOREAN",
		price: "CHEAP",
		location: "ARTGATE",
		deliveryable: "FALSE" 
  },
  {
    name: "할아버님국밥",
    description: "맛있음" ,
    type: "KOREAN",
		price: "CHEAP",
		location: "ARTGATE",
		deliveryable: "FALSE" 
  },
];
  const navigation = useNavigation();
  const [count, setCount] = useState([]);
  useEffect(()=>{
    setCount(Dummy)
  },[]);  
  const RestaurantCardList = count.map(element => 
    <TouchableOpacity
    activeOpacity={0.8}
     onPress={() => navigation.navigate("Restaurant",{data : element})}>    
     <RestaurantCard key = {element.description} name = {element.name} price = {element.price} location = {element.location} />      
    </TouchableOpacity>
  );
  return (
    <Holder>
      <ScrollView>
        {RestaurantCardList}
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

const Title = styled.Text``;

export default KoreanScreen;
