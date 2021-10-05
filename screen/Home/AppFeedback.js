import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator, TextInput } from "react-native-paper";
import Theme from "../../style/Theme";
import Feedback from "../../components/Home/Restaurant/Feedback";
import Header from "../../components/Header/Header";
import RBSheet from "react-native-raw-bottom-sheet";

const AppFeedback = ({ route, navigation }) => {
  const [feedbacks, setFeedbacks] = useState();
  const feedbackWritingPanelRef = useRef();
  const [writingReviewContent, setWritingReviewContent] = useState("");

  const requestPostingFeedback = async () => {
    // const response = await postReview(
    //   writingReviewContent,
    //   writingReviewGrade,
    //   restaurantId
    // );
    if (response === undefined) {
      alert("리뷰 작성에 실패했습니다.");
    }

    closeReviewWritingPanel();
  };

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

  const openReviewWritingPanel = () => {
    feedbackWritingPanelRef.current.open();
  };

  const closeReviewWritingPanel = () => {
    feedbackWritingPanelRef.current.close();
  };

  useEffect(() => {
    async function requestMeFeedback() {}
    requestMeFeedback();
  }, []);
  return (
    <Page>
      <Header route={route} navigation={navigation} title={headerTitle} />

      <Button onPress={() => openReviewWritingPanel()}>
        <ReviewWritingButtonText>피드백 작성하기</ReviewWritingButtonText>
      </Button>
      <RBSheet
        ref={feedbackWritingPanelRef}
        height={constants.vh(93)}
        customStyles={{ container: { borderRadius: constants.vw(3) } }}
      >
        <ReviewWritingPanel>
          <TopMenusHolder>
            <Button onPress={closeReviewWritingPanel}>
              <ButtonText>취소</ButtonText>
            </Button>
            <PanelTitle>피드백 작성하기</PanelTitle>
            <Button onPress={requestPostingFeedback}>
              <ButtonText>보내기</ButtonText>
            </Button>
          </TopMenusHolder>
          <TextInput
            mode="none"
            value={writingReviewContent}
            selectionColor={Theme.fontBlue}
            outlineColor={Theme.fontBlue}
            multiline={true}
            onChangeText={(text) => setWritingReviewContent(text)}
            style={{
              width: "100%",
              height: constants.vh(5),
              backgroundColor: Theme.backgroundWhite,
              alignItems: "flex-start",
            }}
            right={<TextInput.Affix tex={"/100"} />}
          />
          {/*<PicturesView>*/}
          {/*    <UploadPictureButton onPress={pickImage}>*/}
          {/*        <UploadPictureIcon*/}
          {/*            source={RESTAURANT_ICON_IMAGE}*/}
          {/*            style={{ tintColor: Theme.fontBlack }}*/}
          {/*        />*/}
          {/*    </UploadPictureButton>*/}
          {/*    <UploadedPictureHolder>*/}
          {/*        <UploadedPicture source={{ uri: firstImage }} />*/}
          {/*    </UploadedPictureHolder>*/}
          {/*    <UploadedPictureHolder>*/}
          {/*        <UploadedPicture source={{ uri: secondImage }} />*/}
          {/*    </UploadedPictureHolder>*/}
          {/*</PicturesView>*/}
        </ReviewWritingPanel>
      </RBSheet>
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

const ReviewWritingButtonText = styled.Text`
  margin-left: ${constants.vw(3)}px;
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlue};
`;

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.fontBlue};
`;

const PanelTitle = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4.5)}px;
`;

const TopMenusHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7%;
`;

const ReviewWritingPanel = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  align-items: center;
`;

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
