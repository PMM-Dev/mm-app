import React from "react";
import styled from "styled-components";
import {FULLHEART, RESTAURANT_IMAGE, FULLSTAR, IMG_ICON, SETTING_GUEST_PORTRAIT} from "../../../image";
import constants from "../../../constants";
import {getPostById, getPostComment} from "../../Api/AppPostApi";
import ResponseStatusEnum from "../../../ResponseStatusEnum";

const MemberCard = ({data, navigation}) => {

    return (
        <Holder>
            <Portrait>
                <PortraitImage
                    source={
                        (data.picture === undefined || data.picture === "")
                            ? SETTING_GUEST_PORTRAIT
                            : {
                                uri: data.picture,
                            }
                    }
                    resizeMode={"cover"}
                />
            </Portrait>
            <Information>
                <NameTitle>{data.name}</NameTitle>
                <EmailTitle>{data.email}</EmailTitle>
            </Information>
        </Holder>
    );
};


const Holder = styled.View`
  width: 100%;
  height: ${constants.vh(10)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Portrait = styled.View`
  width: 14%;
  aspect-ratio: 1;
  border-radius: 1000px;
`;

const PortraitImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;

const Information = styled.View`
  justify-content: center;
  margin-left: 6.5%;
`;

const NameTitle = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vw(4.7)}px;
`;

const EmailTitle = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlackGray};
  font-size: ${constants.vw(3.2)}px;
`;

export default MemberCard;
