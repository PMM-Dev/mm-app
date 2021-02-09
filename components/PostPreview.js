import React from "react";
import styled from "styled-components";

const PostPreview = () => {
  return (
    <CardContentWrapper>
      <Title>123</Title>
    </CardContentWrapper>
  );
};

const Title = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  margin-right: 10px;
`;

const CardContentWrapper = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 20px;
`;

export default PostPreview;
