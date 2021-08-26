import React, { useState } from 'react';
import styled from 'styled-components';
import { formatDate } from '../helpers';

const removeFinalPunctuation = (word) => {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  if (punctuation.test(word[word.length - 1])) {
    return word.split('').slice(0, word.length - 1).join('');
  }
  return word;
};

const truncate = (text, numOfWords = 5) => {
  const splitText = text.split(' ');
  if (splitText.length <= numOfWords) {
    return text;
  }
  const finalWord = splitText[numOfWords - 1];
  const newFinalWord = removeFinalPunctuation(finalWord);

  const result = splitText.slice(0, numOfWords - 1).join(' ');
  return `${result} ${newFinalWord}...`;
};

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
