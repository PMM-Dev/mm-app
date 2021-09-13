import React, {useRef, useState} from "react";
import styled from "styled-components";
import LottieView from 'lottie-react-native';
import ConditionPanel from "../../components/Gacha/ConditionPanel";
import ResultCard from "../../components/Gacha/ResultCard";
import {ActivityIndicator} from 'react-native-paper'
import {TouchableOpacity} from "react-native";
import {getRestaurantByGacha} from "../../components/Api/AppRestaurantApi";
import RestaurantEnum from "../../RestaurantEnum";
import Theme from "../../style/Theme";
import constants from "../../constants";
import {red} from "react-native-reanimated/src/reanimated2/Colors";

const Gacha = ({navigation}) => {
    const [korean, setKorean] = useState(false);
    const [flour, setFlour] = useState(false);
    const [dessert, setDessert] = useState(false);
    const [japanese, setJapanese] = useState(false);
    const [fastfood, setFastfood] = useState(false);
    const [western, setWestern] = useState(false);
    const [asian, setAsian] = useState(false);
    const [cheap, setCheap] = useState(false);
    const [reasonable, setReasonable] = useState(false);
    const [expensive, setExpensive] = useState(false);
    const [frontgate, setFrontgate] = useState(false);
    const [sidegate, setSidegate] = useState(false);
    const [backgate, setBackgate] = useState(false);

    const cardPackLottieView = useRef(null);

    const [isConditionStep, setIsConditionStep] = useState(true);
    const [isAnimationStep, setIsAnimationStep] = useState(false);

    const [isServerRequstLoading, setIsServerRequestLoading] = useState(false);
    const [gachaResult, setGachaResult] = useState({type: undefined, price: undefined, location: undefined});

    const doGacha = async () => {
        setIsServerRequestLoading(true);

        const result = await getRestaurantByGacha(RestaurantEnum.KOREAN, RestaurantEnum.CHEAP);
        if (result === undefined) {
            setIsServerRequestLoading(false);
            alert("뽑기에 실패하였습니다. 다시 시도해주세요.")
            return;
        }

        setGachaResult(result);
        setIsServerRequestLoading(false);
        setIsConditionStep(false);
    }

    const play = () => {
        cardPackLottieView.current.reset();
        cardPackLottieView.current.play();
    }

    return (
        <Page>
            {isConditionStep ? (
                <>
                    <ConditionPanel
                        doGacha={doGacha}
                        korean={korean}
                        flour={flour}
                        dessert={dessert}
                        japanese={japanese}
                        fastfood={fastfood}
                        western={western}
                        asian={asian}
                        setKorean={setKorean}
                        setFlour={setFlour}
                        setDessert={setDessert}
                        setJapanese={setJapanese}
                        setFastfood={setFastfood}
                        setWestern={setWestern}
                        setAsian={setAsian}
                        cheap={cheap}
                        reasonable={reasonable}
                        expensive={expensive}
                        setCheap={setCheap}
                        setReasonable={setReasonable}
                        setExpensive={setExpensive}
                        frontgate={frontgate}
                        sidegate={sidegate}
                        backgate={backgate}
                        setFrontgate={setFrontgate}
                        setSidegate={setSidegate}
                        setBackgate={setBackgate}
                    />
                    {
                        isServerRequstLoading &&
                        <LoadingMask>
                            <ActivityIndicator color={Theme.hlRed} size={"large"}/>
                        </LoadingMask>
                    }
                </>
            ) : (<>
                {isAnimationStep ? (
                    <GachaView>
                        <TouchableOpacity onPress={() => play()}>
                            <LottieView ref={cardPackLottieView}
                                        source={require("../../assets/animation/gacha_test.json")}
                                        loop={false}
                                        style={{
                                            width: 500,
                                            backgroundColor: '#fff',
                                        }}/>
                        </TouchableOpacity>
                    </GachaView>
                ) : (
                    <ResultView>
                        <ResultCard id={gachaResult.id} title={gachaResult.name} type={gachaResult.type}
                                    price={gachaResult.price} location={gachaResult.location} navigation={navigation}/>
                        <TouchableOpacity
                            onPress={() => {
                                setIsConditionStep(true);
                                doGacha()
                            }}
                            style={{position: "absolute", top: constants.vh(13), width: constants.vw(70)}}>
                            {/*<AnnounceText top={13}>상단으로 드래그해서 다시 뽑기</AnnounceText>*/}
                            <AnnounceText>상단으로 드래그해서 다시 뽑기</AnnounceText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> setIsConditionStep(true)}
                            style={{position: "absolute", top: constants.vh(16), width: constants.vw(70)}}>
                            {/*<AnnounceText top={16}>하단으로 드래그해서 조건 초기화</AnnounceText>*/}
                            <AnnounceText>하단으로 드래그해서 조건 초기화</AnnounceText>
                        </TouchableOpacity>
                        <AnnounceText bottom={10}>자세히 볼려면 카드를 클릭하세요</AnnounceText>
                    </ResultView>
                )}
            </>)}
        </Page>
    );
};

const Page = styled.View`
  background-color: ${(props) => props.theme.backgroundWhite};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingMask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const GachaView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ResultView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const AnnounceText = styled.Text`
  position: absolute;
  ${(props) => props.top ? `top: ${constants.vh(props.top)}px` : ""};
  ${(props) => props.bottom ? `bottom: ${constants.vh(props.bottom)}px` : ""};

  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(5)}px;
  color: ${(props) => props.theme.fontGray};
`

export default Gacha;
