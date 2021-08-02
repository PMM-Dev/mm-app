import React, { useState, useEffect } from "react";
import styled from "styled-components";
import constants from "../constants";
<<<<<<< HEAD
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import ResExplanation from "../components/Home/Res/ResExplanation";
import ResAboutInfo from "../components/Home/Res/ResAboutInfo";
import * as Location from "expo-location";
import axios from "axios";
import korLocationAPI from "../components/AppApi";
import StarMaker from "../components/Map/StarMaker";

const dummy = [
  {
    picture: 28,
    name: "니니",
    rating: 3,
    date: "20200612",
    description:
      "ㅁ나러ㅏㅣㅇ너 ㅏㅣ처파ㅣ너아ㅣ ㅓㅏㅣㅊ터ㅠ퍄ㅐ넢asdfjsdklj lkjblk jsldkjf lksdfj kljxciov개잘먹음",
  },
  {
    picture: 28,
    name: "니니",
    rating: 1.5,
    date: "20200612",
    description: "개잘먹음2",
  },
  {
    picture: 28,
    name: "니니",
    rating: 3,
    date: "20200612",
    description: "개잘먹음",
  },
  {
    picture: 28,
    name: "니니",
    rating: 1.5,
    date: "20200612",
    description: "개잘먹음2",
  },
];

