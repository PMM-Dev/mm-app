import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator } from "react-native-paper";
import Theme from "../../style/Theme";
import Feedback from "../../components/Home/Restaurant/Feedback";
import Header from "../../components/Header/Header";

const AppFeedback = ({ route, navigation }) => {
  const [feedbacks, setFeedbacks] = useState();

  const headerTitle = "피드백 목록";

  const dummy = [
    {
      authorName: "이윤수",
      authorPicture: 13,
      content: "존나배고파",
      createdDate: "20201020",
    },
    {
      authorName: "이윤수",
      authorPicture: 13,
      content: "배고파",
      createdDate: "20201020",
    },
    {
      authorName: "이윤수",
      authorPicture: 13,
      content: "매우배고파",
      createdDate: "20201020",
    },
  ];

  useEffect(() => {
    async function requestMeFeedback() {}
    requestMeFeedback();
  }, []);
  return (
    <Page>
      <Header route={route} navigation={navigation} title={headerTitle} />
      <Scroll>
        {dummy ? (
          dummy.map((feedback, index) => {
            return <Feedback feedback={feedback} key={index} />;
          })
        ) : (
          <ActivityIndicator color={Theme.fontBlack} size={"large"} />
        )}
      </Scroll>
    </Page>
  );
};

const Page = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Scroll = styled.ScrollView`
  width: 100%;
  padding: ${constants.vw(5)}px;
`;

export default AppFeedback;
