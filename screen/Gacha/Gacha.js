import React from "react";
import styled from "styled-components";
import { GACHA_MACHINE_IMG } from "../../images/index";
import ConditionPanel from "./ConditionPanel";
import ResultPanel from "./ResultPanel";

const Gacha = () => {
  const [isConditionSet, setIsConditionSet] = React.useState(false);

  const [korean, setKorean] = React.useState(false);
  const [flour, setFlour] = React.useState(false);
  const [dessert, setDessert] = React.useState(false);
  const [japanese, setJapanese] = React.useState(false);
  const [fastfood, setFastfood] = React.useState(false);
  const [western, setWestern] = React.useState(false);
  const [asian, setAsian] = React.useState(false);

  const [cheap, setCheap] = React.useState(false);
  const [reasonable, setReasonable] = React.useState(false);
  const [expensive, setExpensive] = React.useState(false);

  const [frontgate, setFrontgate] = React.useState(false);
  const [sidegate, setSidegate] = React.useState(false);
  const [backgate, setBackgate] = React.useState(false);

  return (
    <Page>
      {!isConditionSet ? (
        <ConditionPanel
          setIsConditionSet={setIsConditionSet}
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
      ) : (
        <GachaView>
          <Machine source={GACHA_MACHINE_IMG} />
          {/* <ResultPanel /> */}
        </GachaView>
      )}
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
