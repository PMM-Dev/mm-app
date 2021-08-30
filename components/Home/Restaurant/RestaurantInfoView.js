import React, {useEffect, useState} from "react";
import styled from "styled-components";
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";

import {korLocationAPI} from "../../Api/GoogleAppApi"
import StarMaker from "../../Map/StarMaker";
import {
    REVIEW_ICON,
    FULLHEART,
    EMPTYHEART,
    RESTAURANT_ICON_TYPE,
    RESTAURANT_ICON_PRICE,
    RESTAURANT_ICON_LOCATION
} from "../../../image";
import KoreanEnum from "../../../KoreanEnum";
import {Converter} from "../../Converter";
import constants from "../../../constants";
import * as Location from "expo-location";
import Theme from "../../../style/Theme";

const RestaurantInfoView = ({data, picture}) => {
    const mapRef = React.createRef();

    const [marker, setMarker] = useState({});
    const [koreanAddress, setKoreanAddress] = useState([]);

    useEffect(() => {
        async function initLocation() {
            const {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            setMarker({
                title: data.title,
                description: data.description,
                latlng: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                },
            });
        }

        async function initKoreanAddress() {
            const RestaurantKoreanAddress = await korLocationAPI(data);
            setKoreanAddress(RestaurantKoreanAddress);
        }

        initLocation()
        initKoreanAddress();

    }, []);

    return (
        <InfoView>
                    <TitleView>
                        <Title>{data.name}</Title>
                        <StarMaker grade={data.averageGrade} size={30} starRatio={90}/>
                    </TitleView>
                    <NumberInfosView>
                        <SmallIcon source={REVIEW_ICON} style={{tintColor: Theme.fontBlue}}/>
                        <IconText color={Theme.fontBlue}>{data.reviewCount}</IconText>
                        <SmallIcon source={FULLHEART}/>
                        <IconText color={Theme.hlRed}>{data.likeCount}</IconText>
                    </NumberInfosView>
                    <TagView>
                        {data.themes.map((list, index) => (
                            <ExplanationTagText key={index}>#{list.theme}</ExplanationTagText>
                        ))}
                    </TagView>
                    <TextInfoView>
                        <BigIcon source={RESTAURANT_ICON_TYPE} style={{tintColor: Theme.fontBlackGray}}/>
                        <InfoText>{Converter(data.type)}</InfoText>
                    </TextInfoView>
                    <TextInfoView>
                        <BigIcon source={RESTAURANT_ICON_PRICE} style={{tintColor: Theme.fontBlackGray}}/>
                        <InfoText>{Converter(data.price)}</InfoText>
                    </TextInfoView>
                    <TextInfoView>
                        <BigIcon source={RESTAURANT_ICON_LOCATION} style={{tintColor: Theme.fontBlackGray}}/>
                        <InfoText>{Converter(data.location)}</InfoText>
                    </TextInfoView>
                    <DescriptionText isEmpty={data.description === ""}>{data.description}</DescriptionText>
                    <LocationView>
                        <InfoTitleText>위치</InfoTitleText>
                        <LocationText>{koreanAddress}</LocationText>
                        <MapViewHolderView>
                            <MapViewHolder>
                                <MapScroll contentContainerStyle={{flex: 1}}>
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
                                </MapScroll>
                            </MapViewHolder>
                        </MapViewHolderView>
                    </LocationView>
                    {/*<HeartButtonPos>*/}
                    {/*    {data.bookmarked ? (*/}
                    {/*        <HeartImg source={FULLHEART}/>*/}
                    {/*    ) : (*/}
                    {/*        <HeartImg source={EMPTYHEART}/>*/}
                    {/*    )}*/}
                    {/*</HeartButtonPos>*/}
        </InfoView>
    );
}

const InfoView = styled.View`
  width: 100%;
  padding: 0px ${constants.vw(8)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.fontGray};
  margin-bottom: ${constants.vh(4)}px;
`;

const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(7.2)}px;
`;

const NumberInfosView = styled.View`
  flex-direction: row;
  margin-top: ${constants.vh(0.5)}px;
  margin-bottom: ${constants.vh(4)}px;
`

const SmallIcon = styled.Image`
  width: ${constants.vw(5)}px;
  height: ${constants.vw(5)}px;
  margin-right: ${constants.vw(2)}px;
`

const IconText = styled.Text`
  color: ${(props) => props.color ? props.color : props.theme.fontBlackGray};
  font-size: ${constants.vh(1.5)}px;
  margin-right: ${constants.vw(3.5)}px;
`

const TextInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${constants.vh(1)}px;
`

const InfoText = styled.Text`
  color: ${(props) => props.theme.fontBlackGray};
  font-size: ${constants.vh(1.9)}px;
  margin-top: ${constants.vh(0.2)}px;
`

const ExplanationTagText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.hlRed};
  font-size: ${constants.vw(2.2)}px;
`;

const TagView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;

`;

const BigIcon = styled.Image`
  width: ${constants.vw(5)}px;
  height: ${constants.vw(5)}px;
  margin-right: ${constants.vw(4)}px;
`

const DescriptionText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.5)}px;
  color: ${(props) => props.theme.fontBlackGray};
  margin-top: ${(props) => props.isEmpty ? 0 : constants.vh(2)}px;
  margin-bottom: ${(props) => props.isEmpty ? constants.vh(2) : constants.vh(5)}px;
`;

const HeartImg = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: cover;
`;

const HeartButtonPos = styled.TouchableOpacity`
  position: absolute;
  width: 13%;
  height: 30%;
  top: 4%;
  right: 4%;
`;

const InfoTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(5.7)}px;
  margin-bottom: ${constants.vh(1)}px;
`;

const LocationView = styled.View`
  width: 100%;
  height: ${constants.vh(25)}px;
  margin-bottom: ${constants.vh(7)}px;
`;

const LocationText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.5)}px;
`;

const MapViewHolderView = styled.View`
  height: 85%;
  width: 100%;
  align-items: center;
  margin: ${constants.vh(2)}px 0px;
`;

const MapViewHolder = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const MapScroll = styled.ScrollView`
  width: 100%;
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
]

export default RestaurantInfoView;
