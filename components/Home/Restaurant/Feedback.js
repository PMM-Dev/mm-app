import React, {useState} from "react";
import {FULLHEART, SETTING_GUEST_PORTRAIT} from "../../../image";
import styled from "styled-components";
import constants from "../../../constants";
import LikeButton from "../LikeButton";
import {appendLikeFeedback, subtractLikeFeedback} from "../../Api/AppMemberApi";

const Feedback = ({feedback, mine, requestDeleteFeedback}) => {

    const [likeCount, setLikeCount] = useState(feedback?.likeCount);

    return (
        <Holder>
            <InfoView>
                <Portrait>
                    <PortraitImage source={
                        feedback?.authorPicture === undefined
                            ? SETTING_GUEST_PORTRAIT
                            : {
                                uri: feedback?.authorPicture,
                            }
                    }/>
                </Portrait>
                <NameAndGradeView>
                    <TextInfoView>
                        <AuthorNameText>{feedback?.authorName}</AuthorNameText>
                        <DateText>{feedback?.createdDate}</DateText>
                    </TextInfoView>
                    <GradeList>
                        <LikeView>
                            <GradeIcon source={FULLHEART}/>
                            <GradeText>{likeCount}</GradeText>
                        </LikeView>
                    </GradeList>
                </NameAndGradeView>
                <LikeButtonHolder>
                    <LikeButton
                        targetId={feedback?.id}
                        isLikeButtonPressed={feedback?.didLike}
                        setLikeNum={setLikeCount}
                        appendLikeRequest={appendLikeFeedback}
                        subtractLikeRequest={subtractLikeFeedback}
                    />
                </LikeButtonHolder>
            </InfoView>
            <ContentText>{feedback?.content}</ContentText>
            {mine && <Button onPress={() => requestDeleteFeedback(feedback?.id)}>
                <ButtonText>삭제하기</ButtonText>
            </Button>}
        </Holder>
    );
};

const DateText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(2.5)}px;
`

const TextInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 2%;
  margin-bottom: 1.8%;
`;

const Holder = styled.View`
  width: 100%;
  margin-bottom: ${constants.vh(7)}px;
`;

const LikeButtonHolder = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;

`

const Portrait = styled.View`
  height: ${constants.vw(11.3)}px;
  width: ${constants.vw(11.3)}px;
  border-radius: 1000px;
`;

const PortraitImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;

const InfoView = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${constants.vw(3)}px;
`;

const NameAndGradeView = styled.View`
  justify-content: center;
  margin-left: ${constants.vw(3.5)}px;
`;

const AuthorNameText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(3.5)}px;
  margin-right: 4%;
`;

const ContentText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vw(4)}px;
  margin-left: ${constants.vw(1.5)}px;;
`;

const GradeList = styled.View`
  flex-direction: row;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const LikeView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GradeIcon = styled.Image`
  width: ${constants.vh(1.6)}px;
  height: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(0.6)}px;
  padding-bottom: ${(props) => props.bottom ? props.bottom : 0}%;
`;

const GradeText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.6)}px;
`;

const Button = styled.TouchableOpacity`
  margin-top: ${constants.vh(1)}px;
`;

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(4)}px;
  color: ${(props) => props.theme.hlRed};
`;


export default Feedback;
