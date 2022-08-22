import { Box, Divider, Grid, Paper } from '@mui/material'
import React from 'react'
import SchoolPic from '../../images/school.jpg'


{/* <img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg"
     alt="Elva dressed as a fairy"> */}
function CustomGridItem({ children }) {
  <Grid item xs={11.9} md={5.9} padding={2}>
    {children}
  </Grid>
}
function Home() {
  return (
    // <Paper elevation={3}>
    //   <img src={SchoolPic} max
    //  alt="Elva dressed as a fairy"/>
    // </Paper>
    <Paper sx={{
      margin: 8, padding: 3
    }}>
      <Grid container columns={12} >
        <Grid item xs={11.9} md={5.9} padding={2}>
          <Paper elevation={1} sx={{
            margin: 3, padding: 3
          }}>
            <Box component="img"
              sx={{
                height: '100%',
                width: '100%',
                maxHeight: { xs: '100%', md: '100%' },
                maxWidth: { xs: '100%', md: '100%' },
              }} alt="The house from the offer." src={SchoolPic}
            />
          </Paper>
        </Grid>
        
        <Grid item xs={0.2} md={0.2} container justifyContent='center' alignContent='center'>
          <Divider variant='middle' orientation="vertical" style={{ height: '98%', width: '1px' }} />
          {/* <Divider orientation="vertical" textAlign='center' sx={{mr:'50%'}}/> */}
        </Grid>

        <Grid item xs={11.9} md={5.9} padding={2}>
          <Box component="img"
            sx={{
              height: '100%',
              width: '100%',
              maxHeight: { xs: '100%', md: '100%' },
              maxWidth: { xs: '100%', md: '100%' },
            }} alt="The house from the offer." src={SchoolPic}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home