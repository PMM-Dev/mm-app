import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { MAP_POSITION_ICON } from "../image";
import { ActivityIndicator } from "react-native-paper";
import constants from "../constants";
import * as Location from "expo-location";
import MapHeader from "../components/Map/MapHeader";
import ExplanationView from "../components/Map/MapInfoSquare";
import Theme from "../style/Theme";
import { getRestaurants } from "../components/Api/AppRestaurantApi";
import MapView from "react-native-map-clustering";

const Map = ({ route, navigation }) => {
  const mapRef = React.createRef();
  const [restaurants, setRestaurants] = useState();
  const [marker, setMarker] = useState([]);
  const [infoCard, setInfoCard] = useState([]);
  const [location, setLocation] = useState({
    coords: {
      latitude: 35.176906553539645,
      longitude: 126.90583484216211,
    },
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const [isClusterPressed, setisClusterPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const [bookMarkPressed, setBookMarkPressed] = useState(false);
  const [whichBookmark, setWhichBookmark] = useState(-1);
  const [clusteredMarkers, setClusteredMarkers] = useState([]);

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
    setMarker(markerArray);
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
                showsMyLocationButton={false}
                ref={mapRef}
                onPress={() => {
                  if (bookMarkPressed === true || isClusterPressed === true) {
                    setBookMarkPressed(false);
                    setWhichBookmark(-1);
                    setisClusterPressed(false);
                  }
                }}
                preserveClusterPressBehavior={true}
                maxZoom={16}
                maxZoomLevel={19}
                radius={35}
                onClusterPress={(cluster, markers) => {
                  setisClusterPressed(false);
                  if (markers.length <= 5) {
                    setisClusterPressed(true);
                    setClusteredMarkers(markers);
                    setBookMarkPressed(false);
                  }
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
                      setisClusterPressed(false);
                    }}
                  >
                    <Callout tooltip={true}></Callout>
                  </Marker>
                ))}
              </MapView>
              <MapHeader routeName={route.name} navigation={navigation} />
              {bookMarkPressed || isClusterPressed ? (
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
                  <Img source={MAP_POSITION_ICON} />
                </PosButton>
              )}
              {isClusterPressed ? (
                <ClusterList num={clusteredMarkers.length}>
                  {clusteredMarkers.map((data, index) => (
                    <ClusterCard
                      key={index}
                      onPress={() => {
                        setBookMarkPressed(true);
                        setWhichBookmark(data.properties.index);
                        setisClusterPressed(false);
                      }}
                    >
                      <ClusterCardText>
                        {restaurants[data.properties.index].name}
                      </ClusterCardText>
                    </ClusterCard>
                  ))}
                </ClusterList>
              ) : (
                <NotYet />
              )}
            </Container>
            {bookMarkPressed ? (
              <ExplanationView data={restaurants[whichBookmark]} />
            ) : (
              <NotYet />
            )}
          </Wrapper>
        </Scroll>
      )}
    </Page>
  );
};

const ClusterCardText = styled.Text`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: ${constants.vh(4)}px;
  ${(props) => props.theme.NanumSquareRFont}
`;

const ClusterCard = styled.TouchableOpacity`
  width: 100%;
  height: ${constants.vh(4)}px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${(props) => props.theme.fontBlack};
  justify-content: center;
  align-items: center;
`;

const ClusterList = styled.View`
  width: 100%;
  height: ${(props) => constants.vh(4) * props.num}px;
  background-color: white;
  bottom: 10%;
  position: absolute;
`;

const Page = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const NotYet = styled.View``;

const Wrapper = styled.View`
  height: ${constants.pureheight}px;
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
