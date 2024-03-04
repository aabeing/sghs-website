import { Box, Button, Grid, Typography } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from './Loading';
import EditIcon from '@mui/icons-material/Edit';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../context/authContext';

function Staff() {
    const { auth, isAdmin } = useAuth();
    // const [edit, setEdit] = useState(false);
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
    const googleUrl = sanitize("https://docs.google.com/document/d/e/2PACX-1vTBPNo_wwAqqoYP5VnScKOXX-Bebnuh3ge5LaLFzJ0SUS7G6dvDKvQsQTB8Eis-t-bnCqVCwk_yus7T/pub?embedded=true");
    const googleUrlEdit = sanitize("https://docs.google.com/document/d/1slXMrv_KfYSCIfOhO8ZRZs0oEuFYxToShPLO6tFn9dI/edit")
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Typography noWrap variant="h4" >
                    Staff - {now.getFullYear()}
                </Typography>
                {auth.currentUser && isAdmin ?
                    <a href={googleUrlEdit} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button sx={{ ml: 2 }} variant='contained'
                            endIcon={<EditIcon />}>Edit
                        </Button>
                    </a>
                    : null}
            </div>
            <Box height="90vh" >
                <Grid container justifyContent='center'>
                    <Grid item xs={12} lg={10} xl={7}>< iframe title='Staff sheet' src={googleUrl} width="100%" height="800"
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

export default Staff