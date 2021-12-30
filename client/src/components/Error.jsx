import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  & div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const ErrorMessageBox = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  
  & p {
    margin: 8px 0;
    font-weight: bolder;
    color: red;
  }
`;

const Error = ({ errorMessage }) => (
  <ErrorContainer>
    <div>
      <ErrorMessageBox>
        <p>Something went wrong :(</p>
        <p>
          Error:
          {' '}
          {errorMessage}
        </p>
      </ErrorMessageBox>
    </div>
  </ErrorContainer>
);

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