const Res = ({ route }) => {
  const data = route.params.param;
  const picture = route.params.picture;
  const [marker, setMarker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = React.createRef();
  const [korLocation, setkorLocation] = useState([]);
  const [InformationActive, setInformationActive] = useState(true);

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
          Infofunc={setInformationActive}
        />
      </ExplanationView>
      {InformationActive ? (
        isLoading ? (
          <></>
        ) : (
          <>
            <ResAboutInfo data={data} korLocation={korLocation} />
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
          </>
        )
      ) : (
        <ReviewView>
          <ReviewTitle>
            <ReviewTitleNum>
              <ReviewTitleNumText>최근리뷰 224개</ReviewTitleNumText>
            </ReviewTitleNum>
            <ReviewTitleFilter>
              <ReviewTitleFilterRecent>
                <ReviewTitleFilterText>최신순</ReviewTitleFilterText>
              </ReviewTitleFilterRecent>
              <ReviewTitleFilterStarHigh>
                <ReviewTitleFilterText>별점높은순</ReviewTitleFilterText>
              </ReviewTitleFilterStarHigh>
              <ReviewTitleFilterStarLow>
                <ReviewTitleFilterText last={true}>
                  별점낮은순
                </ReviewTitleFilterText>
              </ReviewTitleFilterStarLow>
            </ReviewTitleFilter>
          </ReviewTitle>
          <ReviewContentList>
            {dummy.map((data, index) => (
              <ReviewContent key={index}>
                <ReviewContentTop>
                  <ReviewContentTopImageView>
                    <ReviewContentTopImage source={data.picture} />
                  </ReviewContentTopImageView>
                  <ReviewContentTopNameStarView>
                    <ReviewContentTopNameView>
                      <ReviewContentTopNameText>
                        {data.name} {"  >  "}
                      </ReviewContentTopNameText>
                    </ReviewContentTopNameView>
                    <ReviewContentTopStarView>
                      <ReviewContentTopStarStarMakerView>
                        <StarMaker rate={data.rating}></StarMaker>
                      </ReviewContentTopStarStarMakerView>
                    </ReviewContentTopStarView>
                  </ReviewContentTopNameStarView>
                </ReviewContentTop>
                <ReviewContentBottom>
                  <ReviewContentBottomText numberOfLines={1}>
                    {data.description}
                  </ReviewContentBottomText>
                </ReviewContentBottom>
              </ReviewContent>
            ))}
          </ReviewContentList>
        </ReviewView>
      )}
    </Screen>
  );
=======
import {EMPTYHEART, FULLHEART} from "../image";
import StarMaker from "../components/Map/StarMaker";

const ht = Math.floor(constants.height) - 120;

const Res = ({route, navigation}) => {
    const data = route.params.param;
    const picture = route.params.picture;

    return (
        <Screen>
            <UpView>
                <UpImageView>
                    <UpImage source={picture}/>
                </UpImageView>
                <FilterView>
                    <FilterInfo>
                        <FilterText>정보[Infomation]</FilterText>
                    </FilterInfo>
                    <FilterReview>
                        <FilterText last={true}>리뷰[Review]</FilterText>
                    </FilterReview>
                </FilterView>
            </UpView>
            <DownView>
                <DownInfo>
                    <DownDetailInfo>
                        <DetailTitle>
                            <DetailTitleText>{data.name}</DetailTitleText>
                        </DetailTitle>
                        <DetailInfo>
                            <DetailTitleContact>
                                <DetailInfoText>음식 종류 : {data.type}</DetailInfoText>
                            </DetailTitleContact>
                            <DetailTitleAddress>
                                <DetailInfoText>가격대 : {data.price}</DetailInfoText>
                            </DetailTitleAddress>
                        </DetailInfo>
                        <DownRate>
                            <StarMaker rate={data.reviewCount}/>
                        </DownRate>
                    </DownDetailInfo>
                    <DownAbout>
                        <AboutTitle>
                            <AboutTitleText>ABOUT</AboutTitleText>
                        </AboutTitle>
                        <AboutAddress>
                            <AboutAddressText>주소 : {data.longitude}</AboutAddressText>
                        </AboutAddress>
                        <AboutDescription>
                            <AboutDescriptionText>
                                설명 : {data.description}
                            </AboutDescriptionText>
                        </AboutDescription>
                    </DownAbout>
                </DownInfo>
                <DownMap>
                    <LocationTitle>
                        <LocationTitleText>LOCATION</LocationTitleText>
                    </LocationTitle>
                    <LocationMap></LocationMap>
                </DownMap>
                <HeartButtonPos>
                    {data.bookmarked ? (
                        <HeartImg source={FULLHEART}/>
                    ) : (
                        <HeartImg source={EMPTYHEART}/>
                    )}
                </HeartButtonPos>
            </DownView>
        </Screen>
    );
>>>>>>> 83c5acaa79ead358b9fe42c8ad4ac5286b131ab6
};

export default Res;

const ReviewContentTopStarStarMakerView = styled.View`
  height: 60%;
  width: 50%;
`;

const ReviewContentTopNameStarView = styled.View`
  height: 100%;
  width: 82%;
  margin-left: 8px;
`;

const ReviewContentTopNameText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  font-size: 14px;
`;

const ReviewContentTopNameView = styled.View`
  height: 40%;
  width: 82%;
  justify-content: center;
`;

const ReviewContentTopStarView = styled.View`
  height: 50%;
  width: 82%;
`;

const ReviewContentTopImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ReviewContentTopImageView = styled.View`
  height: 80%;
  width: 18%;
`;

const ReviewContentTop = styled.View`
  height: 80%;
  width: 100%;
  flex-direction: row;
`;

const ReviewContentBottomText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  font-size: 12px;
`;

const ReviewContentBottom = styled.View`
  height: 20%;
  width: 100%;
  overflow: hidden;
`;

const ReviewContent = styled.View`
  height: 100px;
  width: 100%;
  align-items: center;
`;

const ReviewTitleFilterStarLow = styled.TouchableOpacity`
  width: 35%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitleFilterStarHigh = styled.TouchableOpacity`
  width: 35%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitleFilterRecent = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitleFilterText = styled.Text`
  font-family: "NanumSquare";
  color: ${(props) => props.theme.fontBlack};
  text-align: center;
  font-size: 11px;
  ${(props) => (props.last ? "" : "border-right-width: 1.5px;")};
  border-right-color: ${(props) => props.theme.fontBlack};
`;

const ReviewTitleNumText = styled.Text`
  font-family: "NanumSquare";
  font-size: 18px;
`;

const ReviewTitleFilter = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
`;

const ReviewTitleNum = styled.View`
  width: 50%;
  height: 100%;
  justify-content: center;
`;

const ReviewTitle = styled.View`
  width: 90%;
  height: 18%;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.borderGray2};
  flex-direction: row;
`;

const ReviewContentList = styled.ScrollView`
  width: 90%;
  height: 76%;
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
  height: 64%;
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
