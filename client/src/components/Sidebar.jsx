import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import JournalEntry from './JournalEntry';

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

const Sidebar = ({
  entries,
  setCurrentDisplay,
  setDisplayForm,
  isEditable,
}) => {
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
              {!isEditable && (
                <StyledButton onClick={handleClick} type="button">
                  Add a Concert
                </StyledButton>
              )}
              {
                entries.map((entry) => (
                  <JournalEntry
                    key={entry._id}
                    entry={entry}
                    setCurrentDisplay={setCurrentDisplay}
                    setDisplayForm={setDisplayForm}
                  />
                ))
              }
            </>
          ) : <NoEntriesParagraph>No entries</NoEntriesParagraph>}
      </>
    </FlexList>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    concertDate: PropTypes.string,
    entry: PropTypes.string,
  })).isRequired,
  setCurrentDisplay: PropTypes.func.isRequired,
  setDisplayForm: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
};
