import React from "react";
import styled from "styled-components";
import AntDesign from "react-native-vector-icons/AntDesign";
import Theme from "../style/Theme";

const CustomCard = ({
  flex,
  title,
  moreButtonTitle,
  onMoreClick,
  children,
}) => {
  return (
    <Holder flex={flex}>
      <TitleWrapper>
        <Title>{title}</Title>
        <MoreButton>
          <MoreButtonText onPress={onMoreClick}>
            {moreButtonTitle}
          </MoreButtonText>
          <AntDesign name="right" color={Theme.hlColor} />
        </MoreButton>
      </TitleWrapper>
      {children}
    </Holder>
  );
};

const MoreButtonText = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.hlColor};
  margin-right: 5px;
`;

const MoreButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 23px;
  font-weight: 700;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  padding-bottom: 9px;
  align-items: center;
`;

const Holder = styled.View`
  flex: ${(props) => props.flex};
  background-color: white;
  margin-top: 10px;
`;

export default CustomCard;
