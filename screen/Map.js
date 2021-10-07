import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { MAP_POSITION_ICON } from "../image";
import { ActivityIndicator } from "react-native-paper";
import constants from "../constants";
import * as Location from "expo-location";
import MapHeader from "../components/Map/MapHeader";
import MapInfoSquare from "../components/Map/MapInfoSquare";
import Theme from "../style/Theme";
import { getRestaurants } from "../components/Api/AppRestaurantApi";
import MapView from "react-native-map-clustering";
import MapClusterListSquare from "../components/Map/MapClusterListSquare";

const Map = ({ route, navigation }) => {
  const mapRef = React.createRef();
  const [restaurants, setRestaurants] = useState();
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState({
    coords: {
      latitude: 35.176906553539645,
      longitude: 126.90583484216211,
    },
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const [isMarkerPressed, setIsMarkerPressed] = useState(false);
  const [pressedMarker, setPressedMarker] = useState(-1);
  const [isClusterPressed, setIsClusterPressed] = useState(false);
  const [pressedCluster, setPressedCluster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const makeMarker = () => {
    let markerArray = [];
    restaurants.map((data) => {
      markerArray.push({
        title: data.name,
        description: data.description,
        latlng: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
      });
    });
    setMarkers(markerArray);
  };

  useEffect(() => {
    async function initRestaurants() {
      const loadedRestaurants = await getRestaurants();
      setRestaurants(loadedRestaurants);
    }

    initRestaurants();
  }, []);
  useEffect(() => {
    if (restaurants) makeMarker();
  }, [restaurants]);

  useEffect(() => {
    async function getPermission() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return false;
      }

      return true;
    }

    async function getLastLocation() {
      const lastLocation = await Location.getLastKnownPositionAsync();
      setLocation(lastLocation);
    }

    async function getCurrentLocation() {
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation(currentLocation);
    }

    const permission = getPermission();
    if (!permission) {
      return;
    }
    getLastLocation();
    if (errorMsg) {
      console.log(errorMsg);
    }
    setIsLoading(false);

    getCurrentLocation();
  }, []);

  return (
    <Page>
      {isLoading ? (
        <ActivityIndicator color={Theme.fontBlack} size={"large"} />
      ) : (
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
              showsMyLocationButton={false}
              ref={mapRef}
              onPress={() => {
                if (isMarkerPressed === true || isClusterPressed === true) {
                  setIsMarkerPressed(false);
                  setPressedMarker(-1);
                  setIsClusterPressed(false);
                }
              }}
              preserveClusterPressBehavior={true}
              maxZoom={16}
              maxZoomLevel={19}
              radius={35}
              onClusterPress={(cluster, marker) => {
                setIsClusterPressed(true);
                setPressedCluster(marker);
                setIsMarkerPressed(false);
              }}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  onPress={() => {
                    setIsMarkerPressed(true);
                    setPressedMarker(index);
                    setIsClusterPressed(false);
                  }}
                >
                  <Callout tooltip={true}></Callout>
                </Marker>
              ))}
            </MapView>
            <MapHeader routeName={route.name} navigation={navigation} />
            {(isMarkerPressed || isClusterPressed) && (
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
                <Img source={MAP_POSITION_ICON} />
              </PosButton>
            )}
            {isClusterPressed && (
              <MapClusterListSquare
                clusterList={pressedCluster}
                setIsClusterPressed={setIsClusterPressed}
                setIsMarkerPressed={setIsMarkerPressed}
                setPressedMarker={setPressedMarker}
              />
            )}
          </Container>
          {isMarkerPressed && (
            <MapInfoSquare data={restaurants[pressedMarker]} />
          )}
        </Wrapper>
      )}
    </Page>
  );
};

const Page = styled.View`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.View`
  top: 0px;
  width: 100%;
  height: ${constants.vh(86)}px;
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
