import { Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import ImageGrid from './ImageGrid';
import { useFireDocs } from '../../../fireConfig/useFirestore';
import { useState, useEffect } from 'react';


export default function Gallery() {
  const cateImgArr = useFireDocs('gallery');
  // const [imagesData, setImagesData] = useState();
  const [cateInfo, setcateInfo] = useState();
  const [loading, setLoading] = useState(true);
  // const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));
  const handleClick = (cateId, cateIndex) => {
    setcateInfo({
      cateId: cateId,
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
    var imagesPreload = [];
    if (cateImgArr.length > 0) {
      for (let i = 0; i < cateImgArr.length; i++) {
        imagesPreload[i] = new Image();
        // const image = ele.ImgData[0].img;
        imagesPreload[i].src = cateImgArr[i].data.imgData[0].img;
        // window[img.src] = img;
        // console.log(img.src );
      };
      setLoading(false);
    }
  }, [cateImgArr])
  if (loading || cateImgArr.length === 0) {
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
                return (
                  <Grid item key={index} padding={2} onClick={() => handleClick(ele.id, index)}>
                    <img
                      src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                      alt={item.title}
                      style={{ cursor: 'pointer' }}
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


