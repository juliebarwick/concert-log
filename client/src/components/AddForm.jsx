import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  line-height: 1.5;
  color: #272727;
  width: 100%;
  margin-top: 5px;
  border: 1px solid #767676;
  padding: .5rem .75rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  &:focus {
    outline: none;
    border: 1px solid #272727;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  height: 30vh;
  padding: .5rem .75rem;
  margin-top: 5px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #272727;
  background-color: #fff;
  border: 1px solid #767676;
  &:focus {
    outline: none;
    border: 1px solid #272727;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const StyledLabel = styled.label`
  font-family: 'Roboto Slab', serif;
`;

const StyledFormTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #65bbcc;
  margin-bottom: 1rem;
`;

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const WideButton = styled.button`
  width: 20%;
`;

const AddForm = ({ getEntries, setDisplayForm }) => {
  const [input, setInput] = useState({
    title: '',
    concertDate: '',
    entry: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/entry', input)
      .then((data) => {
        console.log(data);
        setInput({
          title: '',
          concertDate: '',
          entry: '',
          address: '',
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getEntries();
        setDisplayForm(false);
      });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <StyledFormTitle>Add a Concert</StyledFormTitle>
      <form>
        <StyledFormGroup>
          <StyledLabel htmlFor="title">
            Concert Title:
            <StyledInput
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={input.title}
            />
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="concertDate">
            Concert Date:
            <StyledInput
              type="text"
              id="concertDate"
              name="concertDate"
              onChange={handleChange}
              value={input.concertDate}
            />
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="address">
            Location:
            <StyledInput
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              value={input.address}
            />
          </StyledLabel>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="entry">
            Details:
            <StyledTextarea
              type="text"
              id="entry"
              name="entry"
              onChange={handleChange}
              rows="4"
              cols="20"
              value={input.entry}
            />
          </StyledLabel>
        </StyledFormGroup>
        <WideButton type="submit" onClick={handleSubmit}>Log</WideButton>
      </form>
    </>
  );
};

export default AddForm;
