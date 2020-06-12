import React from 'react';
import styled from 'styled-components/native';

const BBError = ({message}) => (
  <Container>
    <Message>Error: {message || 'No message!'}</Message>
  </Container>
);

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 80px 0;
`;
const Message = styled.Text`
  padding: 2px;
  color: #b8bece;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 20px;
`;

export default BBError;
