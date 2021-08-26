import React from 'react';
import JournalEntriesList from './JournalEntriesList';
import styled from 'styled-components';

const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledSideBarTitle = styled.h3`
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: .1em;
  padding: 10px;
  color: #65bbcc;
`;

const StyledButton = styled.button`
  width: 80%;
  align-self: center;
  margin: 20px;
`;

const Sidebar = ({ entries, setCurrentDisplay, setDisplayForm }) => {
  const handleClick = () => {
    setDisplayForm(true);
  };

  return (
    <FlexList>
      <StyledButton onClick={handleClick} type="button">
        Add a Concert
      </StyledButton>
      <StyledSideBarTitle>Your Log</StyledSideBarTitle>
      <JournalEntriesList
        entries={entries}
        setCurrentDisplay={setCurrentDisplay}
        setDisplayForm={setDisplayForm}
      />
    </FlexList>
  );
};

export default Sidebar;
