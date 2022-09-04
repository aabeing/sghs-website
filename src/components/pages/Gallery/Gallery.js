// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import {  Divider, Grid, Typography } from '@mui/material';
// import {  useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Upload from './Upload';
// import { styled } from '@mui/system';

// import Delete from './Delete';
import ImageGrid from './ImageGrid';
import { useFireDocs } from '../../../fireConfig/useFirestore';
import { useState,useEffect } from 'react';

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
// ];
// const cateArr = [{
//   Name: 'cate1',
//   ImgData: itemData,
// }, {
//   Name: 'cate2',
//   ImgData: itemData,
// },
// {
//   Name: 'cate3',
//   ImgData: itemData,
// }, {
//   Name: 'cate3',
//   ImgData: itemData,
// },
// {
//   Name: 'cate1',
//   ImgData: itemData,
// }, {
//   Name: 'cate2',
//   ImgData: itemData,
// },
// {
//   Name: 'cate3',
//   ImgData: itemData,
// }, {
//   Name: 'cate3',
//   ImgData: itemData,
// }
// ]


export default function Gallery() {
  // const theme = useTheme();
  const cateImgArr = useFireDocs('gallery');
  // const [page,setPage] = React.useState('category');
  const [imagesData, setImagesData] = useState()
  const [loading, setLoading] = useState(true);
  // const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));
  // const MyComponent = styled('div')({
  //   "& .hiddenbtn": {
  //     display: "none"
  //   },
  //   "&:hover .hiddenbtn": {
  //     display: "flex"
  //   },
  //   cursor: 'pointer',
  //   m: 1,
  //   transition: ' 0.4s all ease-in-out',
  //   '&:hover': { transform: 'scale(1.03)' },
  // });
  const handleClick = (imgData, cateId,index) => {
    setImagesData({
      imgData: imgData,
      cateId: cateId,
      index: index,
    });
  }
  useEffect(() => {
    // new Image().src = picture.fileName
    var imagesPreload = [];
    if(cateImgArr.length >0){
    for (let i = 0; i < cateImgArr.length; i++) {
      imagesPreload[i] = new Image();
      // console.log("TEST",ele);
      // const image = ele.ImgData[0].img;
      imagesPreload[i].src = cateImgArr[i].data.imgData[0].img;
      // window[img.src] = img;
      // console.log(img.src );
    };
    console.log("TEST")
    // if(imagesData){
    //   // setImagesData()
    //   setImagesData((present)=>{
    //     console.log("TESTING ",present);
    //     console.log(cateImgArr[present.index].data.imgData);
    //     return ({...present,imgDate:cateImgArr[present.index].data.imgData});
    //   })
    // }
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
  if (!imagesData) {
    console.log("CHECK: ", cateImgArr)
    if (cateImgArr) {
      return (
        <>
          {/* <Upload /> */}
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
                  <Grid item key={index} padding={2} onClick={() => handleClick(ele.data.imgData, ele.id,index)}>
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
            {/* <Box sx={{
            display: 'flex', justifyContent: 'space-evenly',
            maxWidth: 800, minWidth: 400,
            textAlign: 'center', m: 'auto',
          }}>
            {cateArr.map((ele, index) => {
              const item = ele.ImgData[0];
              return (
                <img
                  src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                  alt={item.title}
                  // style={{ cursor: 'pointer' }}
                  loading="lazy"
                />
              )
            })}
          </Box> */}

          </Container>
        </>
      );
    }

  }
  else {
    return (
      <ImageGrid imagesData={imagesData} setImagesData={setImagesData}/>
    )
}

}


