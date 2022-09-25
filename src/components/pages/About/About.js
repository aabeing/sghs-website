
import { Box, Grid, Paper, Typography } from '@mui/material'
import { useAuth } from '../../../context/authContext';


const paperStyle = {
  margin: { xs: 2, md: 8 }, padding: { xs: 0.5, md: 3 }
}
function About({ initCollectData }) {
  const { auth, isAdmin } = useAuth();
  const contentImage1 = initCollectData.AboutImgUrl;
  const contentPara1 = initCollectData.WelcomeMessage?.split('\\n');
  const contentHead1 = "About Us";
  return (
    // {auth.currentUser && isAdmin ? <Upload cateId={imagesDataDict.id} /> : null}
    <Paper sx={{ ...paperStyle }}>
      <Grid container columns={12} >
        <Grid item xs={12} lg={6} padding={2} >
          <Typography variant='h4' sx={{ fontSize: { xs: 27, sm: 35, md: 35, lg: 40 }, pt: 2, }}>
            {contentHead1}
          </Typography>
          {/* <Box sx={{ maxHeight: { xs: 200, md: 300, lg: 750 }, overflow: 'hidden' }}> */}
          {contentPara1.map((ele) => (<>

            <Typography variant='subtitle1' display='block' sx={{
              fontSize: { xs: 16, sm: 17, md: 18, lg: 20 }
            }}>
              {ele}
            </Typography>
            <br /></>
          ))}
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
    </Paper>
  )
}

export default About