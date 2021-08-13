import React, {useEffect, useState} from "react";
import styled from "styled-components";
import constants from "../../constants";
import HomeHeaderMenu from "./HomeHeaderMenu";
import RestaurantListHeaderMenu from "./RestaurantListHeaderMenu";

const Header = ({route, navigation, genre}) => {
    const [menu, setMenu] = useState()

    useEffect(() => {
        const routeName = route.name;

        if (routeName === "Home") {
            setMenu(<HomeHeaderMenu navigation={navigation} routeName={routeName}/>);
        } else if (routeName === "RestaurantList") {
            setMenu(<RestaurantListHeaderMenu navigation={navigation}/>);
        }
    }, [])

    return (
        <Bar>
            <TitleHolder>
                <Title>{genre}</Title>
            </TitleHolder>
            {menu && menu}
        </Bar>
    );
};

const Bar = styled.View`
  width: 100%;
  height: ${constants.vh(5.5) + constants.statusBarHeight}px;
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
  padding-bottom: ${constants.vh(1)}px;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumGothicFont};
  font-size: ${constants.vh(2)}px;
`

export default Header;
