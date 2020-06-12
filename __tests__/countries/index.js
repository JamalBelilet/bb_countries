import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/react-testing';
import {render} from 'react-native-testing-library';
import wait from 'waait';
import {create} from 'react-test-renderer';

import CountriesPage, {COUNTRIES_QUERY} from '../../pages/countries';

const mocks = [
  {
    request: {
      query: COUNTRIES_QUERY,
    },
    result: {
      data: {
        countries: [
          {
            code: 'AD',
            name: 'Andorra',
            capital: 'Andorra la Vella',
            languages: [
              {
                code: 'ca',
                name: 'Catalan',
              },
            ],
            states: [],
          },
          {
            code: 'AE',
            name: 'United Arab Emirates',
            capital: 'Abu Dhabi',
            languages: [
              {
                code: 'ar',
                name: 'Arabic',
              },
            ],
            states: [],
          },
          {
            code: 'AF',
            name: 'Afghanistan',
            capital: 'Kabul',
            languages: [
              {
                code: 'ps',
                name: 'Pashto',
              },
              {
                code: 'uz',
                name: 'Uzbek',
              },
              {
                code: 'tk',
                name: 'Turkmen',
              },
            ],
            states: [],
          },
          {
            code: 'AG',
            name: 'Antigua and Barbuda',
            capital: "Saint John's",
            languages: [
              {
                code: 'en',
                name: 'English',
              },
            ],
            states: [],
          },
          {
            code: 'AI',
            name: 'Anguilla',
            capital: 'The Valley',
            languages: [
              {
                code: 'en',
                name: 'English',
              },
            ],
            states: [],
          },
          {
            code: 'AL',
            name: 'Albania',
            capital: 'Tirana',
            languages: [
              {
                code: 'sq',
                name: 'Albanian',
              },
            ],
            states: [],
          },
          {
            code: 'AM',
            name: 'Armenia',
            capital: 'Yerevan',
            languages: [
              {
                code: 'hy',
                name: 'Armenian',
              },
              {
                code: 'ru',
                name: 'Russian',
              },
            ],
            states: [],
          },
          {
            code: 'AO',
            name: 'Angola',
            capital: 'Luanda',
            languages: [
              {
                code: 'pt',
                name: 'Portuguese',
              },
            ],
            states: [],
          },
          {
            code: 'AQ',
            name: 'Antarctica',
            capital: null,
            languages: [],
            states: [],
          },
          {
            code: 'AR',
            name: 'Argentina',
            capital: 'Buenos Aires',
            languages: [
              {
                code: 'es',
                name: 'Spanish',
              },
              {
                code: 'gn',
                name: 'Guarani',
              },
            ],
            states: [
              {
                code: null,
                name: 'Ciudad Autónoma de Buenos Aires',
              },
              {
                code: null,
                name: 'Buenos Aires',
              },
              {
                code: null,
                name: 'Catamarca',
              },
              {
                code: null,
                name: 'Chaco',
              },
              {
                code: null,
                name: 'Chubut',
              },
              {
                code: null,
                name: 'Córdoba',
              },
              {
                code: null,
                name: 'Corrientes',
              },
              {
                code: null,
                name: 'Entre Ríos',
              },
              {
                code: null,
                name: 'Formosa',
              },
              {
                code: null,
                name: 'Jujuy',
              },
              {
                code: null,
                name: 'La Pampa',
              },
              {
                code: null,
                name: 'La Rioja',
              },
              {
                code: null,
                name: 'Mendoza',
              },
              {
                code: null,
                name: 'Misiones',
              },
              {
                code: null,
                name: 'Neuquén',
              },
              {
                code: null,
                name: 'Río Negro',
              },
              {
                code: null,
                name: 'Salta',
              },
              {
                code: null,
                name: 'San Juan',
              },
              {
                code: null,
                name: 'San Luis',
              },
              {
                code: null,
                name: 'Santa Cruz',
              },
              {
                code: null,
                name: 'Santa Fe',
              },
              {
                code: null,
                name: 'Santiago del Estero',
              },
              {
                code: null,
                name: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
              },
              {
                code: null,
                name: 'Tucumán',
              },
            ],
          },
          {
            code: 'AS',
            name: 'American Samoa',
            capital: 'Pago Pago',
            languages: [
              {
                code: 'en',
                name: 'English',
              },
              {
                code: 'sm',
                name: 'Samoan',
              },
            ],
            states: [],
          },
          {
            code: 'AT',
            name: 'Austria',
            capital: 'Vienna',
            languages: [
              {
                code: 'de',
                name: 'German',
              },
            ],
            states: [
              {
                code: 'B',
                name: 'Burgenland',
              },
              {
                code: 'K',
                name: 'Kärnten',
              },
              {
                code: 'NÖ',
                name: 'Niederösterreich',
              },
              {
                code: 'OÖ',
                name: 'Oberösterreich',
              },
              {
                code: 'S',
                name: 'Salzburg',
              },
              {
                code: 'ST',
                name: 'Steiermark',
              },
              {
                code: 'T',
                name: 'Tirol',
              },
              {
                code: 'V',
                name: 'Vorarlberg',
              },
              {
                code: 'W',
                name: 'Wien',
              },
            ],
          },
          {
            code: 'AU',
            name: 'Australia',
            capital: 'Canberra',
            languages: [
              {
                code: 'en',
                name: 'English',
              },
            ],
            states: [
              {
                code: null,
                name: 'Ashmore and Cartier Islands',
              },
              {
                code: null,
                name: 'Australian Antarctic Territory',
              },
              {
                code: 'ACT',
                name: 'Australian Capital Territory',
              },
              {
                code: 'CX',
                name: 'Christmas Island',
              },
              {
                code: 'CC',
                name: 'Cocos Islands',
              },
              {
                code: null,
                name: 'Coral Sea Islands',
              },
              {
                code: 'HM',
                name: 'Heard Island and McDonald Islands',
              },
              {
                code: 'JBT',
                name: 'Jervis Bay Territory',
              },
              {
                code: 'NSW',
                name: 'New South Wales',
              },
              {
                code: 'NF',
                name: 'Norfolk Island',
              },
              {
                code: 'NT',
                name: 'Northern Territory',
              },
              {
                code: 'QLD',
                name: 'Queensland',
              },
              {
                code: 'SA',
                name: 'South Australia',
              },
              {
                code: 'TAS',
                name: 'Tasmania',
              },
              {
                code: 'VIC',
                name: 'Victoria',
              },
              {
                code: 'WA',
                name: 'Western Australia',
              },
            ],
          },
          {
            code: 'AW',
            name: 'Aruba',
            capital: 'Oranjestad',
            languages: [
              {
                code: 'nl',
                name: 'Dutch',
              },
              {
                code: 'pa',
                name: 'Panjabi / Punjabi',
              },
            ],
            states: [],
          },
          {
            code: 'AX',
            name: 'Åland',
            capital: 'Mariehamn',
            languages: [
              {
                code: 'sv',
                name: 'Swedish',
              },
            ],
            states: [],
          },
          {
            code: 'AZ',
            name: 'Azerbaijan',
            capital: 'Baku',
            languages: [
              {
                code: 'az',
                name: 'Azerbaijani',
              },
            ],
            states: [],
          },
          {
            code: 'BA',
            name: 'Bosnia and Herzegovina',
            capital: 'Sarajevo',
            languages: [
              {
                code: 'bs',
                name: 'Bosnian',
              },
              {
                code: 'hr',
                name: 'Croatian',
              },
              {
                code: 'sr',
                name: 'Serbian',
              },
            ],
            states: [],
          },
          {
            code: 'BB',
            name: 'Barbados',
            capital: 'Bridgetown',
            languages: [
              {
                code: 'en',
                name: 'English',
              },
            ],
            states: [],
          },
        ],
      },
    },
  },
];

const errorMocks = [
  {
    request: {query: COUNTRIES_QUERY},
    error: new Error('Cannot fetch countries!'),
    // result: {
    //   errors: [new GraphQLError('Cannot fetch DZ country details!')],
    // },
  },
];

it('countries-page renders with errors', async () => {
  const container = create(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <CountriesPage />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();

  await wait(0);

  expect(container).toMatchSnapshot();
});

it('countries-page renders without error', async () => {
  const container = create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CountriesPage />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();

  await wait(0);

  expect(container).toMatchSnapshot();
});
