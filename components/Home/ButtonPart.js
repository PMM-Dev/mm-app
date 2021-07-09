import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const StringScreen = [
  { genre: "KOREAN" },
  { genre: "FLOUR" },
  { genre: "WESTERN" },
  { genre: "ASIAN" },
  { genre: "JAPANESE" },
  { genre: "DESSERT" },
  { genre: "FASTFOOD" },
];

const ButtonPart = ({ navigation }) => {
  return (
    <Buttons>
      <ButtonsFirstRow>
        <EachButton>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResList", {
                param: StringScreen[0],
              })
            }
          >
            <Img source={require("../../assets/HomeFoodIcon/icon_1.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResList", {
                param: StringScreen[1],
              })
            }
          >
            <Img source={require("../../assets/HomeFoodIcon/icon_2.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_3.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_4.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_5.png")} />
          </TouchableOpacity>
        </EachButton>
      </ButtonsFirstRow>
      <ButtonsSecondRow>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_6.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_7.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_8.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_9.png")} />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Img source={require("../../assets/HomeFoodIcon/icon_10.png")} />
          </TouchableOpacity>
        </EachButton>
      </ButtonsSecondRow>
    </Buttons>
  );
};

const Img = styled.Image`
  width: 98%;
  height: 100%;
  border-radius: 10px;
`;

const Buttons = styled.View`
  top: 2%;
  width: 100%;
  height: 72%;
  align-items: center;
`;

const ButtonsFirstRow = styled.View`
  width: 90%;
  height: 45%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const EachButton = styled.View`
  width: 20%;
  margin: 0px;
`;

const ButtonsSecondRow = styled.View`
  width: 90%;
  height: 45%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 3px;
`;

export default ButtonPart;
