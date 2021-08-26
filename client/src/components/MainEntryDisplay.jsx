import React, { useState, useEffect } from 'react';
import { formatDate } from '../helpers';
import axios from 'axios';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #65bbcc;
`;

const StyledDate = styled.h2`
  color: #8a8a8a;
  text-align: center;
  font-size: 1.2em;
`;

const EntryHeader = styled.div`
  margin: 10px;
`;

const MainEntryDisplay = ({ currentDisplay }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const options = {
      url: './upload',
    };
    // setPhotos(currentDisplay.photos)
  }, []);

  const doPatch = () => {
    const options = {
      url: `/upload/${currentDisplay._id}`,
      method: 'patch',
      data: {
        photo: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    };

    axios(options)
      .then((data) => console.log('data from the patch', data))
      .catch((err) => console.log('err from the patch', err));
  };

  return (
    <>
      <div>
        <EntryHeader>
          <StyledTitle>{currentDisplay.title}</StyledTitle>
          <StyledDate>{formatDate(currentDisplay.concertDate)}</StyledDate>
        </EntryHeader>
        <p>{currentDisplay.entry}</p>
      </div>
      <div>
        {photos.length ? <p>there are photos</p> : null}
      </div>
      <input type="file" className="custom-file-input"></input>
      <button onClick={doPatch}>Upload Your photos</button>
    </>
  );
};

export default MainEntryDisplay;
