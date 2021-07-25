import React, { useState, useEffect } from "react";
import styled from "styled-components";
import constants from "../constants";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import ResExplanation from "../components/Home/Res/ResExplanation";
import * as Location from "expo-location";
import axios from "axios";
import korLocationAPI from "../components/AppApi";

const Res = ({ route }) => {
  const data = route.params.param;
  const picture = route.params.picture;
  const [marker, setMarker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = React.createRef();
  const [korLocation, setkorLocation] = useState([]);

  const preLoad = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    setMarker({
      title: "title",
      description: "des",
      latlng: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // async function init() {
    //   let gotkorLocation = await korLocationAPI(data);
    //   setkorLocation(gotkorLocation);
    // }
    // init();
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.latitude},${data.longitude}&key=AIzaSyAct8xhJo8qFy1biCWJ1gscUATnNnKxVQ0&language=ko`
      ) // 위도, 경도 google maps api로 보냄
      .then((res) => {
        setkorLocation(res.data.results[0].formatted_address);
      })
      .catch((error) => {
        console.log("axios 구글 maps api 에러", error);
      });
    preLoad();
  }, []);

  if (errorMsg) {
    console.log(errorMsg);
  }

  return (
    <Screen>
      <ExplanationView>
        <ResExplanation
          data={data}
          picture={picture}
          korLocation={korLocation}
        />
      </ExplanationView>
      {isLoading ? (
        <></>
      ) : (
        <DownMap>
          <LocationTitle>
            <LocationTitleText>LOCATION</LocationTitleText>
          </LocationTitle>
          <LocationMap>
            <View>
              <Scroll contentContainerStyle={{ flex: 1 }}>
                <Container>
                  <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                      latitude: data.latitude,
                      longitude: data.longitude,
                      latitudeDelta: 0.0008,
                      longitudeDelta: 0.0008,
                    }}
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapStyle}
                    zoomEnabled={true}
                    followUserLocation={true}
                    showsMyLocationButton={true}
                    ref={mapRef}
                  >
                    <Marker
                      coordinate={marker.latlng}
                      title={marker.title}
                      description={marker.description}
                    >
                      <Callout tooltip={true}></Callout>
                    </Marker>
                  </MapView>
                </Container>
              </Scroll>
            </View>
          </LocationMap>
        </DownMap>
      )}
    </Screen>
  );
};

export default Res;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const View = styled.View`
  background-color: white;
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const ExplanationView = styled.View`
  width: 100%;
  height: 77%;
`;

const LocationTitleText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: "NanumSquare";
`;

const LocationTitle = styled.View`
  height: 15%;
  width: 100%;
`;

const LocationMap = styled.View`
  height: 85%;
  width: 100%;
  align-items: center;
`;

const DownMap = styled.View`
  width: 100%;
  height: 23%;
  justify-content: center;
  align-items: center;
`;

const Screen = styled.View`
  width: 100%;
  height: ${constants.pureheight};
  background-color: ${(props) => props.theme.backgroundWhite};
  justify-content: center;
  align-items: center;
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
