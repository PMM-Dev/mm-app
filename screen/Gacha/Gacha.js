import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import LottieView from 'lottie-react-native';
import ConditionPanel from "../../components/Gacha/ConditionPanel";
import ResultCard from "../../components/Gacha/ResultCard";
import {TouchableOpacity} from "react-native";

const Gacha = () => {
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

    const [isConditionStep, setIsConditionStep] = useState(false);
    const [isAnimationStep, setIsAnimationStep] = useState(false);


    const play = () => {
        cardPackLottieView.current.reset();
        cardPackLottieView.current.play();
    }

    return (
        <Page>
            {isConditionStep ? (
                <ConditionPanel
                    setIsConditionStep={setIsConditionStep}
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
                ) : (<ResultCard/>)}
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

const GachaView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Machine = styled.Image`
  height: 70%;
  aspect-ratio: 0.57;
`;

export default Gacha;
