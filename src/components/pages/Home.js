// import { styled } from '@mui/material/styles';
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
// import { fontSize } from '@mui/system';
// import React from 'react'
import ImageSlider from '../ImageSlider';
import SquareIcon from '@mui/icons-material/Square';
// import { getFireDocsRT, getFireInitDoc, getFireInitDocs } from '../../fireConfig/firestore';
// import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
// import fireApp from "../../fireConfig/firebaseInit";


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
// const AnnounceDBName = "Announcements";

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
  // const [announcements, setannouncements] = useState([]);
  const announcements = announceData;
  // const [initCollect, setinitCollect] = useState({ WelcomeMessage: [] });
  // useEffect(() => {
  // setannouncements(announceData)
  // setinitCollect(initCollectData);
  // console.log("Inside: ",initCollect);
  // console.log("Inside2: ",announcements);
  // getFireDocsRT('Announcements', (querySnapshot) => {
  //   const out = [];
  //   querySnapshot.forEach((doc) => {
  //     out.push(doc.data());
  //   });
  //   setannouncements(out);
  //   // console.log("Current out in CA: ", out);
  // });
  // getFireInitDoc('InitCollect', 'InitCollectDoc', (doc) => {
  //   console.log("Current data: ", doc.data());
  // });

  // }, [announcements,initCollect]);
  const contentImage1 = "/images/welcomeImg.png"
  // console.log("test: ",initCollect)
  const contentPara1 = initCollectData.WelcomeMessage;
  const contentHead1 = "Welcome to St.George High School";
  // For main carousel
  // const imagesArr = initCollectData.SliderImg;
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
    }
  ]
  if (announceData.length && initCollectData.WelcomeMessage ) {

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
                }} alt="Saint George Image" src={contentImage1} loading="lazy"
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
  else {
    return <Box sx={{height:'100vh', textAlign:'center',pt:'40vh'}} component="h1">Loading...</Box>
  }
}

export default Home