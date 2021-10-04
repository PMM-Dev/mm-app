import React, {useState, useEffect} from "react";
import styled from "styled-components";
import StarMaker from "../StarMaker";
import {RESTAURANT_IMAGE, EMPTYHEART, FULLHEART} from "../../image";
import constants from "../../constants";
import {Converter} from "../Converter";

const MapClusterListSquare = ({clusterList, setIsClusterPressed, setIsMarkerPressed, setPressedMarker}) => {

    return (
        <Holder>
            <ElementScroll>
                {clusterList.map((clusterElement, index) => (
                    <ClusterCard
                        key={index}
                        onPress={() => {
                            setIsMarkerPressed(true);
                            setPressedMarker(clusterElement.properties.index);
                            setIsClusterPressed(false);
                        }}
                    >
                        <CardTitle>
                            {clusterElement.properties.title}
                        </CardTitle>
                    </ClusterCard>
                ))
                }
            </ElementScroll>
        </Holder>
    );
};

const Holder = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;

  width: 100%;
  height: 30%;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-radius: ${constants.vh(2)}px;
  padding: ${constants.vh(2.2)}px 0.2px;
`;

const ElementScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0px ${constants.vw(6)}px;
`

const ClusterCard = styled.TouchableOpacity`
  width: 100%;
  height: ${constants.vh(5)}px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.backgroundDarkerGray};
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
`;


export default MapClusterListSquare;
