import React, {useState, useEffect} from "react";
import styled from "styled-components";
import constants from "../../constants";
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";
import RestaurantTitle from "../../components/Home/Restaurant/RestaurantTitle";
import ResAboutInfo from "../../components/Home/Restaurant/AboutInfo";
import Review from "../../components/Home/Restaurant/Review";
import * as Location from "expo-location";
import {useProfile} from "../../components/AuthContext";
import {korLocationAPI} from "../../components/Api/GoogleAppApi";
import {
    getRestaurantComments,
    postRestaurantComment
} from "../../components/Api/AppApi";
import Header from "../../components/Header/Header";

const Restaurant = ({route, navigation}) => {
    const data = route.params.param;
    const resPicture = route.params.picture;
    const [marker, setMarker] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const mapRef = React.createRef();
    const [korLocation, setKorLocation] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const [review, setReview] = useState("");
    const {email, name, picture} = useProfile();
    const preLoad = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();
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
        async function initLocation() {
            const gotKorLocation = await korLocationAPI(data);
            setKorLocation(gotKorLocation);
        }

        async function initComment() {
            const gotRestaurantComment = await getRestaurantComments(data.id);
            setCommentData(gotRestaurantComment);
        }

        initLocation();
        initComment();
        preLoad();
    }, []);

    if (errorMsg) {
        console.log(errorMsg);
    }

    return (
        <Screen>
            <Header route={route} navigation={navigation}/>
            <Scroll contentContainerStyle={{flex: 1}} alwaysBounceVertical={false}>
                <RestaurantTitle
                    data={data}
                    picture={resPicture}
                />
                <ResAboutInfo data={data} korLocation={korLocation}/>
                <DownMap>
                    <LocationTitle>
                        <LocationTitleText>LOCATION</LocationTitleText>
                    </LocationTitle>
                    <LocationMap>
                        <View>
                            <Scroll contentContainerStyle={{flex: 1}}>
                                <Container>
                                    <MapView
                                        style={{flex: 1}}
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
                <ReviewView>
                    <Review data={commentData} reviewCount={data.reviewCount}/>
                    <ReviewWrite>
                        <TmpTextInput
                            value={review}
                            onChangeText={(text) => setReview(text)}
                        />
                        <TmpButtonPos>
                            <TmpButton
                                onPress={() => {
                                    let response = postRestaurantComment(
                                        review,
                                        email,
                                        data.id
                                    );
                                    setCommentData((prev) => [
                                        ...prev,
                                        {
                                            authorEmail: email,
                                            description: review,
                                            grade: 3,
                                            id: response.data,
                                            likeCount: 0,
                                        },
                                    ]);
                                    setReview("");
                                }}
                            />
                        </TmpButtonPos>
                    </ReviewWrite>
                </ReviewView>
            </Scroll>
        </Screen>
    );
};

export default Restaurant;

const Screen = styled.View`
  width: 100%;
  height: ${constants.pureheight};
  background-color: ${(props) => props.theme.backgroundGray};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

const TmpButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

const ReviewWrite = styled.View`
  width: 90%;
  height: 15%;
  border: 1px black;
`;

const TmpTextInput = styled.TextInput``;

const TmpButtonPos = styled.View`
  position: absolute;
  width: 10%;
  height: 90%;
  top: 5%;
  right: 3%;
  border: 1px solid;
  background-color: red;
`;

const ReviewView = styled.View`
  width: 100%;
  height: 36%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const View = styled.View`
  background-color: white;
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const LocationTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareFont}
  text-align: center;
  font-size: ${constants.vw(4.6)}px;
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
