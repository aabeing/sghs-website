import { Box, Button, Grid, Typography } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from './Loading';
import EditIcon from '@mui/icons-material/Edit';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import { useAuth } from '../../context/authContext';
import { LoadingButton } from '@mui/lab';

function TimeTable() {
    const { auth, isAdmin } = useAuth();
    const [load, setLoad] = useState(true);
    // const [edit, setEdit] = useState(false);
    const [dwldLoad, setDwldLoad] = useState(false)
    const iframeLoading = () => {
        setLoad(false);
    }
    const handleDwld = () => {
        // try {
        setDwldLoad(true);
        setTimeout(() => {
            setDwldLoad(false);
        }, 6000);

        // }

    }
    const now = new Date();
    // const removeDiv = function (id) {
    //     console.log(document.getElementById('iframeContain').contentWindow.document)
    //     const iframeDoc = document.getElementById('iframeContain')
    //     iframeDoc.document.getElementById(id).style.display = "none";
    // };
    const googleUrl = sanitize("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCoh7koM4wmNzJGcbcqsdvEbqdk5Sxo6yBBP_PfPU6SOF1v_FPhcuu_PaOCp2ECw/pubhtml?rm=minimal");
    const googleUrlEdit = sanitize("https://docs.google.com/spreadsheets/d/1fAouLkYuJQSsF7zSQk_fmB3HWbmptlKL/edit#gid=612064159");
    const googleDwldUrl = sanitize("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCoh7koM4wmNzJGcbcqsdvEbqdk5Sxo6yBBP_PfPU6SOF1v_FPhcuu_PaOCp2ECw/pub?output=pdf")
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                <Typography noWrap variant="h4" >
                    Time Table - {now.getFullYear()}
                </Typography>
                {auth.currentUser && isAdmin ?
                    <a href={googleUrlEdit} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button sx={{ ml: 2 }} variant='contained'
                            endIcon={<EditIcon />}>Edit
                        </Button>
                    </a>
                    : null}
                <LoadingButton loading={dwldLoad} href={googleDwldUrl}
                    onClick={handleDwld}
                    variant="contained" sx={{ ml: 2 }} endIcon={<DownloadIcon />}>
                    Download
                </LoadingButton>
            </div>

            <Box height="90vh" >
                <Grid container justifyContent='center'>
                    <Grid item xs={12} lg={10} xl={10}>< iframe title='Timetable sheet' src={googleUrl} width="100%" height="740"
                        // frameBorder="0" marginHeight="0" marginWidth="0"
                        loading="lazy"
                        onLoad={iframeLoading} > Loading…</iframe>
                    </Grid>
                </Grid >
            </Box>

            {load ? <Loading /> : null}
        </>
    )
}

export default TimeTable