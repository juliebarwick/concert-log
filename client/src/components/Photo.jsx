import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 50%;
  box-shadow: 1px 2px 6px;
`;

const Photo = ({ url }) => (
  <StyledImg src={url} />
);

export default Photo;
