import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: 300px;
  box-shadow: 1px 2px 6px;
  margin: 15px;
`;

const Photo = ({ url }) => (
  <StyledImg src={url} />
);

export default Photo;

Photo.propTypes = {
  url: PropTypes.string.isRequired,
};
