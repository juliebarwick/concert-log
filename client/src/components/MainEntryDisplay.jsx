import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { formatDate } from '../helpers';
import PhotosView from './PhotosView';
import EntryMap from './EntryMap';
import UploadPhoto from './UploadPhoto';

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

const StyledImg = styled.img`
  width: 100px;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const MainEntryDisplay = ({ currentDisplay }) => {
  const [photoToUpload, setPhotoToUpload] = useState([]);
  const [coords, setCoords] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  useEffect(() => {
    if (currentDisplay) {
      axios.get('/mapaddress', { params: { address: currentDisplay.address } })
        .then((data) => {
          const { lat } = data.data.geometry.location;
          const { lng } = data.data.geometry.location;
          setCoords({
            lat,
            lng,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentDisplay]);

  const doPatch = () => {
    // TODO: rename, or make into a patch request
    const formData = new FormData();
    formData.append('photo', photoToUpload);
    formData.append('id', currentDisplay._id);

    axios.post('/uploadmulter', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((data) => {
        console.log('data from the doPatch', data);
        setPhotoToUpload([]);
        setImagePreview([]);
      })
      .catch((err) => {
        console.log('err from the doPatch', err);
      });
  };

  const handleFileInputChange = (e) => {
    setPhotoToUpload(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div>
        <EntryHeader>
          <StyledTitle>{currentDisplay.title}</StyledTitle>
          <StyledDate>{formatDate(currentDisplay.concertDate)}</StyledDate>
        </EntryHeader>
        <p>{currentDisplay.entry}</p>
        <PhotosView photos={currentDisplay.photos} />
      </div>
      {imagePreview.length
        ? (
          <ImgDiv>
            <StyledImg src={imagePreview} />
          </ImgDiv>
        )
        : null}
      <UploadPhoto
        doPatch={doPatch}
        handleFileInputChange={handleFileInputChange}
      />
      {/* {coords.length
        ? <EntryMap location={coords} />
        : null} */}
        <EntryMap location={coords} />
    </>
  );
};

export default MainEntryDisplay;
