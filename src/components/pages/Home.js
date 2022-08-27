import { styled } from '@mui/material/styles';
import { Avatar, Box, Card, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
// import { fontSize } from '@mui/system';
import React, { useEffect, useState } from 'react'
import SchoolPic from '../../images/school.jpg';
import ImageSlider from '../ImageSlider';
import SquareIcon from '@mui/icons-material/Square';
import { getFireDocsRT } from '../../dbConfig/firestore';
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import fireApp from "../../dbConfig/firebaseInit";

// import contentImage1 from '../../images/contentImage1.png';
const contentImage1 = '../../images/contentImage1.png'
const contentPara1 = ["St. George High  School was established in the year 1986, the school has already made its presence felt in the education field of Kerala within a few years. SAPS has become one of the most sought after CBSE schools in the state.", "St. George High  School is situated at Anakkal, two kilometers to the north east of Kanjirapally, on the Kanjirapally- Erattupetta road. It is owned and managed by St. Antony's Catholic Church, Anakkal, the vicar of the church being the manager. The Bishop of Kanjirapally is the patron of the School.", "Ever since its establishment in 1988, the school has contributed a major share in extending the scope and reach of regional educational achievements. SAPS was instrumental in sculpting students to obtain top ranks in many competitive examinations."];
const contentHead1 = "WELCOME TO St. George High  School";
// For main carousel
const imagesArr = [
  {
    alt: 'San Francisco- Oakland Bay Bridge, United States',
    src:
      '/images/w1.jpg',
  },
  {
    alt: 'Bird',
    src:
      '/images/w2.jpg',
  },
  {
    alt: 'San Francisco- Oakland Bay Bridge, United States',
    src:
      '/images/w1.jpg',
  },
  {
    alt: 'Bird',
    src:
      '/images/w2.jpg',
  },]
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
const AnnounceDBName = "Announcements";

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
function Home({ announceData }) {
  const [announcements, setannouncements] = useState([]);
  useEffect(() => {

    getFireDocsRT(AnnounceDBName, (querySnapshot) => {
      const out = [];
      querySnapshot.forEach((doc) => {
        out.push(doc.data());
      });
      setannouncements(out);
      // console.log("Current out in CA: ", out);
    })
  }, [])
  return (
    <>
      <ImageSlider imagesArr={imagesArr} settings={sliderSettings} />
      <Paper sx={{ ...paperStyle }}>
        <Grid container columns={12} >
          <Grid item xs={12} lg={6} padding={2} sx={{ maxHeight: 750, overflow: 'hidden' }}>
            <Typography variant='h4'>
              {contentHead1}
            </Typography>
            {contentPara1.map((ele) => (<>

              <Typography variant='subtitle1' display='block' sx={{
                fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
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
              }} alt="The house from the offer." src={contentImage1}
            />
          </Grid>
        </Grid>
      </Paper>

      <Grid xs={12} md={6} sx={{ ...paperStyle }}>
        <Typography variant='h4'>Announcements</Typography>
        <List sx={{ width: '100%', maxWidth: { xs: '100%', md: '50%' } }}>
          {announcements.map((ele, index) => (
            <ListItem key={index} alignItems='flex-start' >
              <ListItemAvatar key={index + '-1'}>
                <Avatar>
                  <SquareIcon fontSize='small' color='primary' />
                </Avatar>
              </ListItemAvatar>
              {/* sx={{ maxHeight: 120, textOverflow: 'ellipsis', overflow: 'hidden' }} */}
              <ListItemText key={index + '-2'}
                primary={
                  <Typography variant='h6'>{ele.Heading}</Typography>
                } secondary={
                  <>
                    {ele.DateInfo.toDate().toDateString()}
                    <Typography color='text.primary'
                      sx={{
                        ...lineClampStyle,
                        WebkitLineClamp: '3',
                      }}
                    >
                      {ele.Content}
                    </Typography>
                  </>
                } />
            </ListItem>
          ))}

        </List>
      </Grid>


    </>
  )
}

export default Home