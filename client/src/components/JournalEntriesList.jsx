import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntriesList = ({ entries, setCurrentDisplay, setDisplayForm }) => (
  entries.map((entry) => (
    <JournalEntry
      key={entry._id}
      entry={entry}
      setCurrentDisplay={setCurrentDisplay}
      setDisplayForm={setDisplayForm}
    />
  ))
);

export default JournalEntriesList;
