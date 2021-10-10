import React, {useRef, useState} from "react";
import styled from "styled-components";
import ConditionPanel from "../../components/Gacha/ConditionPanel";
import {ActivityIndicator} from 'react-native-paper'
import {getRestaurantByGacha} from "../../components/Api/AppRestaurantApi";
import RestaurantEnum from "../../RestaurantEnum";
import Theme from "../../style/Theme";
import GachaResultView from "../../components/Gacha/GachaResultView";
import GachaAnimationView from "../../components/Gacha/GachaAnimationView";

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

    const [frontGate, setFrontGate] = useState(false);
    const [sideGate, setSideGate] = useState(false);
    const [backGate, setBackGate] = useState(false);
    const [artGate, setArtGate] = useState(false);

    const gachaLottieRef = useRef(null);

    const [isConditionStep, setIsConditionStep] = useState(true);
    const [isAnimationStep, setIsAnimationStep] = useState(true);

    const [isServerRequestLoading, setIsServerRequestLoading] = useState(false);
    const [gachaResult, setGachaResult] = useState({type: undefined, price: undefined, location: undefined});

    const getSelectedTypeList = () => {
        let list = [];
        if (korean) list.push(RestaurantEnum.KOREAN);
        if (flour) list.push(RestaurantEnum.FLOUR);
        if (dessert) list.push(RestaurantEnum.DESSERT);
        if (japanese) list.push(RestaurantEnum.JAPANESE);
        if (fastfood) list.push(RestaurantEnum.FASTFOOD);
        if (western) list.push(RestaurantEnum.WESTERN);
        if (asian) list.push(RestaurantEnum.ASIAN);
        return list;
    }

    const getSelectedPriceList = () => {
        let list = [];
        if (cheap) list.push(RestaurantEnum.CHEAP);
        if (reasonable) list.push(RestaurantEnum.REASONABLE);
        if (expensive) list.push(RestaurantEnum.EXPENSIVE);
        return list;
    }

    const getSelectedLocationList = () => {
        let list = [];
        if (frontGate) list.push(RestaurantEnum.FRONTGATE);
        if (sideGate) list.push(RestaurantEnum.SIDEGATE);
        if (backGate) list.push(RestaurantEnum.BACKGATE);
        if (artGate) list.push(RestaurantEnum.ARTGATE);
        return list;
    }

    const doGacha = async () => {
        setIsServerRequestLoading(true);

        const result = await getRestaurantByGacha(getSelectedTypeList(), getSelectedPriceList(), getSelectedLocationList());
        if (result === undefined) {
            setIsServerRequestLoading(false);
            alert("뽑기에 실패하였습니다. 다시 시도해주세요.")
            return;
        }

        setGachaResult(result);
        setIsServerRequestLoading(false);
        setIsConditionStep(false);
        setIsAnimationStep(true);
    }

    const resetGacha = () => {
        setIsConditionStep(true)
        setIsAnimationStep(true);
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
                        frontGate={frontGate}
                        sideGate={sideGate}
                        backGate={backGate}
                        artGate={artGate}
                        setFrontGate={setFrontGate}
                        setSideGate={setSideGate}
                        setBackGate={setBackGate}
                        setArtGate={setArtGate}
                    />
                    {
                        isServerRequestLoading &&
                        <LoadingMask>
                            <ActivityIndicator color={Theme.hlOrange} size={"large"}/>
                        </LoadingMask>
                    }
                </>
            ) : (<>
                {isAnimationStep ? (
                    <GachaAnimationView gachaLottieRef={gachaLottieRef} setIsAnimationStep={setIsAnimationStep}/>
                ) : (
                    <GachaResultView navigation={navigation} gachaResult={gachaResult} doGacha={doGacha} resetGacha={resetGacha} />
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

export default Gacha;
