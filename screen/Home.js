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
import PostNoticeMini from "../components/Home/PostNoticeMini";
import logo_text from "../assets/logo_text.png";
//이거 넣는법 까먹음 알아야됨

// 음식 버튼 부분 component화 시켜서 개선
//음식 버튼 색깔 이미지랑 다름

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
    title: "테스트 게시글입니다1",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다2",
    year: 2021,
    month: 10,
    day: 17,
  },
  {
    title: "테스트 게시글입니다3",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다4",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다5",
    year: 2021,
    month: 5,
    day: 17,
  },
  {
    title: "테스트 게시글입니다6",
    year: 2021,
    month: 5,
    day: 17,
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
      <PostNotice>
        <Post>
          <Post_Title>
            <Post_Title_Title>
              <Post_Title_Title_Text>게시글</Post_Title_Title_Text>
            </Post_Title_Title>
            <Post_Title_Button>
              <TouchableOpacity>
                <Post_Title_Button_Text>더보기+</Post_Title_Button_Text>
              </TouchableOpacity>
            </Post_Title_Button>
          </Post_Title>
          <Post_Content>
            <Post_Content_Content>
              {Dummy.map((element, key) => (
                <PostNoticeMini
                  description={element.title}
                  year={element.year}
                  month={element.month}
                  day={element.day}
                  key={key}
                />
              ))}
            </Post_Content_Content>
          </Post_Content>
        </Post>
        <Notice>
          <Notice_Title>
            <Notice_Title_Title>
              <Notice_Title_Title_Text>공지사항</Notice_Title_Title_Text>
            </Notice_Title_Title>
            <Notice_Title_Button>
              <TouchableOpacity>
                <Notice_Title_Button_Text>더보기+</Notice_Title_Button_Text>
              </TouchableOpacity>
            </Notice_Title_Button>
          </Notice_Title>
          <Notice_Content></Notice_Content>
        </Notice>
      </PostNotice>
      <WhiteSpace />
    </Screen>
  );
};

export default Home;

const WhiteSpace = styled.View`
  width: 100%;
  height: 5%;
`;

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
  height: 28%;
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

const PostNotice = styled.View`
  width: 100%;
  height: 53%;
  justify-content: center;
  align-items: center;
`;

const Post = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const Post_Title = styled.View`
  width: 90%;
  height: 28%;
  flex-direction: row;
  bottom: 5px;
`;

const Post_Title_Title = styled.View`
  width: 80%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Post_Title_Button = styled.View`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Post_Title_Title_Text = styled.Text`
  font-size: 18px;
`;

const Post_Title_Button_Text = styled.Text`
  font-size: 12px;
`;

const Post_Content = styled.View`
  width: 90%;
  height: 72%;
  border: 0.5px;
  justify-content: center;
  align-items: center;
`;

const Post_Content_Content = styled.View`
  width: 100%;
  height: 95%;
  justify-content: center;
  align-items: center;
`;

const Notice = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const Notice_Title = styled.View`
  width: 90%;
  height: 28%;
  flex-direction: row;
  bottom: 5px;
`;

const Notice_Title_Title = styled.View`
  width: 80%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Notice_Title_Button = styled.View`
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Notice_Title_Title_Text = styled.Text`
  font-size: 18px;
`;

const Notice_Title_Button_Text = styled.Text`
  font-size: 12px;
`;

const Notice_Content = styled.View`
  width: 90%;
  height: 72%;
  border: 0.5px;
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
