
import { Avatar, Box, Button, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import ImageSlider from './Slider/ImageSlider';
import SquareIcon from '@mui/icons-material/Square';
import Loading from '../Loading';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useMemo } from 'react';
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
  // const contentImage1 = "/images/saintGeorge.jpg"
  const contentPara1 = initCollectData.WelcomeMessage?.split('\\n');
  // console.log("TEST \n", initCollectData.WelcomeMessage?.split('\n'))
  // const contentHead1 = "Welcome to St.George High School";
  const contentHead1 = initCollectData.aboutHead;
  // const imagesArr = useMemo(() => [
  //   {
  //     alt: 'San Francisco- Oakland Bay Bridge, United States',
  //     src:
  //       '/images/w1.jpg',
  //   },
  //   {
  //     alt: 'Bird',
  //     src:
  //       '/images/w2.jpg',
  //   }
  // ], []);
  const imagesArr = initCollectData.SliderImg;
  let contentImage1;
  if (initCollectData?.aboutImgData) {
    contentImage1 = initCollectData?.aboutImgData[0].src;
  }
  const [load, setload] = useState(true)
  useEffect(() => {
    let preImg;
    let loadedCount = 0;
    if (imagesArr) {
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
      if (imgLen === 0) {
        setload(false);
      }
    }
    // Get blogger data
    axios.get(`https://blogger.googleapis.com/v3/blogs/1225166691027089983/posts?fetchBodies=true&fetchImages=true&labels=events&maxResults=4&orderBy=PUBLISHED&status=LIVE&key=${process.env.REACT_APP_BLOGGER_APIKEY}`).then(res => {
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
    const goToAbout = () => {
      nav('/about');
    }
    return (
      <>
        <ImageSlider imagesArr={imagesArr} settings={sliderSettings} />
        <Paper sx={{ ...paperStyle }}>
          <Grid container columns={12} >
            <Grid item xs={12} lg={6} padding={2} >
              <Typography variant='h4' sx={{ fontSize: { xs: 27, sm: 35, md: 35, lg: 40 }, pt: 2, }}>
                {contentHead1}
              </Typography>
              <Box sx={{ maxHeight: { xs: 200, md: 300, lg: 750 }, overflow: 'hidden' }}>
                {contentPara1.map((ele) => (<>

                  <Typography variant='subtitle1' display='block' sx={{
                    fontSize: { xs: 16, sm: 17, md: 18, lg: 20 }
                  }}>
                    {ele}
                  </Typography>
                  <br /></>
                ))}
              </Box>
              <Button variant="outlined"
                onClick={goToAbout}>Know more</Button>
            </Grid>

            {/* <Grid item xs={0.2} md={0.2} container justifyContent='center' alignContent='center'>
            <Divider variant='middle' orientation="vertical" style={{ height: '98%', width: '1px' }} />
            {/* <Divider orientation="vertical" textAlign='center' sx={{mr:'50%'}}/> */}
            {/* </Grid>  */}

            <Grid container xs={12} lg={6} padding={2} justifyContent='center' alignContent='center' component={Box} sx={{ overflow: 'hidden', display: { xs: 'none', lg: 'flex' } }}>
              <Box component="img"
                sx={{
                  // pl:'15%',
                  maxHeight: { sm: '50%', md: '80%' },
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
            <Typography variant='h4' sx={{ marginBottom: 1 }} fontWeight='bold'>Announcements</Typography>
            <Paper>
              <List onClick={goToAnnounce}
                sx={{
                  width: '100%', maxHeight: 500, overflowY: 'auto',
                  // border: '3px solid', borderColor: 'primary.main',
                  cursor: 'pointer'
                }}>
                {announceData.map((element, index) => {
                  const ele = element.data;
                  return (
                    <>
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
                      </ListItem>
                      {index !== (announceData.length - 1) ? <Divider /> : null}
                    </>
                  )
                })}

              </List>
            </Paper>
            {/* </Box> */}
          </Box>
          : null}
        <Box sx={{ ...paperStyle }}>

          {blogData ?
            <>
              <Typography variant='h4' sx={{ marginBottom: 1 }} fontWeight='bold'>Events</Typography>
              <LatestBlogs blogData={blogData} />
            </>
            : null}
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