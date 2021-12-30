import { MdModeEditOutline } from 'react-icons/md';
import { IconContext } from 'react-icons';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Edit = ({ onEdit }) => (
  <IconContainer>
    <IconContext.Provider value={{ size: '1.5em', style: { cursor: 'pointer' } }}>
      <MdModeEditOutline onClick={() => onEdit(true)} />
    </IconContext.Provider>
  </IconContainer>
);

export default Edit;

Edit.propTypes = {
  onEdit: PropTypes.func.isRequired,
};
