import React from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ButtonPart = () => {
  return (
    <Buttons>
      <ButtonsFirstRow>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_1.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_2.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_3.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_4.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_5.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
      </ButtonsFirstRow>
      <ButtonsSecondRow>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_6.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_7.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_8.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_9.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
        <EachButton>
          <TouchableOpacity>
            <Image
              source={require("../../assets/HomeFoodIcon/icon_10.png")}
              style={styles.food_button}
            />
          </TouchableOpacity>
        </EachButton>
      </ButtonsSecondRow>
    </Buttons>
  );
};

const styles = StyleSheet.create({
  food_button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

const Buttons = styled.View`
  width: 100%;
  height: 72%;
  align-items: center;
`;

const ButtonsFirstRow = styled.View`
  width: 95%;
  height: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const EachButton = styled.View`
  width: 17%;
  margin: 0px;
`;

const ButtonsSecondRow = styled.View`
  width: 95%;
  height: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 3px;
`;

export default ButtonPart;
