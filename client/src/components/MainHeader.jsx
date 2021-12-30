import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from './Search';

const StyledHeader = styled.header`
  background: #b07b9a;
  background: linear-gradient(345deg, #b07b9a, #65bbcc);
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const MainHeader = ({ onSearch }) => (
  <StyledHeader>
    <div>
      <Title>Concert Log</Title>
      <h3>a place to log your concerts</h3>
    </div>
    <Search onSearch={onSearch} />
  </StyledHeader>
);

export default MainHeader;

MainHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
