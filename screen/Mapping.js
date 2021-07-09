import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  CalloutSubview,
} from "react-native-maps";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import constants from "../constants";

import * as Location from "expo-location";
import SearchbarMapPart from "../components/Map/SearchbarMapPart";
import ExplanationUpView from "../components/Map/ExplanationUpView";
import ExplanationDownView from "../components/Map/ExplanationDownView";

const ht = Math.floor(constants.height) - 120;

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

const Mapping = () => {
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
  const [bookMarkPressed, setbookMarkPressed] = useState(false);
  const [whichBookmark, setwhichBookmark] = useState(-1);
  const mapRef = React.createRef();
  const preLoad = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let curlocation = await Location.getCurrentPositionAsync({});
    setLocation(curlocation);

    setIsLoading(false);
  };

  useEffect(() => {
    preLoad();
  }, []);

  if (errorMsg) {
  }
  return (
    <>
      {isLoading ? (
        <View></View>
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
                    setbookMarkPressed(false);
                    setwhichBookmark(-1);
                  }}
                >
                  {marker.map((makrer, index) => (
                    <Marker
                      key={index}
                      coordinate={makrer.latlng}
                      title={marker.title}
                      description={marker.description}
                      onPress={() => {
                        setbookMarkPressed(true);
                        setwhichBookmark(index);
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
                    style={{
                      position: "absolute", //use absolute position to show button on top of the map
                      bottom: "5%", //for center align
                      right: "10%",
                      alignSelf: "flex-end", //for align to right
                    }}
                  >
                    <TouchableOpacity
                      mode="text"
                      color="#ffffff"
                      onPress={() => {
                        mapRef.current.animateToRegion({
                          latitude: location.coords.latitude,
                          longitude: location.coords.longitude,
                          latitudeDelta: 0.009,
                          longitudeDelta: 0.009,
                        });
                      }}
                      style={{ borderColor: "black" }}
                    >
                      <Image source={require("../assets/search_1.png")} />
                    </TouchableOpacity>
                  </PosButton>
                )}
              </Container>
              {bookMarkPressed ? (
                <Explanation>
                  <ExplanationUpView data={dummy[whichBookmark]} />
                  <ExplanationDownView data={dummy[whichBookmark]} />
                </Explanation>
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
  height: ${ht};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const Explanation = styled.View`
  width: 100%;
  height: 30%;
  border: 1px solid black;
  bottom: 0%;
  position: absolute;
  background-color: white;
  border-radius: 10px;
`;

const PosButton = styled.View`
  border-radius: 70px;
`;

const MarkerCircle = styled.View`
  width: 15px;
  height: 15px;
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

export default Mapping;
