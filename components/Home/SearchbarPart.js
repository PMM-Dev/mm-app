import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {SEARCHBAR} from "../../image";

const SearchbarPart = () => {
    const [text, onChangeText] = useState();

    useEffect(() => {
        return () => onChangeText("");
    }, []);

    return (
        <Searchbar>
            <TextInputView
                onChangeText={onChangeText}
                value={text}
                placeholder="위치 / 음식 키워드로 검색해주세요"
                placeholderTextColor="#D4D7DB"
                underlineColorAndroid="rgba(0,0,0,0)"
            />
            <SearchButtonPos onPress={() => console.log("pressed")}>
                <SearchButtonImage source={SEARCHBAR}/>
            </SearchButtonPos>
        </Searchbar>
    );
};

const TextInputView = styled.TextInput`
  width: 90%;
  background-color: ${(props) => props.theme.backgroundWhite};
  height: 80%;
  border-radius: 5px;
  padding-left: 20px;
  color: ${(props) => props.theme.fontBlack};
  font-size: 16px;
`;

const SearchButtonImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

const Searchbar = styled.View`
  width: 100%;
  height: 26%;
  top: 3px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SearchButtonPos = styled.TouchableOpacity`
  width: 20%;
  height: 70%;
  position: absolute;
  right: 2%;
`;

export default SearchbarPart;
