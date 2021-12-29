import React from 'react';
import styled from 'styled-components';
import JournalEntriesList from './JournalEntriesList';

const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSideBarTitle = styled.h3`
  margin-top: 30px;
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #65bbcc;
`;

const StyledButton = styled.button`
  width: 80%;
  align-self: center;
  margin: 20px;
`;

const NoEntriesParagraph = styled.p`
  padding: 10px;
  font-style: italic;
`;

const Sidebar = ({ entries, setCurrentDisplay, setDisplayForm }) => {
  const handleClick = () => {
    setDisplayForm(true);
  };

  return (
    <FlexList>
      <>
        <StyledSideBarTitle>Your Log</StyledSideBarTitle>
        {entries.length
          ? (
            <>
              <StyledButton onClick={handleClick} type="button">
                Add a Concert
              </StyledButton>
              <JournalEntriesList
                entries={entries}
                setCurrentDisplay={setCurrentDisplay}
                setDisplayForm={setDisplayForm}
              />
            </>
          ) : <NoEntriesParagraph>No entries</NoEntriesParagraph>}
      </>
    </FlexList>
  );
};

export default Sidebar;
