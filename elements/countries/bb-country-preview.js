import React from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';

const BBCountry = ({country, navigation, ...props}) => {
  const details = () => {
    navigation.navigate('country-details', {country});
  };

  return (
    <TouchableWithoutFeedback {...props} onPress={details}>
      <Container style={{elevation: 10}}>
        <Cover>
          <Caption key={country.capital} capital={true}>
            {country.capital} .{' '}
          </Caption>
          {country?.states &&
            [
              ...new Set(
                country.states.map(
                  state => state.name != country.capital && state.name,
                ),
              ),
            ].map(stateName => (
              <Caption key={stateName}>{stateName} . </Caption>
            ))}
          <Code>{country.code}</Code>
        </Cover>
        <Content>
          <Title>{country.name}</Title>
          <Subtitle>
            {country.languages
              .map(l => l.name)
              .join(', ')
              .toUpperCase()}
          </Subtitle>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  background: white;
  height: 280px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 20px;
  border-radius: 15px;
`;

const Cover = styled.View`
  width: 100%;
  overflow: hidden;
  background: black;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px;
  position: relative;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px;
`;

const Caption = styled.Text`
  padding: 2px;
  color: #b8bece;
  font-size: 14px;
  opacity: ${({capital}) => (capital && 1) || 0.5};
  font-weight: ${({capital}) => (capital && 900) || 400};
  text-transform: uppercase;
  margin-top: 4px;
`;

const Code = styled.Text`
  position: absolute;
  bottom: 00px;
  left: 0;
  right: 0;
  /* height: 100px; */
  text-align: center;
  font-weight: 900;
  color: white;
  font-size: 120px;
  text-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
`;

const Content = styled.View`
  padding: 0 20px;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 80px;
  margin-left: 10px;
`;

const Title = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 4px;
`;

export default BBCountry;
