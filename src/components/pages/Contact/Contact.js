import { Box, Grid, Paper, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/authContext';
import { useFireDoc } from '../../../fireConfig/useFirestore';
import Loading from '../Loading'
import Content from './Content';
import Edit from './Edit';

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
  const dbInfo = {
    collectName: 'ContactUs',
    docName: 'ContactUsDoc',
    imgArrName: 'imgData'
  }
  const { auth, isAdmin } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [load, setLoad] = useState(true)
  const [imgPreLoad, setImgPreLoad] = useState(true)
  const ContactDocData = useFireDoc(dbInfo.collectName, dbInfo.docName);
  useEffect(() => {
    let preImg;
    if (ContactDocData.placeholderData) {
      const picture = ContactDocData?.imgData[0]
      preImg = new Image();
      preImg.src = picture.src;
      preImg.onload = () => {
        setImgPreLoad(false);
        // console.log("IMG Loading Done")
      }
    }
  }, [ContactDocData])
  if (!ContactDocData.placeholderData || imgPreLoad) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <>
        {load ? <Loading /> : null}
        {auth.currentUser && isAdmin ?
          <Edit dbInfo={dbInfo} editMode={editMode} setEditMode={setEditMode} curImgData={ContactDocData.imgData[0]} />
          : null}

        <Box sx={{ position: 'relative' }}>
          <img src={ContactDocData?.imgData[0]?.src}
            alt='contact-banner'
            loading="lazy"
            style={{ width: '100%', zIndex: 1, objectFit: 'cover', height: 'auto', maxHeight: 500 }}
          />
          <Typography color='common.white' sx={{ position: 'absolute', bottom: 0, zIndex: -5 }}>Contact Us</Typography>
        </Box>
        <Paper elevation={1}></Paper>
        <Grid container margin={3}>
          <Grid item xs={12} md={6} paddingRight={6}>
            <iframe title='location' src={ContactDocData.mapUrl} width="100%" height="450"
              onLoad={() => setLoad(false)}
              style={{
                border: 0, allowfullscreen: '',
                loading: 'lazy', 
                referrerpolicy: 'no-referrer-when-downgrade'
              }}
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6} padding={3}>
            <Content dbInfo={dbInfo} ContactDocData={ContactDocData} editMode={editMode} setEditMode={setEditMode} />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Contact