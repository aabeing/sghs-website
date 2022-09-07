import { Box } from '@mui/material';
import React from 'react'

function Admissions() {
  const myHTML = `https://forms.gle/x4TEFBuKkKua15m67`;
  // <iframe src="" >Loading…</iframe>
  return (
    <Box height="80vh">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSepvARM_Z_BpoJURksyCuB2esOByo_MNixKI24vMq7dLwtRSQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Box>
  )
}

export default Admissions
