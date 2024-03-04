import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { sanitize } from 'dompurify';
import { useState } from 'react';
import Loading from '../Loading';
import EditIcon from '@mui/icons-material/Edit';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../../context/authContext';
import LatestBlogs from '../Blogs/LatestBlogs';
import { useEffect } from 'react';
import axios from 'axios';

function Results() {
    const { auth, isAdmin } = useAuth();
    const [blogData, setBlogData] = useState([])
    // const [edit, setEdit] = useState(false);
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
        axios.get(`https://blogger.googleapis.com/v3/blogs/1225166691027089983/posts?fetchBodies=true&fetchImages=true&labels=results&maxResults=4&orderBy=PUBLISHED&status=LIVE&key=${process.env.REACT_APP_BLOGGER_APIKEY}`).then(res => {

            setBlogData(res.data.items);
        }
        ).catch(err => { alert("Blogger retrieve error"); console.log("Blogger retrieve error: ", err) })
    }, []);
    // const isSmall = useMediaQuery(theme.breakpoints.between('xs', 'md'));
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('md'));
    const isSmToMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    // let slideframeHeight;
    let boxHeight;
    let customFontSize;
    if (isLarge) {
        // slideframeHeight = '600'
        boxHeight = '600'
        customFontSize = 45;
    }
    else if (isSmToMd) {
        // slideframeHeight = '450'
        boxHeight = '450';
        customFontSize = 30;
    }
    else {
        // slideframeHeight = '210'
        boxHeight = '210';
        customFontSize = 25;
    }
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                <Typography noWrap variant="h4" fontSize={customFontSize} fontWeight='bold'>
                    Results
                </Typography>
                {auth.currentUser && isAdmin ?
                    <a href={googleUrlEdit} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button sx={{ ml: 2 }} variant='contained'
                            endIcon={<EditIcon />}>Edit
                        </Button>
                    </a>
                    : null}
            </div>
            <Box height={boxHeight} >


                <Grid container justifyContent='center'>
                    {/* <Grid item xl={1} sx={{ display: { xs: 'none', xl: 'inline-block' } }}></Grid> */}
                    <Grid item xs={12} lg={10} xl={8}>
                        <iframe src={googleUrl}
                            title='Results view page' frameborder="0" width="100%" height={boxHeight} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" loading="lazy"
                            onLoad={iframeLoading}>
                        </iframe>
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
            </Box>
            <Box sx={{ margin: { xs: 2, md: 2 }, padding: { xs: 0.5, md: 3 } }}>
                {blogData.length !== 0 ?
                    <>
                        <Typography noWrap variant="h4" fontSize={customFontSize} fontWeight='bold'>
                            Exam Results
                        </Typography>
                        <LatestBlogs blogData={blogData} />
                    </> : null}
            </Box>
            {load ? <Loading /> : null}
        </>
    )
}

export default Results