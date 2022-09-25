import { Box, Grid, Paper, Typography, } from '@mui/material'
import React from 'react'

function Contact() {
  // const theme = useTheme();
  // const isLarge = useMediaQuery(theme.breakpoints.up('md'));
  // const isSmToMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  // let boxHeight;
  // let customFontSize;
  // if (isLarge) {
  //   // slideframeHeight = '600'
  //   // boxHeight = '600'
  //   customFontSize = 45;
  // }
  // else if (isSmToMd) {
  //   // slideframeHeight = '450'
  //   // boxHeight = '450';
  //   customFontSize = 30;
  // }
  // else {
  //   // slideframeHeight = '210'
  //   // boxHeight = '210';
  //   customFontSize = 25;
  // }
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <img src='/images/contactus-banner.jpg'
          alt='contact-banner'
          loading="lazy"
          style={{ width: '100%', zIndex: 1 }}
        />
        <Typography color='common.white' sx={{ position: 'absolute', bottom: 0, zIndex: -5 }}>Contact Us</Typography>
      </Box>
      <Paper elevation={1}></Paper>
      <Grid container margin={3}>
        <Grid item xs={12} md={6} paddingRight={6}>
          <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3364834750796!2d75.48719972695315!3d12.089101600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba447afb48edea5%3A0x734d5fa3d8a905fc!2sSt%20George%20High%20School!5e0!3m2!1sen!2sin!4v1663601358087!5m2!1sen!2sin" width="100%" height="450"
            style={{ border: 0, allowfullscreen: '', loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade' }}
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6} padding={3}>
          <Typography variant='h3'>
            St.George High School
          </Typography>
          <Typography variant='h5'>
            Call: +91-965754343336255,965754343336255
          </Typography>
          <Typography variant='h6'>
            Address: St.George High School
            Chempanthotty, Kannur District- 670631
            Kerala
          </Typography>
          <Typography variant='h6'>
            E-mail: test@test.com
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact