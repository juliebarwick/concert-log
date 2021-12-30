import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Sidebar from './Sidebar';
import MainEntryDisplay from './MainEntryDisplay';
import MainHeader from './MainHeader';
import AddForm from './AddForm';
import Error from './Error';
import { formatDate } from '../utils';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  column-gap: 1em;
`;

const SideColumn = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  border-right: 1px solid #edebe6;
`;

const MainColumn = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  margin: 30px;
`;

const App = () => {
  const [entries, setEntries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [currentDisplay, setCurrentDisplay] = useState({});
  const [displayForm, setDisplayForm] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const getEntries = (id) => {
    setIsLoading(true);
    axios.get('/entries')
      .then(({ data }) => {
        setEntries(data);
        setIsLoading(false);
        if (id) {
          const newCurrentDisplay = data.filter((r) => id === r._id);
          setCurrentDisplay(newCurrentDisplay[0]);
        } else {
          setCurrentDisplay(data[0]);
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handlePostOrPatchEntry = (entry, isPost) => {
    const options = {
      url: `/entry${isPost ? '' : `/${currentDisplay._id}`}`,
      method: isPost ? 'post' : 'patch',
      data: entry,
    };
    setIsLoading(true);
    axios(options)
      .then((res) => {
        setDisplayForm(false);
        setIsLoading(false);
        setIsEditable(false);
        getEntries(res.data);
      })
      .catch((err) => {
        setError(err);
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

  const createFormState = () => {
    const formValues = {
      title: '',
      concertDate: '',
      entry: '',
      address: '',
    };
    if (isEditable) {
      formValues.title = currentDisplay.title;
      formValues.concertDate = formatDate(currentDisplay.concertDate);
      formValues.entry = currentDisplay.entry;
      formValues.address = currentDisplay.address;
    }
    return formValues;
  };

  const handleEditStatusChange = (shouldEdit) => {
    setIsEditable(shouldEdit);
    setDisplayForm(shouldEdit);
  };

  if (error.message) {
    return (
      <Error errorMessage={error.message} />
    );
  }

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
                isEditable={isEditable}
              />
            </SideColumn>
            <MainColumn>
              {displayForm
                ? (
                  <AddForm
                    initialFormValues={createFormState()}
                    isEditable={isEditable}
                    onSubmit={handlePostOrPatchEntry}
                    onCancel={handleEditStatusChange}
                  />
                )
                : (
                  <MainEntryDisplay
                    onEdit={handleEditStatusChange}
                    currentDisplay={currentDisplay}
                    setError={setError}
                    getEntries={getEntries}
                  />
                )}
            </MainColumn>
          </MainContainer>
        ) : <p>Loading</p>}
    </>
  );
};

export default App;
