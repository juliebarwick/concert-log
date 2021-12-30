import React from 'react';
import PropTypes from 'prop-types';
import { MdAddAPhoto } from 'react-icons/md';
import styled from 'styled-components';

const UploadPhoto = ({ onSubmit, handleFileInputChange, hasBeenUploaded }) => (
  <StyledForm onSubmit={onSubmit}>
    {hasBeenUploaded ? (
      <ButtonDiv>
        <button type="submit">Submit Photo</button>
      </ButtonDiv>
    ) : (
      <Label htmlFor="file" className="custom-label">
        <MdAddAPhoto />
        &nbsp;&nbsp;Upload a photo
        <input type="file" id="file" className="custom-file-input" onChange={handleFileInputChange} />
      </Label>
    )}
  </StyledForm>
);

const ButtonDiv = styled.div`
  margin: 10px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  padding: 10px 20px;
  font-family: 'Roboto Slab', serif;
  font-size: .8em;
  text-transform: uppercase;
  border: 1px solid #272727;
  display: block;
  width: auto;
  cursor: pointer;
  background-color: #272727;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  &:hover {
    color: #a5a5a5;
  }
`;

export default UploadPhoto;

UploadPhoto.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleFileInputChange: PropTypes.func.isRequired,
  hasBeenUploaded: PropTypes.bool.isRequired,
};
