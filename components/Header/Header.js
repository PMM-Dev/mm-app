import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import HomeHeaderMenu from "./HomeHeaderMenu";
import RestaurantListHeaderMenu from "./RestaurantListHeaderMenu";
import MapHeaderMenu from "./MapHeaderMenu";
import RestaurantHeaderMenu from "./RestaurantHeaderMenu";
import SettingLikeRestaurantHeaderMenu from "./SettingLikeRestaurantHeaderMenu";
import SettingMyCommentHeaderMenu from "./SettingMyCommentHeaderMenu";
import FeedbackHeaderMenu from "./FeedbackHeaderMenu";
import PostListHeaderMenu from "./PostListHeaderMenu";
import PostHeaderMenu from "./PostHeaderMenu";

const Header = ({
  route: { name: routeName },
  navigation,
  title,
  isTitleShown,
  restaurantId,
  onPressRightButton,
  isLikeButtonPressed,
  setLikeNum,
}) => {
  const [menuComponent, setMenuComponent] = useState();

  const getMenuComponent = () => {
    if (routeName === "Home") {
      setMenuComponent(
        <HomeHeaderMenu navigation={navigation} routeName={routeName} />
      );
    } else if (routeName === "RestaurantList") {
      setMenuComponent(
        <RestaurantListHeaderMenu
          navigation={navigation}
          routeName={routeName}
        />
      );
    } else if (routeName === "Map") {
      setMenuComponent(<MapHeaderMenu navigation={navigation} />);
    } else if (routeName === "Restaurant") {
      setMenuComponent(
        <RestaurantHeaderMenu
          navigation={navigation}
          restaurantId={restaurantId}
          isLikeButtonPressed={isLikeButtonPressed}
          setLikeNum={setLikeNum}
        />
      );
    } else if (routeName === "LikeHistory") {
      setMenuComponent(
        <SettingLikeRestaurantHeaderMenu navigation={navigation} />
      );
    } else if (routeName === "ReviewHistory") {
      setMenuComponent(<SettingMyCommentHeaderMenu navigation={navigation} />);
    } else if (routeName === "FeedbackList") {
      setMenuComponent(<FeedbackHeaderMenu navigation={navigation} />);
    } else if (routeName === "PostList") {
      setMenuComponent(<PostListHeaderMenu navigation={navigation} />);
    }else if (routeName === "Post") {
      setMenuComponent(<PostHeaderMenu navigation={navigation} />);
    }
  };

  useEffect(() => {
    getMenuComponent();
  }, []);

  return (
    <Bar>
      <TitleHolder>
        <Title show={isTitleShown !== undefined ? isTitleShown : true}>
          {title}
        </Title>
      </TitleHolder>
      {menuComponent && menuComponent}
    </Bar>
  );
};

const Bar = styled.View`
  width: 100%;
  height: ${constants.vh(6.3) + constants.statusBarHeight}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.backgroundWhite};
  padding: 0px ${constants.vw(2)}px;
  padding-bottom: ${constants.vh(0.5)}px;
`;

const TitleHolder = styled.View`
  width: ${constants.vw(100)}px;
  height: ${constants.vh(5.5) + constants.statusBarHeight}px;
  padding-bottom: ${constants.vh(1.5)}px;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vh(2)}px;
  color: ${(props) => props.theme.fontBlack};
  opacity: ${(props) => (props.show === true ? 1 : 0)};
`;

export default Header;
