import { Alert, Button, Collapse, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import addFireDoc from '../../../fireConfig/addDoc';
import Loading from '../Loading';
import { useEffect } from 'react';
import { useMemo } from 'react';

function AddForm() {
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [onSuccessAlert, setOnSuccessAlert] = useState(false);
  const now = useMemo(()=>{
    const now = new Date();
    now.setDate(now.getDate() + 1)
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now;
  },[])

  // console.log(now.toISOString().slice(0, 16))
  const inpInit = {
    heading: '', content: '',
    expiryDate: now.toISOString().slice(0, 16)
  }

  const [inputData, setInputData] = useState(inpInit)
  // console.log("TEST: ", data)
  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    const inpName = event.target.name
    const inpVal = event.target.value
    setInputData({ ...inputData, [inpName]: inpVal });
    // console.log(inputData)

  }
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setSubmitBtnDisabled(true);
      const docData = { ...inputData, expiryDate: new Date(inputData.expiryDate) }
      console.log(docData)
      const docRef = await addFireDoc('Announcements', docData);
      console.log("Document written with ID: ", docRef.id);
      setSubmitBtnDisabled(false);
      setOnSuccessAlert(true)
    }
    catch (error) {
      setSubmitBtnDisabled(false);
      alert(error.message);
      console.log(error);
    }
  }
  useEffect(() => {
    if (onSuccessAlert) {
      const timeId = setTimeout(() => {
        // After 2 seconds
        setInputData({
          heading: '', content: '',
          expiryDate: now.toISOString().slice(0, 16)
        });
        setOnSuccessAlert(false);

      }, 2000)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [onSuccessAlert,now]);
  return (
    <>
      <Collapse in={onSuccessAlert}>
        <Alert severity="success">Announcement created</Alert>
      </Collapse>
      <Divider sx={{ pt: 2 }} />
      <form style={{ marginLeft: 30, marginRight: 30 }} onSubmit={handleSubmit}>
        <TextField name='heading'
          onChange={handleChange}
          required margin="normal" label="Heading" variant="filled" fullWidth
          value={inputData.heading} /><br />
        <TextField
          name='content'
          onChange={handleChange}
          margin="normal" fullWidth variant="filled"
          label="Content"
          multiline
          rows={4}
          value={inputData.content}
        />
        <TextField
          name='expiryDate'
          onChange={handleChange}
          value={inputData.expiryDate}
          variant="filled"
          margin="normal"
          id="datetime-local"
          required
          label="Expiry DateTime"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography color='primary'> IMP: After the Expiry, announcement will be removed from home page. Also Expiry info won't be visible to the user</Typography>
        <Typography color='primary'> Announcement date will be current datetime.</Typography>
        {/* <Container> */}
        <Button sx={{
          margin: 3
        }}
          disabled={submitBtnDisabled}
          size='large'
          fullWidth type='submit' variant="contained" endIcon={<AddIcon />} aria-label="Add Announcement" >
          Add
        </Button>
        {/* </Container> */}

      </form>
      {submitBtnDisabled ? <Loading /> : null}

    </>

  )
}

export default AddForm