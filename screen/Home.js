import React from "react";
import {
  View,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Theme from "../style/Theme";
import RestaurantMenu from "../components/Home/RestaurantMenu";
import PostMenu from "../components/Home/PostMenu";
import logo_text from "../assets/logo_text.png";
//이거 넣는법 까먹음
// 음식 버튼 부분 component화 시켜서 개선

const StringScreen = [
  { screen: "KoreanList" },
  { screen: "WesternList" },
  { screen: "FlourList" },
  { screen: "JapaneseList" },
  { screen: "FastfoodList" },
  { screen: "AsianList" },
  { screen: "DessertList" },
];

const Dummy = [
  {
    title: "♚♚이더리움 비트☆코인♚♚가입시$$전원 0.01코인 지급☜☜100%증정",
    like: 98766,
  },
  {
    title: "ddffddff",
    like: 1,
  },
];

const win = Dimensions.get("window");

const Home = () => {
  const [text, onChangeText] = React.useState();

  return (
    <Screen>
      <Logo>
        <Logopos>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Image
            source={require("../assets/logo_text.png")}
            style={styles.logo_text}
          />
        </Logopos>
      </Logo>
      <Foodlist>
        <Searchbar>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            style={styles.input}
            placeholder="위치 / 음식 키워드로 검색해주세요"
          />
          <SearchButtonPos>
            <TouchableOpacity onPress={() => console.log("pressed")}>
              <Image
                source={require("../assets/search_1.png")}
                style={styles.search_button}
              />
            </TouchableOpacity>
          </SearchButtonPos>
        </Searchbar>
        <Buttons>
          <ButtonsFirstRow>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_1.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_2.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_3.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_4.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_5.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
          </ButtonsFirstRow>
          <ButtonsSecondRow>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_6.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_7.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_8.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_9.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
            <EachButton>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icon_10.png")}
                  style={styles.food_button}
                />
              </TouchableOpacity>
            </EachButton>
          </ButtonsSecondRow>
        </Buttons>
      </Foodlist>
      <Post></Post>
    </Screen>
  );
};

export default Home;

const Screen = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Logo = styled.View`
  width: 100%;
  height: 14%;
  flex: 1;
`;

const Logopos = styled.View`
  width: 60%;
  height: 80%;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  bottom: -10px;
`;

const Foodlist = styled.View`
  width: 100%;
  height: 32%;
  background-color: #eff0f4;
`;

const Searchbar = styled.View`
  width: 100%;
  height: 32%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SearchButtonPos = styled.View`
  width: 70%;
  height: 70%;
  position: absolute;
  right: -80px;
`;

const Buttons = styled.View`
  width: 100%;
  height: 72%;
  align-items: center;
`;

const ButtonsFirstRow = styled.View`
  width: 90%;
  height: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const EachButton = styled.View`
  width: 20%;
`;

const ButtonsSecondRow = styled.View`
  width: 90%;
  height: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 3px;
`;

const Post = styled.View`
  width: 100%;
  height: 52%;
`;

const styles = StyleSheet.create({
  logo: {
    width: "20%",
    height: "80%",
    resizeMode: "contain",
  },
  logo_text: {
    width: "70%",
    height: "80%",
    resizeMode: "contain",
  },
  input: {
    width: "90%",
    backgroundColor: "#ffffff",
    height: "80%",
    borderRadius: 5,
    paddingLeft: 20,
    color: "#D4D7DB",
    fontSize: 16,
  },
  search_button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  food_button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
