import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/react-testing';
import CountryDetailsPage, {COUNTRY_QUERY} from '../../pages/countries/details';
import wait from 'waait';
import {create} from 'react-test-renderer';

const mocks = [
  {
    request: {
      query: COUNTRY_QUERY,
      variables: {
        code: 'AR',
      },
    },
    result: {
      data: {
        country: {
          code: 'AR',
          name: 'Argentina',
          languages: [
            {
              name: 'Spanish',
              code: 'es',
              rtl: false,
            },
            {
              name: 'Guarani',
              code: 'gn',
              rtl: false,
            },
          ],
          capital: 'Buenos Aires',
          currency: 'ARS',
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
          native: 'Argentina',
          phone: '54',
        },
      },
    },
  },
];
const paramsMock = mocks[0].result.data;
const errorMocks = [
  {
    request: {
      query: COUNTRY_QUERY,
      variables: {
        code: 'AR',
      },
    },
    error: new Error('Cannot fetch AR country details!'),
    // result: {
    //   errors: [new GraphQLError('Cannot fetch AR country details!')],
    // },
  },
];

test('country-page renders with errors', async () => {
  const container = create(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <CountryDetailsPage code={'AR'} route={{params: paramsMock}} />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();

  await wait(0);

  expect(container).toMatchSnapshot();
});

it('country-page renders without error', async () => {
  const container = create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CountryDetailsPage code={'AR'} route={{params: paramsMock}} />
    </MockedProvider>,
  );

  expect(container).toMatchSnapshot();

  await wait(0);

  expect(container).toMatchSnapshot();
});
