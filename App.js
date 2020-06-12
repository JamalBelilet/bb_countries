import React from 'react';
import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import CountriesPage from './pages/countries';
import CountryDetailsPage from './pages/countries/details';
import {ApolloProvider} from '@apollo/react-hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  // cache: new InMemoryCache(),
});

const MainStack = createStackNavigator();

const App = () => (
  <ApolloProvider client={apolloClient}>
    <NavigationContainer>
      <MainStack.Navigator mode="modal">
        <MainStack.Screen
          name="countries"
          component={CountriesPage}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="country-details"
          component={CountryDetailsPage}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
