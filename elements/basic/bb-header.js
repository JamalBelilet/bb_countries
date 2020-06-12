import styled from 'styled-components/native';
import React from 'react';
const BBHeader = () => (
  <Container>
    <Hint>Welcome to,</Hint>
    <Title>B.B. Countries</Title>
  </Container>
);

const Container = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  padding-bottom: 12px;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 900;
`;

const Hint = styled.Text`
  font-size: 21px;
  color: #b8bece;
  font-weight: 500;
`;

export default BBHeader;
