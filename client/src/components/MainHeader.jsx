import React from 'react';
import Search from './Search';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #b07b9a;
  background: linear-gradient(345deg, #b07b9a, #65bbcc);
  color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const MainHeader = () => (
  <StyledHeader>
    <Title>Concert Log</Title>
    <h3>a place to log your concerts</h3>
    <Search />
  </StyledHeader>
);

export default MainHeader;
