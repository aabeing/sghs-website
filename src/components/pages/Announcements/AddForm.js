import { TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'

function AddForm() {
  const now = new Date();
  now.setDate(now.getDate() + 1)
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  // console.log(now.toISOString().slice(0, 16))

  const [inputData, setInputData] = useState({
    heading: '', content: '',
    expiryDate: now.toISOString().slice(0, 16)
  })
  // console.log("TEST: ", data)
  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    const inpName = event.target.name
    const inpVal = event.target.value
    setInputData({ ...inputData, [inpName]: inpVal });
    // console.log(inputData)

  }
  return (
    <>
      {/* <Divider /> */}
      <form style={{ marginLeft: 30, marginRight: 30 }}>
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
        // value={value}
        // onChange={handleChange}
        />
        <TextField
          name='expiryDate'
          onChange={handleChange}
          value={inputData.expiryDate}
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
      </form>
    </>

  )
}

export default AddForm