import { Box, Grid, Typography } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from './Loading';

function TimeTable() {
    const [load, setLoad] = useState(true);
    const iframeLoading = () => {
        setLoad(false);
    }
    const now = new Date();

    // const removeDiv = function (id) {
    //     console.log(document.getElementById('iframeContain').contentWindow.document)
    //     const iframeDoc = document.getElementById('iframeContain')
    //     iframeDoc.document.getElementById(id).style.display = "none";
    // };
    const googleUrl = sanitize("https://docs.google.com/document/d/e/2PACX-1vQbbrQWQxx0bQlX8POPBoOABf5WwgPAvBnYd_XvW1JOJg5j5pVwhAUxwrbuSuzZsz7Ws3c8FS5jmB2W/pub?embedded=true");
    const googleUrl2 = sanitize("https://docs.google.com/document/d/e/2PACX-1vQbbrQWQxx0bQlX8POPBoOABf5WwgPAvBnYd_XvW1JOJg5j5pVwhAUxwrbuSuzZsz7Ws3c8FS5jmB2W/pub")

    return (
        <>
            <Typography variant='h4' sx={{ mt: 5 }} align='center'>Time Table - {now.getFullYear()}</Typography>
            {/* <Grid container justifyContent='center'> */}
                {/* <Grid item xs={2}></Grid> */}
                {/* <Grid item xs={6}> */}
                    <Box height="70vh" alignContent='center' >
                        {/* <iframe src={sheetUrl} onLoad={iframeLoading}></iframe> */}
                        <iframe
                            // style={{
                            //     position:'absolute',
                            //     left: '50%',
                            //     top: '50%',
                            //     // transform: 'translate(-50%,-50%)'
                            // }}
                            title='Timetable sheet' 
                            src={googleUrl2}
                            width="100%"
                            height="600"
                            // frameBorder="0" marginHeight="0" marginWidth="0"
                            loading="lazy"
                            // frameBorder='none'
                            onLoad={iframeLoading}>Loading…</iframe>
                    </Box>
                {/* </Grid> */}
            {/* </Grid > */}
            {load ? <Loading /> : null}
        </>
    )
}

export default TimeTable