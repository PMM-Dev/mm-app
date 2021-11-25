import React, {useEffect, useState} from "react";
import styled from "styled-components";
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";

import {korLocationAPI} from "../../Api/GoogleAppApi";
import {
    FLAT_FULLSTAR,
    ICON_TYPE,
    ICON_PRICE,
    ICON_LOCATION,
    RESTAURANT_OPEN_MAP_ICON
} from "../../../image";
import {Converter} from "../../Converter";
import constants from "../../../constants";
import * as Location from "expo-location";
import Theme from "../../../style/Theme";
import * as Linking from 'expo-linking';

const RestaurantInfoView = ({data, reviewNum, likeNum}) => {
    const mapRef = React.createRef();

    const [marker, setMarker] = useState();
    const [koreanAddress, setKoreanAddress] = useState([]);

    useEffect(() => {
        async function initLocation() {
            const {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to access location was denied");
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

        initLocation();
        initKoreanAddress();
    }, []);

    return (
        <InfoView>
            <TitleView>
                <Title>{data.name}</Title>
            </TitleView>
            <NumberInfosView>
                <IconText color={Theme.fontBlackGray}>최근리뷰 {reviewNum}</IconText>
                <IconText color={Theme.fontBlackGray}>좋아요 {likeNum}</IconText>
            </NumberInfosView>
            <InfoPropertyHolder>
                <InfoPropertyLeftView>
                    <InfoPropertyView>
                        <BigIcon
                            source={ICON_TYPE}
                            style={{tintColor: Theme.hlOrange}}
                        />
                        <InfoText>{Converter(data.type)}</InfoText>
                    </InfoPropertyView>
                    <InfoPropertyView>
                        <BigIcon
                            source={ICON_PRICE}
                            style={{tintColor: Theme.hlOrange}}
                        />
                        <InfoText>{Converter(data.price)}</InfoText>
                    </InfoPropertyView>
                    <InfoPropertyView>
                        <BigIcon
                            source={ICON_LOCATION}
                            style={{tintColor: Theme.hlOrange}}
                        />
                        <InfoText>{Converter(data.location)}</InfoText>
                    </InfoPropertyView>
                </InfoPropertyLeftView>
                <InfoPropertyRightView>
                    <GradeIcon source={FLAT_FULLSTAR} style={{tintColor: Theme.hlOrange}}/>
                    <GradeText>{data.averageGrade}</GradeText>
                </InfoPropertyRightView>
            </InfoPropertyHolder>
            <DescriptionText isEmpty={data.description === ""}>
                {data.description}
            </DescriptionText>
            <TagView>
                {data?.themes.map((list, index) => (
                    <Tag key={index}>#{list.theme}</Tag>
                ))}
            </TagView>
            <LocationView>
                <InfoTitleText>위치</InfoTitleText>
                <LocationText>{koreanAddress}</LocationText>
                <MapViewHolderView>
                    <MapViewHolder>
                        <MapScroll contentContainerStyle={{flex: 1}}>
                            <Container>
                                {marker && (
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
                                        showsMyLocationButton={false}
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
                                )}
                                <OpenMapButton
                                    onPress={() => Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + data.latitude + "," + data.longitude)}>
                                    <OpenMapIcon source={RESTAURANT_OPEN_MAP_ICON}/>
                                </OpenMapButton>
                            </Container>
                        </MapScroll>
                    </MapViewHolder>
                </MapViewHolderView>
            </LocationView>
        </InfoView>
    );
};

const OpenMapButton = styled.TouchableOpacity`
  position: absolute;
  right: ${constants.vh(1)}px;
  bottom: ${constants.vh(1)}px;

  width: ${constants.vh(6.7)}px;
  height: ${constants.vh(6.7)}px;
  border-radius: ${constants.vh(6.7)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
  opacity: 0.8;
  justify-content: center;
  align-items: center;
`

const OpenMapIcon = styled.Image`
  width: 50%;
  height: 50%;
`

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
  padding-bottom: ${constants.vh(0.5)}px;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(7.5)}px;
`;

const NumberInfosView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${constants.vh(0.5)}px;
  margin-bottom: ${constants.vh(3)}px;
`;

const InfoPropertyHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

`

const InfoPropertyLeftView = styled.View`
  width: 50%;
  border-right-width: 0.5px;
  border-right-color: ${(props) => props.theme.backgroundGray};
`

const InfoPropertyRightView = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-left-width: 0.5px;
  border-left-color: ${(props) => props.theme.backgroundGray};
`

const GradeIcon = styled.Image`
  width: ${constants.vw(12)}px;
  height: ${constants.vw(12)}px;
  margin-right: ${constants.vh(1)}px;;
`

const GradeText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(3.5)}px;
  color: ${(props) => props.theme.hlOrange};
`

const IconText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => (props.color ? props.color : props.theme.fontBlackGray)};
  font-size: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(3.5)}px;
`;

const InfoPropertyView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${constants.vh(1)}px;
`;

const InfoText = styled.Text`
  color: ${(props) => props.theme.hlOrange};
  font-size: ${constants.vh(1.9)}px;
  margin-top: ${constants.vh(0.2)}px;
`;

const BigIcon = styled.Image`
  width: ${constants.vw(5)}px;
  height: ${constants.vw(5)}px;
  margin-right: ${constants.vw(4)}px;
`;

const DescriptionText = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vh(1.5)}px;
  color: ${(props) => props.theme.fontBlackGray};
  margin-top: ${(props) => (props.isEmpty ? 0 : constants.vh(3.8))}px;
  margin-bottom: ${constants.vh(1.5)}px;
`;

const TagView = styled.View`
  flex-direction: row;
  margin-bottom: ${constants.vh(5)}px;
`;

const Tag = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  color: ${(props) => props.theme.fontBlue};
  font-size: ${constants.vh(1.6)}px;
  margin-right: ${constants.vw(2.3)}px;
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
`;

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
];

export default RestaurantInfoView;
