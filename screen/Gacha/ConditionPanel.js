import React from "react";
import styled from "styled-components";
import Checkbox from "../../components/Checkbox";
import KoreanEnum from "../../KoreanEnum";
import Theme from "../../style/Theme";

const ConditionPanel = ({
  setIsConditionSet,
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
        <RowTitle first>👨‍🍳 종류</RowTitle>
        <CheckboxTable>
          <Checkbox
            text={KoreanEnum.KOREAN}
            checked={korean}
            setChecked={setKorean}
          />
          <Checkbox
            text={KoreanEnum.FLOUR}
            checked={flour}
            setChecked={setFlour}
          />
          <Checkbox
            text={KoreanEnum.DESSERT}
            checked={dessert}
            setChecked={setDessert}
          />
          <Checkbox
            text={KoreanEnum.JAPANESE}
            checked={japanese}
            setChecked={setJapanese}
          />
        </CheckboxTable>
        <CheckboxTable>
          <Checkbox
            text={KoreanEnum.FASTFOOD}
            checked={fastfood}
            setChecked={setFastfood}
          />
          <Checkbox
            text={KoreanEnum.WESTERN}
            checked={western}
            setChecked={setWestern}
          />
          <Checkbox
            text={KoreanEnum.ASIAN}
            checked={asian}
            setChecked={setAsian}
          />
        </CheckboxTable>
        <RowTitle>💸 가격대</RowTitle>
        <CheckboxTable>
          <Checkbox
            text={KoreanEnum.CHEAP}
            checked={cheap}
            setChecked={setCheap}
          />
          <Checkbox
            text={KoreanEnum.REASONABLE}
            checked={reasonable}
            setChecked={setReasonable}
          />
          <Checkbox
            text={KoreanEnum.EXPENSIVE}
            checked={expensive}
            setChecked={setExpensive}
          />
        </CheckboxTable>
        <RowTitle>🗺 위치</RowTitle>
        <CheckboxTable>
          <Checkbox
            text={KoreanEnum.FRONTGATE}
            checked={frontgate}
            setChecked={setFrontgate}
          />
          <Checkbox
            text={KoreanEnum.SIDEGATE}
            checked={sidegate}
            setChecked={setSidegate}
          />
          <Checkbox
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
          <Button color={Theme.hlRed} onPress={() => setIsConditionSet(true)}>
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
  width: 350px;
  height: 500px;
  background-color: ${(props) => props.theme.backgroundWhite};
  border-radius: 10px;
  align-items: center;
  padding-top: 20px;
`;

const Title = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: 30px;
  color: ${(props) => props.theme.fontBlack};
`;

const RowTitle = styled.Text`
  ${(props) => props.theme.NanumGothicBoldFont};
  font-size: 20px;
  color: ${(props) => props.theme.fontBlack};
  margin-top: ${(props) => (props.first ? "5%" : "10%")};
  margin-bottom: 1%;
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
  ${(props) => props.theme.NanumGothicFont};
  font-size: 18px;
  color: ${(props) => props.color};
`;

export default ConditionPanel;
