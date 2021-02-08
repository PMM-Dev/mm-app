import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";
import Theme from "../style/Theme";

const NavIcon = ({
  focused = true,
  name,
  color = Theme.hlColor,
  size = 23,
  type,
}) => {
  switch (type) {
    case "AntDesign":
      return (
        <AntDesign
          name={name}
          color={focused ? color : Theme.grayColor}
          size={size}
        />
      );
    case "Feather":
      return (
        <Feather
          name={name}
          color={focused ? color : Theme.grayColor}
          size={size}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={name}
          color={focused ? color : Theme.grayColor}
          size={size}
        />
      );
  }
};

NavIcon.protoTypes = {
  focused: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default NavIcon;
