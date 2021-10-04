import React, {useState, useEffect} from "react";
import styled from "styled-components";
import StarMaker from "./StarMaker";
import {RESTAURANT_IMAGE, EMPTYHEART, FULLHEART} from "../../image";
import constants from "../../constants";
import {korLocationAPI} from "../Api/GoogleAppApi";
import {Converter} from "../Converter";
import LikeButton from "../Home/LikeButton";
import {getRestaurantsById} from "../Api/AppRestaurantApi";
import RequestFailedAnnouncement from "../RequestFailedAnnouncement";
import {useNavigation} from "@react-navigation/native";

const MapInfoSquare = ({data}) => {

    const navigation = useNavigation();
    const [korLocation, setKorLocation] = useState([]);
    const [restaurant, setRestaurant] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function requestRestaurantById() {
            try {
                const restaurantRequest = await getRestaurantsById(data.id);
                setRestaurant(restaurantRequest);
            } catch (e) {
                setIsError(true);
            }
        }

        async function requestKoreanLocation() {
            const koreanLocation = await korLocationAPI(data);
            setKorLocation(koreanLocation);
        }

        setIsError(false);
        requestRestaurantById();
        requestKoreanLocation();
    }, [data]);

    return (
        <>
            {
                restaurant ? (
                    <Holder>
                        <InfoView>
                            <InfoHolder>
                                <Title>{data.name}</Title>
                                <Content>주소: {korLocation}</Content>
                                <ContentList>
                                    <Content>{Converter(restaurant.location)} · </Content>
                                    <Content>{Converter(restaurant.type)} · </Content>
                                    <Content>{Converter(restaurant.price)}</Content>
                                </ContentList>
                            </InfoHolder>
                            <LikeButton size={7}/>
                        </InfoView>
                        <PropertyView>
                            <Picture source={RESTAURANT_IMAGE}/>
                            <PropertyList>
                                <StarMaker rate={restaurant.averageGrade} size={52} iconSizeRatio={85}/>
                                <ExplanationTag></ExplanationTag>
                                <DetailButton onPress={() => navigation.navigate("Restaurant", {restaurantId: restaurant.id})}>
                                    <DetailButtonText>
                                        더 자세히 보러가기 +
                                    </DetailButtonText>
                                </DetailButton>
                            </PropertyList>
                        </PropertyView>
                    </Holder>
                ) : (
                    isError ? <Holder><RequestFailedAnnouncement/></Holder> : <></>
                )
            }
        </>
    );
};

const InfoView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const InfoHolder = styled.View``

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(6)}px;
  margin-bottom: ${constants.vh(1)}px;
`;

const ContentList = styled.View`
  flex-direction: row;
  align-items: center;
`

const Content = styled.Text`
  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(3.3)}px;
  color: ${(props) => props.theme.fontBlackGray};
  margin-bottom: ${constants.vh(0.5)}px;
`;

const DetailButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareLFont};
  font-size: ${constants.vw(3.3)}px;
`;

const DetailButton = styled.TouchableOpacity`

  margin-top: ${constants.vh(1)}px;
`;

const ExplanationTag = styled.View`
`;

const Picture = styled.Image`
  height: ${constants.vh(13)}px;
  width: ${constants.vh(13)}px;
  border-radius: 15px;
`;

const PropertyView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${constants.vh(1.5)}px;
`;

const PropertyList = styled.View`
  margin-left: ${constants.vw(3)}px;
`

const Holder = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;

  width: 100%;
  height: 30%;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-radius: ${constants.vh(2)}px;
  padding: ${constants.vh(2.2)}px ${constants.vw(6)}px;
`;

export default MapInfoSquare;
