import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { POSITION } from "../image";
import {ActivityIndicator} from "react-native-paper";
import constants from "../constants";

import * as Location from "expo-location";
import SearchbarMapPart from "../components/Map/SearchbarMapPart";
import ExplanationView from "../components/Map/Explanation";
import Theme from "../style/Theme";

const dummy = [
  {
    title: "용봉동 길성유부",
    address: "광주광역시 북구 용봉동 151-77번지 1층",
    number: "062-266-1202",
    rating: 4.5,
    bookmarked: true,
  },
  {
    title: "용봉동 rlsdfkljsaklv",
    address: "광주광역sdfasg77번지 1층",
    number: "062-266adgjnsghf-1202",
    rating: 5,
    bookmarked: false,
  },
];

const Map = () => {
  const [marker, setmarker] = useState([
    {
      title: "title",
      description: "des",
      latlng: {
        latitude: 35.176906553539645,
        longitude: 126.90583484216211,
      },
    },
    {
      title: "title",
      description: "de1s",
      latlng: {
        latitude: 35.17506512263509,
        longitude: 126.90547337534295,
      },
    },
  ]);
  const [location, setLocation] = useState({
    coords: {
      latitude: 35.176906553539645,
      longitude: 126.90583484216211,
    },
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [bookMarkPressed, setBookMarkPressed] = useState(false);
  const [whichBookmark, setWhichBookmark] = useState(-1);
  const mapRef = React.createRef();

  useEffect(() => {
    async function preLoad () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let curLocation = await Location.getCurrentPositionAsync({});
      setLocation(curLocation);

      setIsLoading(false);
    }

    preLoad();
    if (errorMsg) {
      console.log(errorMsg);
    }
  }, []);
  return (
    <>
      {isLoading ? (
          <ActivityIndicator color={Theme.fontBlack} size={"large"}/>
      ) : (
        <View>
          <Scroll contentContainerStyle={{ flex: 1 }}>
            <Wrapper>
              <Container>
                <MapView
                  style={{ flex: 1 }}
                  initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                  }}
                  showsUserLocation={true}
                  provider={PROVIDER_GOOGLE}
                  customMapStyle={mapStyle}
                  zoomEnabled={true}
                  followUserLocation={true}
                  showsMyLocationButton={true}
                  ref={mapRef}
                  onPress={() => {
                    setBookMarkPressed(false);
                    setWhichBookmark(-1);
                  }}
                >
                  {marker.map((makrer, index) => (
                    <Marker
                      key={index}
                      coordinate={makrer.latlng}
                      title={marker.title}
                      description={marker.description}
                      onPress={() => {
                        setBookMarkPressed(true);
                        setWhichBookmark(index);
                      }}
                    >
                      <Callout tooltip={true}></Callout>
                    </Marker>
                  ))}
                  {/* <Marker coordinate={location.coords}>
                <MarkerCircle />
              </Marker> */}
                </MapView>
                <SearchbarMapPart />
                {bookMarkPressed ? (
                  <NotYet />
                ) : (
                  <PosButton
                    mode="text"
                    onPress={() => {
                      mapRef.current.animateToRegion({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                      });
                    }}
                  >
                    <Img source={POSITION} />
                  </PosButton>
                )}
              </Container>
              {bookMarkPressed ? (
                <ExplanationView data={dummy[whichBookmark]} />
              ) : (
                <NotYet />
              )}
            </Wrapper>
          </Scroll>
        </View>
      )}
    </>
  );
};

const NotYet = styled.View``;

const Wrapper = styled.View`
  height: ${constants.pureheight};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const Img = styled.Image`
  width: 80%;
  height: 80%;
  resize-mode: contain;
`;

const PosButton = styled.TouchableOpacity`
  border-radius: 70px;
  position: absolute;
  bottom: 10%;
  right: 0%;
  align-self: flex-end;
  width: ${constants.vw(25)}px;
  height: ${constants.vw(25)}px;
  justify-content: center;
`;

const MarkerCircle = styled.View`
  width: ${constants.vw(3.8)}px;
  height: ${constants.vw(3.8)}px;
  border-radius: 70px;
  background-color: red;
`;

const View = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const mapStyle = [
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default Map;
