import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Sidebar from './Sidebar';
import MainEntryDisplay from './MainEntryDisplay';
import MainHeader from './MainHeader';
import AddForm from './AddForm';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 1em;
`;

const SideColumn = styled.div`
  grid-column-start: 1;
  border-right: 1px solid #edebe6;
`;

const MainColumn = styled.div`
  grid-column-start: 2;
  margin: 30px;
`;

const App = () => {
  const [entries, setEntries] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState({});
  const [displayForm, setDisplayForm] = useState(false);

  const getEntries = () => {
    axios.get('/entries')
      .then((data) => {
        setEntries(data.data);
        setCurrentDisplay(data.data[0]);
      })
      .catch((err) => {
        console.log('Error retrieving entries', err);
      });
  };

  useEffect(() => {
    getEntries();
  }, []);

  if (!entries.length) {
    // TODO: get loading image or something
    // and display some text like no entries, start a new one
    return null;
  }

  return (
    <>
      <MainHeader />
      {!entries.length
        ? <button type="button">Add a journal entry!</button>
        : (
          <>
            <MainContainer>
              <SideColumn>
                <Sidebar
                  entries={entries}
                  setCurrentDisplay={setCurrentDisplay}
                  setDisplayForm={setDisplayForm}
                />
              </SideColumn>
              <MainColumn>
                {displayForm
                  ? <AddForm getEntries={getEntries} setDisplayForm={setDisplayForm} />
                  : <MainEntryDisplay currentDisplay={currentDisplay} />}
              </MainColumn>
            </MainContainer>
          </>
        )}
    </>
  );
};

export default App;
