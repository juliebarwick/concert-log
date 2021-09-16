import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: 300px;
  box-shadow: 1px 2px 6px;
`;

const Photo = ({ url }) => (
  <StyledImg src={url} />
);

export default Photo;
