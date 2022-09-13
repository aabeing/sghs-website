import { Box, Button, Grid, Typography } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from './Loading';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../context/authContext';

function Test() {
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
    const googleUrl = sanitize("https://docs.google.com/presentation/d/e/2PACX-1vSBFHpwZyJbvXiODcAd2Qr2fqgN7t3A4wcE1y5aWD9QP9oFX1dPpsUM1ZmIWKGTdAakzARWyoHAkDfo/pub?start=false&loop=true&delayms=2000");
    const googleUrlEdit = "https://docs.google.com/document/d/1slXMrv_KfYSCIfOhO8ZRZs0oEuFYxToShPLO6tFn9dI/edit"
    return (
        <>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSBFHpwZyJbvXiODcAd2Qr2fqgN7t3A4wcE1y5aWD9QP9oFX1dPpsUM1ZmIWKGTdAakzARWyoHAkDfo/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Typography noWrap variant="h4" >
                    Test - {now.getFullYear()}
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
                {edit ? <iframe title='Test edit' src={googleUrlEdit}
                    width="100%"
                    height="100%"
                    frameBorder="0" marginHeight="0" marginWidth="0"
                    loading="lazy"
                    onLoad={iframeLoading}>Loading…</iframe> :

                    <Grid container justifyContent='center'>
                        <Grid item xs={6}>< iframe title='Test sheet' src={googleUrl} width="100%" height="600"
                            frameBorder="0" marginHeight="0" marginWidth="0"
                            loading="lazy"
                            onLoad={iframeLoading} > Loading…</iframe>
                        </Grid>
                    </Grid >
                }
            </Box>

            {load ? <Loading /> : null}
        </>
    )
}

export default Test