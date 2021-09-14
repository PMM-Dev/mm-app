import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import FrontOfCard from "./FrontOfCard";
import {TouchableOpacity} from "react-native";
import constants from "../../constants";

const GachaResultView = ({navigation, gachaResult, doGacha, resetGacha}) => {

    const scrollViewRef = useRef();
    const [scrollStartPosition, setScrollStartPosition] = useState(0);

    const handleScrollBegin = (event) => {
        setScrollStartPosition(event.nativeEvent.contentOffset.y);
    }

    const handleScrollEnd = (event) => {
        const currentPosition = event.nativeEvent.contentOffset.y;
        const dragDistance = currentPosition - scrollStartPosition;
        if (-constants.vh(10) < dragDistance && dragDistance < constants.vh(11)) {
            scrollViewRef.current.scrollTo({y: constants.vh(105)});
        } else if (dragDistance > constants.vh(11)) {
            scrollViewRef.current.scrollToEnd();
            setTimeout(() => doGacha(), 500);
        } else if (-constants.vh(10) > dragDistance) {
            scrollViewRef.current.scrollTo({y: 0});
            setTimeout(() => resetGacha(), 500);
        }
    }

    useEffect(() => {
        scrollViewRef.current.scrollTo({y: constants.vh(105), animated: false});
    }, [])

    return (
        <ResultView>
            <FrontOfCardScrollView ref={scrollViewRef} alwaysBounceVertical={false} scrollEventThrottle={16}
                                   showsVerticalScrollIndicator={false}
                                   showsHorizontalScrollIndicator={false} onScrollBeginDrag={handleScrollBegin}
                                   onScrollEndDrag={handleScrollEnd}>
                <FrontOfCardHolder>
                    <FrontOfCard id={gachaResult.id} title={gachaResult.name} type={gachaResult.type}
                                 price={gachaResult.price} location={gachaResult.location}
                                 navigation={navigation}/>
                </FrontOfCardHolder>
            </FrontOfCardScrollView>
            <AnnounceText top={11}>상단으로 드래그해서 다시 뽑기</AnnounceText>
            <AnnounceText top={13.5}>하단으로 드래그해서 조건 초기화</AnnounceText>
            <AnnounceText bottom={14}>자세히 볼려면 카드를 클릭하세요</AnnounceText>
        </ResultView>
    )
}

const ResultView = styled.View`
  height: ${constants.pureheight}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FrontOfCardScrollView = styled.ScrollView`
  height: 100%;
  width: 100%;
`

const FrontOfCardHolder = styled.View`
  height: ${constants.vh(300)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const AnnounceText = styled.Text`
  position: absolute;
  ${(props) => props.top ? `top: ${constants.vh(props.top)}px` : ""};
  ${(props) => props.bottom ? `bottom: ${constants.vh(props.bottom)}px` : ""};

  ${(props) => props.theme.NanumSquareRFont}
  font-size: ${constants.vw(5)}px;
  color: ${(props) => props.theme.fontGray};
`

export default GachaResultView;