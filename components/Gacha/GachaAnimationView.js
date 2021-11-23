import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import LottieView from "lottie-react-native";
import constants from "../../constants";
import RestaurantEnum from "../../RestaurantEnum";

const GachaAnimationView = ({gachaLottieRef, setIsAnimationStep, gachaResultType}) => {

    const [animationComponent, setAnimationComponent] = useState();

    useEffect(() => {
        switch (gachaResultType) {
            case RestaurantEnum.ASIAN:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/ASIAN.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
            case RestaurantEnum.DESSERT:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/DESSERT.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
            case RestaurantEnum.FASTFOOD:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/FASTFOOD.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
            case RestaurantEnum.FLOUR:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/FLOUR.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
            case RestaurantEnum.JAPANESE:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/JAPANESE.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
            case RestaurantEnum.KOREAN:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/KOREAN.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
            case RestaurantEnum.WESTERN:
                setAnimationComponent(
                    <LottieView ref={gachaLottieRef}
                                source={require("../../assets/animation/gacha/WESTERN.json")}
                                autoPlay={true}
                                loop={false}
                                style={{
                                    width: constants.vw(100),
                                    height: constants.vh(100),
                                    backgroundColor: '#fff',
                                }}
                                onAnimationFinish={() => setIsAnimationStep(false)}
                    />
                )
                break;
        }
    }, [])

    return (
        <GachaView>
            {animationComponent && animationComponent}
        </GachaView>
    )
}

const GachaView = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default GachaAnimationView;