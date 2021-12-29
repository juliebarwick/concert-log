import React from 'react';
import styled from 'styled-components';
import { formatDate, truncate } from '../utils';

const StyledEntry = styled.div`
  border-bottom: 1px solid #edebe6;
  transition: background-color 0.3s ease-out;
  &:hover {
    cursor: pointer;
    background-color: #edebe6;
  }
  padding: 15px;
`;

const StyledDate = styled.p`
  color: #8a8a8a;
  font-size: .7em;
`;

const StyledTitle = styled.p`
  font-weight: 500;
`;

const StyledText = styled.p`
  font-size: .8em;
`;

const JournalEntry = ({ entry, setCurrentDisplay, setDisplayForm }) => {
  const handleClick = () => {
    setCurrentDisplay(entry);
    setDisplayForm(false);
  };

  return (
    <StyledEntry onClick={handleClick}>
      <StyledTitle>{truncate(entry.title, 15)}</StyledTitle>
      <StyledDate>{formatDate(entry.concertDate)}</StyledDate>
      <StyledText>{truncate(entry.entry, 20)}</StyledText>
    </StyledEntry>
  );
};

export default JournalEntry;
