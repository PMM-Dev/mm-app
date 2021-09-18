import React from 'react'
import styled from 'styled-components'
import LottieView from "lottie-react-native";
import constants from "../../constants";

const GachaAnimationView = ({gachaLottieRef, setIsAnimationStep}) => {
    return (
        <GachaView>
            <LottieView ref={gachaLottieRef}
                        source={require("../../assets/animation/gacha.json")}
                        autoPlay={true}
                        loop={false}
                        style={{
                            width: constants.vw(100),
                            height: constants.vh(100),
                            backgroundColor: '#fff',
                        }}
                        onAnimationFinish={() => setIsAnimationStep(false)}
            />
        </GachaView>
    )
}

const GachaView = styled.View`
  width: 100%;
  height: 100%;
`;

export default GachaAnimationView;