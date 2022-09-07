import { Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import ImageGrid from './ImageGrid';
import { useFireDocs } from '../../../fireConfig/useFirestore';
import { useState, useEffect } from 'react';
import AddCate from './AddCate';
import { useAuth } from '../../../context/authContext';


export default function Gallery() {
  const { auth } = useAuth();
  const cateImgArr = useFireDocs('gallery');
  // const [imagesData, setImagesData] = useState();
  const [cateInfo, setcateInfo] = useState();
  // const [loading, setLoading] = useState(false);
  // const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));
  const handleClick = (cateId, cateIndex) => {
    setcateInfo({
      cateIndex: cateIndex,
    });
    // setImagesData({
    //   imgData: imgData,
    //   cateId: cateId,
    //   index: index,
    // });
  }
  useEffect(() => {
    // new Image().src = picture.fileName
    // var imagesPreload = [];
    // if (cateImgArr.length > 0) {

  }, [cateImgArr])
  if (cateImgArr.length === 0) {
    return (
      <>
        Loading...
      </>
    )
  }
  // Load category page, load child page in else
  if (!cateInfo) {
    // console.log("CHECK: ", cateImgArr)
    if (cateImgArr) {

      return (
        <>
          <Container maxWidth='xl' sx={{ alignItems: 'center' }}>
          {auth.currentUser?<AddCate />:null}
            <Divider
              sx={{
                paddingTop: 2,
                "&::before, &::after": {
                  borderColor: "black",
                },
              }}
            >
              <Typography variant='h4'>Gallery</Typography>
            </Divider>
            {/* <Container> */}
            <Grid container justifyContent='space-around' sx={{
              maxWidth: 800, minWidth: 400, m: 'auto', mt: 5,
            }}>
              {cateImgArr.map((ele, index) => {
                // console.log("Err ",ele.data)
                const item = ele.data.imgData[0];
                console.log()
                return (
                  <Grid item key={index} padding={2} onClick={() => handleClick(ele.id, index)}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        cursor: 'pointer', height: '200px', width: '200px',
                        objectFit: 'cover'
                      }}
                      loading="lazy"
                    />
                    <Typography textAlign='center'>
                      {ele.id}
                    </Typography>

                  </Grid>)
              })}
            </Grid>
          </Container>
        </>
      );
    }

  }
  else {
    return (
      <ImageGrid imagesDataDict={cateImgArr[cateInfo.cateIndex]} setcateInfo={setcateInfo} />
    )
  }

}


