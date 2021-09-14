import React from "react";
import styled from "styled-components";
import CheckButton from "../../components/CheckButton";
import KoreanEnum from "../../KoreanEnum";
import Theme from "../../style/Theme";
import constants from "../../constants";
import {ICON_LOCATION, ICON_PRICE, ICON_TYPE} from "../../image";

const ConditionPanel = ({
                          doGacha,
  korean,
  flour,
  dessert,
  japanese,
  fastfood,
  western,
  asian,
  setKorean,
  setFlour,
  setDessert,
  setJapanese,
  setFastfood,
  setWestern,
  setAsian,
  cheap,
  reasonable,
  expensive,
  setCheap,
  setReasonable,
  setExpensive,
  frontgate,
  sidegate,
  backgate,
  setFrontgate,
  setSidegate,
  setBackgate,
}) => {
  const resetAllCondition = () => {
    setKorean(false);
    setFlour(false);
    setDessert(false);
    setJapanese(false);
    setFastfood(false);
    setWestern(false);
    setAsian(false);
    setCheap(false);
    setReasonable(false);
    setExpensive(false);
    setFrontgate(false);
    setSidegate(false);
    setBackgate(false);
  };

  return (
    <PanelMask>
      <Panel>
        <Title>오늘 땡기는 건?</Title>
        <RowTitle first>
          <RowTitleImage source={ICON_TYPE} style={{tintColor: Theme.fontBlack}} />
          <RowTitleText>종류</RowTitleText>
        </RowTitle>
        <CheckboxTable>
          <CheckButton
            text={KoreanEnum.KOREAN}
            checked={korean}
            setChecked={setKorean}
          />
          <CheckButton
            text={KoreanEnum.FLOUR}
            checked={flour}
            setChecked={setFlour}
          />
          <CheckButton
            text={KoreanEnum.DESSERT}
            checked={dessert}
            setChecked={setDessert}
          />
          <CheckButton
            text={KoreanEnum.JAPANESE}
            checked={japanese}
            setChecked={setJapanese}
          />
        </CheckboxTable>
        <CheckboxTable>
          <CheckButton
            text={KoreanEnum.FASTFOOD}
            checked={fastfood}
            setChecked={setFastfood}
          />
          <CheckButton
            text={KoreanEnum.WESTERN}
            checked={western}
            setChecked={setWestern}
          />
          <CheckButton
            text={KoreanEnum.ASIAN}
            checked={asian}
            setChecked={setAsian}
          />
        </CheckboxTable>
        <RowTitle>
          <RowTitleImage money source={ICON_PRICE} style={{tintColor: Theme.fontBlack}} />
          <RowTitleText>가격대</RowTitleText>
        </RowTitle>
        <CheckboxTable>
          <CheckButton
            text={KoreanEnum.CHEAP}
            checked={cheap}
            setChecked={setCheap}
          />
          <CheckButton
            text={KoreanEnum.REASONABLE}
            checked={reasonable}
            setChecked={setReasonable}
          />
          <CheckButton
            text={KoreanEnum.EXPENSIVE}
            checked={expensive}
            setChecked={setExpensive}
          />
        </CheckboxTable>
        <RowTitle>
          <RowTitleImage source={ICON_LOCATION} style={{tintColor: Theme.fontBlack}} />
          <RowTitleText>위치</RowTitleText>
        </RowTitle>
        <CheckboxTable>
          <CheckButton
            text={KoreanEnum.FRONTGATE}
            checked={frontgate}
            setChecked={setFrontgate}
          />
          <CheckButton
            text={KoreanEnum.SIDEGATE}
            checked={sidegate}
            setChecked={setSidegate}
          />
          <CheckButton
            text={KoreanEnum.BACKGATE}
            checked={backgate}
            setChecked={setBackgate}
          />
        </CheckboxTable>
        <ButtonView>
          <Button
            color={Theme.backgroundGray}
            onPress={() => resetAllCondition()}
          >
            <ButtonText color={Theme.fontBlack}>초기화</ButtonText>
          </Button>
          <Button color={Theme.hlOrange} onPress={() => doGacha()}>
            <ButtonText color={Theme.backgroundWhite}>뽑기</ButtonText>
          </Button>
        </ButtonView>
      </Panel>
    </PanelMask>
  );
};

const PanelMask = styled.View`
  ${(props) => props.theme.opacityMask10};
`;

const Panel = styled.View`
  width: ${constants.vw(78)}px;
  height: ${constants.vh(57.5)}px;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-radius: ${constants.vw(8)}px;;
  border-width: ${constants.vw(1.2)}px;;
  border-color: ${(props) => props.theme.hlOrange};
  
  align-items: center;
  padding-top: ${constants.vh(4)}px;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vw(7)}px;
  color: ${(props) => props.theme.fontBlack};
`;

const RowTitle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.first ? constants.vh(5) : constants.vh(1.9))}px;
  margin-bottom: ${constants.vh(0.5)}px;
`

const RowTitleImage = styled.Image`
  width: ${constants.vw(5)}px;
  height: ${constants.vw(5)}px;
  margin-right: ${(props) => props.money ? constants.vw(1) : constants.vw(2)}px;
`

const RowTitleText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont}
  font-size: ${constants.vw(5)}px;
  color: ${(props) => props.theme.fontBlack};
`;

const CheckboxTable = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonView = styled.View`
  position: absolute;
  bottom: 20px;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 48%;
  height: 55px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  ${(props) => props.theme.NanumSquareEBFont}
  font-size: ${constants.vw(4.6)}px;
  color: ${(props) => props.color};
`;

export default ConditionPanel;
