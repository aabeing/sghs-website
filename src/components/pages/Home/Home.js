
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import ImageSlider from './ImageSlider';
import SquareIcon from '@mui/icons-material/Square';
import Loading from '../Loading';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import LatestBlogs from '../Blogs/LatestBlogs';
import axios from 'axios';


const sliderSettings = {
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  // centerMode: true,

};

const paperStyle = {
  margin: { xs: 2, md: 8 }, padding: { xs: 0.5, md: 3 }
}
const lineClampStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
}
function Home({ announceData, initCollectData }) {
  const nav = useNavigate();
  const [blogData, setBlogData] = useState([])
  const contentImage1 = "/images/welcomeImg.png"
  const contentPara1 = initCollectData.WelcomeMessage;
  const contentHead1 = "Welcome to St.George High School";
  const imagesArr = useMemo(() => [
    {
      alt: 'San Francisco- Oakland Bay Bridge, United States',
      src:
        '/images/w1.jpg',
    },
    {
      alt: 'Bird',
      src:
        '/images/w2.jpg',
    }
  ], []);
  const [load, setload] = useState(true)
  useEffect(() => {
    let preImg;
    let loadedCount = 0;
    const imgLen = imagesArr.length;
    imagesArr.forEach((picture) => {
      preImg = new Image();
      preImg.src = picture.src;
      preImg.onload = () => {
        // console.log("IMG loaded");
        loadedCount++;
        if (loadedCount === imgLen) {
          setload(false);
          // console.log("IMG Loading Done")
        }
      }
    });
    // Get blogger data
    axios.get(`https://blogger.googleapis.com/v3/blogs/1225166691027089983/posts?fetchBodies=true&fetchImages=true&maxResults=5&orderBy=PUBLISHED&status=LIVE&key=${process.env.REACT_APP_BLOGGER_APIKEY}`).then(res => {
      // console.log("axios");
      // console.log(res);
      // console.log(res.data.items);
      setBlogData(res.data.items);
    }
    ).catch(err => { alert("Blogger retrieve error"); console.log("Blogger retrieve error: ", err) })
  }, [imagesArr])
  if (initCollectData.WelcomeMessage && !load) {
    const goToAnnounce = () => {
      nav('/announcements');
    }
    return (
      <>
        <ImageSlider imagesArr={imagesArr} settings={sliderSettings} />
        <Paper sx={{ ...paperStyle }}>
          <Grid container columns={12} >
            <Grid item xs={12} lg={6} padding={2} sx={{ maxHeight: 750, overflow: 'hidden' }}>
              <Typography variant='h4' sx={{ fontSize: { xs: 27, sm: 35, md: 35, lg: 40 }, pt: 2, }}>
                {contentHead1}
              </Typography>
              {contentPara1.map((ele) => (<>

                <Typography variant='subtitle1' display='block' sx={{
                  fontSize: { xs: 16, sm: 17, md: 18, lg: 20 }
                }}>
                  {ele}
                </Typography>
                <br /></>
              ))}
            </Grid>

            {/* <Grid item xs={0.2} md={0.2} container justifyContent='center' alignContent='center'>
            <Divider variant='middle' orientation="vertical" style={{ height: '98%', width: '1px' }} />
            {/* <Divider orientation="vertical" textAlign='center' sx={{mr:'50%'}}/> */}
            {/* </Grid>  */}

            <Grid container xs={12} lg={6} padding={2} justifyContent='center' alignContent='center' component={Box} sx={{ overflow: 'hidden', display: { xs: 'none', lg: 'flex' } }}>
              <Box component="img"
                sx={{
                  // pl:'15%',
                  maxHeight: { sm: '50%', md: '75%' },
                  maxWidth: { sm: '50%', md: '75%' },
                  overflow: 'hidden',
                  objectFit: 'contain',
                }} alt="Saint George Image" src={contentImage1} loading="lazy"
              />
            </Grid>
          </Grid>
        </Paper>

        {announceData.length ?
          <Box sx={{ ...paperStyle, maxWidth: { xs: '100%', md: '50%' } }} >
            {/* <Box sx={{ height: 100 }}> */}
            <Typography variant='h4'>Announcements</Typography>
            <List onClick={goToAnnounce}
              sx={{
                width: '100%', maxHeight: 500, overflowY: 'auto',
                border: '3px solid', borderColor: 'text.primary',
                cursor: 'pointer'
              }}>
              {announceData.map((element, index) => {
                const ele = element.data;
                return (
                  <ListItem key={index} alignItems='flex-start' >
                    <ListItemAvatar key={index + '-1'}>
                      <Avatar>
                        <SquareIcon fontSize='small' color='primary' />
                      </Avatar>
                    </ListItemAvatar>
                    {/* sx={{ maxHeight: 120, textOverflow: 'ellipsis', overflow: 'hidden' }} */}
                    <ListItemText key={index + '-2'}
                      primary={
                        <Typography variant='h6'>{ele.heading}</Typography>
                      } secondary={
                        <>
                          {ele.timestamp.toDate().toDateString()}
                          <Typography color='text.primary'
                            sx={{
                              ...lineClampStyle,
                              WebkitLineClamp: '2',
                            }}
                          >
                            {ele.content}
                          </Typography>
                        </>
                      } />
                  </ListItem>)
              })}

            </List>
            {/* </Box> */}
          </Box>
          : null}
        <Box sx={{ ...paperStyle }}>
          {blogData.length ? <LatestBlogs blogData={blogData} /> : null}
        </Box>


      </>
    )
  }
  else {
    // return <Box sx={{ height: '100vh', textAlign: 'center', pt: '40vh' }} component="h1">Loading...</Box>
    return <Loading />
  }
}

export default Home