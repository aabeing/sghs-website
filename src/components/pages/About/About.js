
import { Box, Grid, Paper, Typography } from '@mui/material'
import { useState } from 'react';
import { useAuth } from '../../../context/authContext';
import Loading from '../Loading';
import Content from './Content';
import Edit from './Edit';


const paperStyle = {
  padding: { xs: 0.5, md: 3 }, marginTop: { xs: 2, md: 8 },
}
function About({ initCollectData }) {
  const { auth, isAdmin } = useAuth();
  const [editMode, setEditMode] = useState(false);
  if (!initCollectData.WelcomeMessage) {
    return (
      <Loading />
    )
  }
  else {
    const contentImage1 = initCollectData.AboutImgUrl;
    // const contentPara = initCollectData.WelcomeMessage?.split('\\n');
    const contentHead1 = "About Us";
    return (
      // <>

      < Paper sx={{ ...paperStyle }}>
        {auth.currentUser && isAdmin ? <Edit editMode={editMode} setEditMode={setEditMode} /> : null}
        <Grid container columns={12} >
          <Grid item xs={12} lg={6} padding={2} >
            <Typography variant='h4' sx={{ fontSize: { xs: 27, sm: 35, md: 35, lg: 40 }, pt: 2, }}>
              {contentHead1}
            </Typography>
            {/* <Box sx={{ maxHeight: { xs: 200, md: 300, lg: 750 }, overflow: 'hidden' }}> */}
            <Content initCollectData={initCollectData} editMode={editMode} setEditMode={setEditMode}/>
            {/* </Box> */}
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
      </Paper >
      // </>
    )
  }
}

export default About