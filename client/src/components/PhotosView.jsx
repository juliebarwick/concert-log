import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Photo from './Photo';

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 30px;
`;

const PhotosView = ({ photos }) => (
  <StyledDiv>
    {photos.length
      ? photos.map((photo) => <Photo url={photo} key={photo} />)
      : null}
  </StyledDiv>
);

export default PhotosView;

PhotosView.defaultProps = {
  photos: [],
};
