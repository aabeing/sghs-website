import { Box } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from './Loading';

function Admissions() {
  // <iframe src="" >Loading…</iframe>
  const [load, setLoad] = useState(true);
  const iframeLoading = () => {
    setLoad(false);
  }
  const formUrl = sanitize("https://docs.google.com/forms/d/e/1FAIpQLSepvARM_Z_BpoJURksyCuB2esOByo_MNixKI24vMq7dLwtRSQ/viewform?embedded=true");
  return (
    <>
      <Box height="80vh">
        <iframe title='admission form' src={formUrl} width="100%" height="100%" frameborder="0"
          loading="lazy" marginheight="0" marginwidth="0"
          onLoad={iframeLoading}>Loading…</iframe>
      </Box>
      {load ? <Loading /> : null}
    </>
  )
}

export default Admissions
