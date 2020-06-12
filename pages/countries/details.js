import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, ScrollView, View} from 'react-native';
import {CloseIcon} from '../../elements/basic/bb-icons';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import BBError from '../../elements/basic/bb-error';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

export const COUNTRY_QUERY = gql`
  query COUNTRY($code: ID!) {
    country(code: $code) {
      phone
      native
      currency
    }
  }
`;

const CountryDetailsPage = ({route: {params}, navigation, ...props}) => {
  const close = () => {
    navigation.pop();
  };
  const {loading, error, data} = useQuery(COUNTRY_QUERY, {
    variables: {code: params.country.code},
  });
  const country = {...(params?.country ?? {}), ...(data?.country ?? {})};
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <View style={{borderRadius: 15, overflow: 'hidden'}}>
        <ScrollView>
          <View
            style={{
              borderRadius: 15,
              overflow: 'hidden',
            }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  paddingLeft: 10,
                  paddingBottom: 5,
                }}>
                <Title large={true}>{country.name}</Title>
                <TouchableOpacity onPress={close}>
                  <View style={{padding: 10}}>
                    <CloseIcon size={16} />
                  </View>
                </TouchableOpacity>
              </View>

              {loading ? (
                Array.from({length: 7}).map((_, index) => (
                  <View key={index}>
                    <Divider />
                    <ListTile>
                      <Title loading>######</Title>
                      <Subtitle loading>######## ####</Subtitle>
                    </ListTile>
                  </View>
                ))
              ) : error ? (
                <BBError error={error} />
              ) : (
                <>
                  <Divider />
                  <ListTile>
                    <Title>Languages</Title>
                    <Subtitle>
                      {country.languages
                        .map(l => l.name)
                        .join(', ')
                        .toUpperCase() || 'Not available'}
                    </Subtitle>
                  </ListTile>
                  <Divider />
                  <ListTile>
                    <Title>Native</Title>
                    <Subtitle>{country.native || 'Not available'}</Subtitle>
                  </ListTile>
                  <Divider />
                  <ListTile>
                    <Title>Capital</Title>
                    <Subtitle>{country.capital || 'Not available'}</Subtitle>
                  </ListTile>
                  <Divider />
                  <ListTile>
                    <Title>Currency</Title>
                    <Subtitle>{country.currency || 'Not available'}</Subtitle>
                  </ListTile>
                  <Divider />
                  <ListTile>
                    <Title>Phone</Title>
                    <Subtitle>{country.phone || 'Not available'}</Subtitle>
                  </ListTile>
                  <Divider />
                  <ListTile>
                    <Title>States</Title>
                    <Subtitle>
                      {[
                        ...new Set(
                          country.states.map(
                            state =>
                              state.name != country.capital && state.name,
                          ),
                        ),
                      ].join(' . ') || 'Not available'}
                    </Subtitle>
                  </ListTile>
                  <Divider />
                </>
              )}
            </Content>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Container = styled.View`
  background: white;
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
  height: 250px;
`;

const Caption = styled.Text`
  padding: 2px;
  color: #b8bece;
  font-size: 16px;
  opacity: ${({capital}) => (capital && 1) || 0.5};
  font-weight: ${({capital}) => (capital && 900) || 400};
  text-transform: uppercase;
  margin-top: 4px;
`;

const Code = styled.Text`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 120px;
  text-align: center;
  font-weight: 900;
  color: white;
  font-size: 140px;
  text-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
`;

const Content = styled.View`
  padding: 20px;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 80px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
`;

const Divider = styled.View`
  height: 1px;
  width: ${screenWidth - 30}px;
  background: #000000;
  margin: 10px;
  opacity: 0.05;
`;

const ListTile = styled.View`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Title = styled.Text`
  color: #000000;
  width: ${({loading}) => (loading ? '50%' : 'auto')};
  background-color: ${({loading}) =>
    loading ? 'rgba(0,0,0,0.05)' : 'transparent'};
  color: ${({loading}) => (loading ? 'transparent' : '#000000')};
  font-size: ${({large}) => (large && '28px') || '18px'};
  font-weight: ${({large}) => (large && 900) || 600};
`;

const Subtitle = styled.Text`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 4px;
  width: ${({loading}) => (loading ? '75%' : 'auto')};
  background-color: ${({loading}) =>
    loading ? 'rgba(0,0,0,0.05)' : 'transparent'};
  color: ${({loading}) => (loading ? 'transparent' : '#b8bece')};
`;

export default CountryDetailsPage;
