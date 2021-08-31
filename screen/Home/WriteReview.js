import React, {useState} from "react";
import styled from "styled-components";
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Header from "../../components/Header/Header";
import Theme from "../../style/Theme";
import constants from "../../constants";
import {FULLSTAR} from "../../image";

const WriteReview = ({route, navigation}) => {
    const email = route.params.email;
    const restaurantId = route.params.restaurantId;
    const restaurantName = route.params.restaurantName;

    const [selectedLanguage, setSelectedLanguage] = useState("Java");


    return (
        <Screen>
            <Header route={route} navigation={navigation} title={"리뷰 작성"} email={email} restaurantId={restaurantId}/>
            <Page>
                <TitleText>{restaurantName}</TitleText>
                <TextInput
                    mode="outlined"
                    value={""}
                    selectionColor={Theme.fontBlue}
                    outlineColor={Theme.fontBlue}
                    multiline={true}
                    // onChangeText={text => setText(text)}
                    style={{
                        width: constants.vw(80),
                        height: constants.vh(30),
                        backgroundColor: Theme.backgroundWhite
                    }}
                    right={<TextInput.Affix tex={"/100"}/>}
                />
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }
                    style={{width: 500, height: 500, backgroundColor: Theme.hlOrange}}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <GradeButton>
                    <GradeIcon source={FULLSTAR}/>

                </GradeButton>
            </Page>
        </Screen>
    );
};

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundWhite};
`;

const Page = styled.View`
  width: 100%;
  height: ${constants.pureheight}px;
  align-items: center;
  padding: ${constants.vh(3)}px 0px;
`

const TitleText = styled.Text`
  ${(props) => props.theme.NanumSquareBFont};
  color: ${(props) => props.theme.fontBlack};
  font-size: ${constants.vh(3)}px;
  margin-bottom: ${constants.vh(2)}px;
`

const GradeButton = styled.View`
  flex-direction: row;
`

const GradeIcon = styled.Image`
  width: ${constants.vw(6)}px;
  height: ${constants.vw(6)}px;
`

export default WriteReview;