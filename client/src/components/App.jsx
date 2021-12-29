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
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState({});
  const [displayForm, setDisplayForm] = useState(true);

  const getEntries = () => {
    setIsLoading(true);
    axios.get('/entries')
      .then((data) => {
        setEntries(data.data);
        setCurrentDisplay(data.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Error retrieving entries', err);
      });
  };

  useEffect(() => {
    getEntries();
  }, []);

  const handleSearch = (search) => {
    setSearchText(search);
  };

  const entriesDisplay = entries.filter((e) => {
    const search = searchText.toLowerCase();
    return (
      e.entry.toLowerCase().includes(search)
      || e.address.toLowerCase().includes(search)
      || e.title.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <MainHeader onSearch={handleSearch} />
      {!isLoading
        ? (
          <MainContainer>
            <SideColumn>
              <Sidebar
                entries={entriesDisplay}
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
        ) : <p>Loading</p>}
    </>
  );
};

export default App;
