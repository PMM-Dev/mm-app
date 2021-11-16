import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import Header from "../../components/Header/Header";
import constants from "../../constants";
import KoreanEnum from "../../KoreanEnum";
import NoContentAnnouncement from "../../components/NoContentAnnouncement";
import RequestFailedAnnouncement from "../../components/RequestFailedAnnouncement";
import EmptyContentCenterView from "../../components/EmptyContentCenterView"

const Dummy = [
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
    {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
];

const RestaurantList = ({route, navigation}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        /*async function requestRestaurantsByType() {
            try {
                const loadedRestaurants = await getRestaurantsByType(genre);
                setRestaurants(loadedRestaurants);
            } catch (e) {
                alert("서버 요청에 실패했습니다.");
                setRestaurants(undefined);
            } finally {
                setIsLoading(false);
            }
        }
*/
    }, []);


    return (
        <Screen>
            <Wrapper>
                <Header
                    route={route}
                    navigation={navigation}
                    title={"자유게시판"}
                />
                <PostScroll>
                    {!isLoading ? (
                        <EmptyContentCenterView>
                            <ActivityIndicator color={Theme.hlOrange} size={"large"}/>
                        </EmptyContentCenterView>
                    ) : <PostList>
                        {Dummy.map((element, key) => (
                            <Card key = {key} onPress={()=>{ navigation.navigate("Post", {
                                postId: element,
                            })}}>
                                <CardTitle>{element.Title}</CardTitle>
                                <CardExplanation>
                                    <CardExplanationText>{element.ID} | 조회수 : {element.visitNum} | 추천 : {element.recommendNum}</CardExplanationText>
                                    <CardExplanationDate>{element.date}</CardExplanationDate>
                                </CardExplanation>
                            </Card>
                        ))}</PostList>}
                </PostScroll>
            </Wrapper>
        </Screen>
    );
};


const CardExplanationDate = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
`;

const CardExplanationText = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(2.5)}px;
  width : 90%;
`;

const CardExplanation = styled.View`
  flex-direction: row;
`;

const CardTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: ${constants.vw(4)}px;
  margin-bottom: ${constants.vh(1)}px;
`;

const Card = styled.TouchableOpacity`
  height : ${constants.vh(7)}px;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.borderGray};
`


const PostList = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.borderGray};
  padding-left: ${constants.vw(4.5)}px;
`;

const PostScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0px ${constants.vw(4.5)}px;
`;

const Wrapper = styled.View`
  height: ${constants.pureheight}px;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

export default RestaurantList;