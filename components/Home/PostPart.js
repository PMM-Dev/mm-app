import React from "react";
import styled from "styled-components";
import PostNoticeMini from "./PostNoticeMini";
import constants from "../../constants";
import NotPreparedAnnouncement from "../NotPreparedAnnouncement";

const Dummy = [
  {Title : "[전대 후문]김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
  {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
  {Title : "김해뒷고기 후기", ID : "asdf", visitNum: 30, recommendNum : 2, date : "10.26"},
];

const PostPart = () => {
  return (
    <HomePart>
      <Header>
          <Title>자유게시판</Title>
          <MoreButton>
            <MoreButtonText>더보기 +</MoreButtonText>
          </MoreButton>
      </Header>
      <Content>
          {Dummy.map((element, key) => (
            <Card key = {key}>
              <CardTitle>{element.Title}</CardTitle>
              <CardExplanation>
                <CardExplanationText>{element.ID} | 조회수 : {element.visitNum} | 추천 : {element.recommendNum}</CardExplanationText>
                <CardExplanationDate>{element.date}</CardExplanationDate>
              </CardExplanation>
            </Card>
          ))}
      </Content>
    </HomePart>
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

const Card = styled.View`
  height : 33%;
`

const HomePart = styled.View`
  width: 100%;
  height: ${constants.vh(25)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;

const Header = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4%;
`;

const Title = styled.Text`
${(props) => props.theme.NanumGothicBoldFont};
font-size: ${constants.vw(5)}px;;
`;

const MoreButton = styled.TouchableOpacity``;

const MoreButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};
`;

const Content = styled.View`
  width: 90%;
  height: 72%;
  border-radius: ${constants.vw(1)}px;
  padding-bottom: 2%;
`;

export default PostPart;
