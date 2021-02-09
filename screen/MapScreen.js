import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ActivityIndicator, Button, Colors } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
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
      description: "des",
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
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
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
        <View>
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.red800}
          />
        </View>
      ) : (
        <View>
          <Container>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009,
              }}
              provider={PROVIDER_GOOGLE}
              customMapStyle={mapStyle}
            >
              {marker.map((makrer, index) => (
                <Marker
                  key={index}
                  coordinate={makrer.latlng}
                  title={marker.title}
                  description={marker.description}
                />
              ))}
            </MapView>
          </Container>
        </View>
      )}
    </>
  );
};

const View = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 300px;
  height: 300px;
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

export default MapScreen;
