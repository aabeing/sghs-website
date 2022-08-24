import { styled } from '@mui/material/styles';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
// import { fontSize } from '@mui/system';
import React from 'react'
import SchoolPic from '../../images/school.jpg';
import Carousel from '../Carousel';

// import contentImage1 from '../../images/contentImage1.png';
const contentImage1 = '../../images/contentImage1.png'
const contentPara1 = ["St. George High  School was established in the year 1986, the school has already made its presence felt in the education field of Kerala within a few years. SAPS has become one of the most sought after CBSE schools in the state.", "St. George High  School is situated at Anakkal, two kilometers to the north east of Kanjirapally, on the Kanjirapally- Erattupetta road. It is owned and managed by St. Antony's Catholic Church, Anakkal, the vicar of the church being the manager. The Bishop of Kanjirapally is the patron of the School.", "Ever since its establishment in 1988, the school has contributed a major share in extending the scope and reach of regional educational achievements. SAPS was instrumental in sculpting students to obtain top ranks in many competitive examinations."];
const contentHead1 = "WELCOME TO St. George High  School";

const customP = styled(Typography)(({ theme }) => ({
 '&':{
  color: theme.palette.common.red,
 }, 
}));
// const CustomBtn = styled(Button)(({ theme }) => {
//   // console.log("theme: " ,theme);
//   return {
//       fontWeight: 700,
//       '&.active': {
//           background: '#688158'
//       },
//   }
// });
function Home() {
  return (
    <>
    <customP>HI</customP>
      <Carousel />
      <Paper sx={{
        margin: { xs: 2, md: 8 }, padding: { xs: 0.5, md: 3 }
      }}>
        <Grid container columns={12} >
          <Grid item xs={11.9} md={5.9} padding={2} >
            <Typography variant='h4'>
              {contentHead1}
            </Typography>
            <customP/>
            {contentPara1.map((ele) => (<>
            
              <customP variant='body1' display='block'>
                {ele}
              </customP>
              <br/></>
            ))}
          </Grid>

          <Grid item xs={0.2} md={0.2} container justifyContent='center' alignContent='center'>
            <Divider variant='middle' orientation="vertical" style={{ height: '98%', width: '1px' }} />
            {/* <Divider orientation="vertical" textAlign='center' sx={{mr:'50%'}}/> */}
          </Grid>

          <Grid container xs={11.9} md={5.9} padding={2} justifyContent='center'
          >

            <Box component="img"
              sx={{
                // pl:'15%',
                maxHeight: { xs: '100%', md: '100%' },
                maxWidth: { xs: '100%', md: '100%' },
              }} alt="The house from the offer." src={contentImage1}
            />
          </Grid>

        </Grid>
      </Paper>
    </>
  )
}

export default Home