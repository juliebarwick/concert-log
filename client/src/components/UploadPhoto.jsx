import React from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import styled from 'styled-components';

const UploadPhoto = ({ doPatch, handleFileInputChange }) => (
  <StyledForm>
    <label htmlFor="file" className="custom-label">
      <MdAddAPhoto />
      &nbsp;&nbsp;Upload Your photos
      <input type="file" id="file" className="custom-file-input" onChange={handleFileInputChange} />
    </label>
    <ButtonDiv>
      <button type="button" onClick={doPatch}>Submit</button>
    </ButtonDiv>
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

export default UploadPhoto;
