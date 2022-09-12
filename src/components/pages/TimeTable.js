import { Box, Button, ButtonBase, Grid, Typography } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from './Loading';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../context/authContext';

function TimeTable() {
    const { auth, isAdmin } = useAuth();
    const [load, setLoad] = useState(true);
    const [edit, setEdit] = useState(false);
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
    const googleUrlEdit = "https://docs.google.com/document/d/1NrIt84Iwk947bOhO_camEMc_NhG2TAsCcD263GU1PnQ/edit"
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center',margin: 10 }}>
                <Typography noWrap variant="h4" >
                    Time Table - {now.getFullYear()}
                </Typography>
                {auth.currentUser && isAdmin ?
                    edit ?
                        <Button onClick={() => setEdit(false)} sx={{ ml: 2 }} variant='contained'
                            endIcon={<ArrowBackIcon />}>Go Back
                        </Button>
                        :
                        <Button onClick={() => setEdit(true)} sx={{ ml: 2 }} variant='contained'
                            endIcon={<EditIcon />}>Edit
                        </Button>
                    : null}
            </div>
            <Box height="90vh" >
                {edit ? <iframe title='Timetable edit' src={googleUrlEdit}
                    width="100%"
                    height="100%"
                    // frameBorder="0" marginHeight="0" marginWidth="0"
                    loading="lazy"
                    // frameBorder='none'
                    onLoad={iframeLoading}>Loading…</iframe> :

                    <Grid container justifyContent='center'>
                        <Grid item xs={6}>< iframe title='Timetable sheet' src={googleUrl} width="100%" height="600"
                            // frameBorder="0" marginHeight="0" marginWidth="0"
                            loading="lazy"
                            // frameBorder='none'
                            onLoad={iframeLoading} > Loading…</iframe>
                        </Grid>
                    </Grid >
                }
            </Box>

            {load ? <Loading /> : null}
        </>
    )
}

export default TimeTable