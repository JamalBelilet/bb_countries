import React from 'react';
import BBError from '../../elements/basic/bb-error';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import BBCountry from '../../elements/countries/bb-country-preview';
import BBHeader from '../../elements/basic/bb-header';
import {FlatList, ScrollView, SafeAreaView, View} from 'react-native';
import BBCountryLoading from '../../elements/countries/bb-country-loading';

export const COUNTRIES_QUERY = gql`
  query COUNTRIES {
    countries {
      code
      name
      capital
      languages {
        code
        name
      }
      states {
        code
        name
      }
    }
  }
`;
const CountriesPage = ({...props}) => {
  const {loading, error, data} = useQuery(COUNTRIES_QUERY, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return (
      <ScrollView>
        <BBHeader />
        <View paddingBottom={40}>
          {Array.from({length: 5}).map((_, index) => (
            <BBCountryLoading key={index} />
          ))}
        </View>
      </ScrollView>
    );
  }
  if (error) {
    return (
      <ScrollView>
        <BBHeader />
        <BBError error={error} {...props} />
      </ScrollView>
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={[
          {code: '##'},
          ...data.countries.filter(country => country.states?.length > 0),
        ]}
        keyExtractor={(item, _) => item.code}
        renderItem={({item, index, separators}) =>
          index === 0 ? (
            <BBHeader {...props} />
          ) : (
            <BBCountry {...props} country={item} />
          )
        }
      />
    </SafeAreaView>
  );
};

export default CountriesPage;
