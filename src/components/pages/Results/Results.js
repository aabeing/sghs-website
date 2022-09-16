import { Box, Button, Grid, Typography } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from '../Loading';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../../context/authContext';
import ResultFrame from './ResultFrame';
import LatestBlogs from '../Blogs/LatestBlogs';
import { useEffect } from 'react';
import axios from 'axios';

function Results() {
    const { auth, isAdmin } = useAuth();
    const [blogData, setBlogData] = useState([])
    const [edit, setEdit] = useState(false);
    const [load, setLoad] = useState(true);
    const iframeLoading = () => {
        setLoad(false);
    }
    // const now = new Date();
    // const removeDiv = function (id) {
    //     console.log(document.getElementById('iframeContain').contentWindow.document)
    //     const iframeDoc = document.getElementById('iframeContain')
    //     iframeDoc.document.getElementById(id).style.display = "none";
    // };
    const googleUrl = sanitize("https://docs.google.com/presentation/d/e/2PACX-1vRV_UNizbjTvMq4dX8BbV4FGmYeedO6R9KHUybCPWXEZsR59blsIHXyacuXWq_0077PeATw_ENjUF3E/embed?start=true&loop=true&delayms=3000&rm=minimal");
    const googleUrlEdit = sanitize("https://docs.google.com/presentation/d/1_0pRcAVv3ekCPWVBlOmesmQxdnlYUK0kHUjAHLbYwKE/edit")

    useEffect(() => {
        // Get blogger data
        axios.get(`https://blogger.googleapis.com/v3/blogs/1225166691027089983/posts?fetchBodies=true&fetchImages=true&labels=home&maxResults=4&orderBy=PUBLISHED&status=LIVE&key=${process.env.REACT_APP_BLOGGER_APIKEY}`).then(res => {

            setBlogData(res.data.items);
        }
        ).catch(err => { alert("Blogger retrieve error"); console.log("Blogger retrieve error: ", err) })
    }, []);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Typography noWrap variant="h4" >
                    Results
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
            <Box height="70vh" >
                {edit ? <iframe title='Results edit' src={googleUrlEdit}
                    width="100%"
                    height="100%"
                    // frameBorder="0" marginHeight="0" marginWidth="0"
                    loading="lazy"
                    onLoad={iframeLoading}>Loading…</iframe> :

                    <Grid container justifyContent='center'>
                        {/* <Grid item xl={1} sx={{ display: { xs: 'none', xl: 'inline-block' } }}></Grid> */}
                        <Grid item xs={12} lg={10} xl={8}>
                            <ResultFrame iframeLoading={iframeLoading} googleUrl={googleUrl} />
                        </Grid>
                        {/* <Grid item xl={4} sx={{ display: { xs: 'none', xl: 'inline-block' } }}>
                            <Box sx={{
                                ml: '30%', borderRadius: '50%', height: 180, width: 175,
                                backgroundColor: '#242582',
                                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                            }}>
                                <Typography color='common.white' variant='h4'>
                                    100%
                                </Typography>
                                <Typography color='common.white' variant='h6'>
                                    Success
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{
                                    borderRadius: '50%', height: 120, width: 120,
                                    backgroundColor: '#02A4C6', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                                }}>
                                    <Typography color='common.white' variant='h4'>
                                        100%
                                    </Typography>
                                    <Typography color='common.white' variant='h6'>
                                        Success
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    ml: 4, borderRadius: '50%', height: 150, width: 150,
                                    backgroundColor: '#242582', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                                }}>
                                    <Typography color='common.white' variant='h4'>
                                        48
                                    </Typography>
                                    <Typography color='common.white' variant='h6'>
                                        Full A+
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid> */}
                    </Grid >
                }
            </Box>
            <Box sx={{ margin: { xs: 2, md: 8 }, padding: { xs: 0.5, md: 3 } }}>
                <Typography noWrap variant="h4" >
                    Previous Year Results
                </Typography>
                {blogData ? <LatestBlogs blogData={blogData} /> : null}
            </Box>
            {load ? <Loading /> : null}
        </>
    )
}

export default Results