import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import PhotosView from './PhotosView';
import EntryMap from './EntryMap';
import UploadPhoto from './UploadPhoto';
import Edit from './Edit';
import { formatDate } from '../utils';

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

const MainEntryDisplay = ({
  currentDisplay,
  onEdit,
  setError,
  getEntries,
}) => {
  const [photoToUpload, setPhotoToUpload] = useState([]);
  const [coords, setCoords] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  useEffect(() => {
    if (currentDisplay.address) {
      axios.get('/mapaddress', { params: { address: currentDisplay.address } })
        .then(({ data }) => {
          const { lat } = data.geometry.location;
          const { lng } = data.geometry.location;
          setCoords({
            lat,
            lng,
          });
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }, [currentDisplay]);

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photoToUpload);

    const options = {
      url: `/upload/${currentDisplay._id}`,
      method: 'patch',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    axios(options)
      .then(() => {
        setPhotoToUpload([]);
        setImagePreview([]);
        getEntries(currentDisplay._id);
      })
      .catch((err) => {
        setError(err);
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
        <Edit onEdit={onEdit} />
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
        onSubmit={handlePhotoUpload}
        handleFileInputChange={handleFileInputChange}
        hasBeenUploaded={imagePreview.length > 0}
      />
      {coords.lat
        ? <EntryMap location={coords} />
        : null}
    </>
  );
};

export default MainEntryDisplay;

MainEntryDisplay.propTypes = {
  currentDisplay: PropTypes.shape({
    _id: PropTypes.string,
    address: PropTypes.string,
    concertDate: PropTypes.string,
    entry: PropTypes.string,
    title: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  getEntries: PropTypes.func.isRequired,
};
