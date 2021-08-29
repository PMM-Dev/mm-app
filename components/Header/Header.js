import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import HomeHeaderMenu from "./HomeHeaderMenu";
import RestaurantListHeaderMenu from "./RestaurantListHeaderMenu";
import MapHeaderMenu from "./MapHeaderMenu";
import RestaurantHeaderMenu from "./RestaurantHeaderMenu";

const Header = ({ route, navigation, title }) => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    const routeName = route.name;

    if (routeName === "Home") {
      setMenu(<HomeHeaderMenu navigation={navigation} routeName={routeName} />);
    } else if (routeName === "RestaurantList") {
      setMenu(
        <RestaurantListHeaderMenu
          navigation={navigation}
          routeName={routeName}
        />
      );
    } else if (routeName === "Map") {
      setMenu(<MapHeaderMenu navigation={navigation} />);
    } else if (routeName === "Restaurant") {
      setMenu(<RestaurantHeaderMenu navigation={navigation} />);
    }

    if (route === "Restaurant") {
      setTitle()
    }
  }, []);

  return (
    <Bar>
      <TitleHolder>
        <Title>{title}</Title>
      </TitleHolder>
      {menu && menu}
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
  width: 100%;
  height: ${constants.vh(5.5) + constants.statusBarHeight}px;
  padding-bottom: ${constants.vh(1.5)}px;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  font-size: ${constants.vh(2)}px;
`;

export default Header;
