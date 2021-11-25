import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import {TouchableOpacity} from "react-native";
import SmallBoardPreviews from "./SmallBoardPreviews";
import NotPreparedAnnouncement from "../NotPreparedAnnouncement";

const SmallBoardPart = ({title, preview, navigate}) => {
    return (
        <HomePart>
            <MoreButton>
                <TouchableOpacity onPress={navigate}>
                    <MoreButtonText>더보기 +</MoreButtonText>
                </TouchableOpacity>
            </MoreButton>
            <Header>
                <Title>{title}</Title>
            </Header>
            <Content>
                {preview && <SmallBoardPreviews preview={preview} navigate={navigate}/>}
            </Content>
            {!navigate && <NotPreparedAnnouncement/>}
        </HomePart>
    );
};

const HomePart = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${constants.vh(2)}px ${constants.vw(4)}px;

  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(2)}px;
`;

const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5%;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont};
  font-size: ${constants.vw(5)}px;;
  margin-bottom: ${constants.vh(0.5)}px;
`;

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  top: ${constants.vh(2)}px;
  right: ${constants.vw(4)}px;
`

const MoreButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.hlOrange};
`;

const Content = styled.View`
  width: ${constants.vw(90)}px;
  height: ${constants.vh(2.5)}px;
  justify-content: center;
  align-items: center;
  border: 0.5px;
  border-radius: ${constants.vw(1)}px;
`;


export default SmallBoardPart;
