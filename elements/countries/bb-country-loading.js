import React from 'react';
import styled from 'styled-components/native';

const BBCountryLoading = props => {
  return (
    <Container style={{elevation: 10}} {...props}>
      <Cover />
      <Content>
        <Title>######</Title>
        <Subtitle>######</Subtitle>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  background: #fefefe;
  height: 280px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin: 20px;
`;

const Content = styled.View`
  padding: 0 20px;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 80px;
  margin-left: 10px;
`;

const Cover = styled.View`
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px;
  position: relative;
  height: 200px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: rgba(0, 0, 0, 0.45);
`;

const Title = styled.Text`
  color: black;
  font-size: ${({large}) => (large && '40px') || '20px'};
  font-weight: ${({large}) => (large && 900) || 600};

  width: 70%;
  background-color: rgba(0, 0, 0, 0.075);
  color: transparent;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.075);
  color: transparent;
`;

export default BBCountryLoading;
