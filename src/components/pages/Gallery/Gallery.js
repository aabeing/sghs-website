import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import {  Divider, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Upload from './Upload';
import { styled } from '@mui/system';

import Delete from './Delete';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];


export default function Gallery() {
  const theme = useTheme();
  const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));
  const MyComponent = styled('div')({
    "& .hiddenbtn": {
      display: "none"
    },
    "&:hover .hiddenbtn": {
      display: "flex"
    },
    cursor: 'pointer',
    m: 1,
    transition: ' 0.4s all ease-in-out',
    '&:hover': {  transform: 'scale(1.03)' } ,
  });

  return (
    <>
      <Upload />
      <Container maxWidth='xl'>
        <Divider
          sx={{
            paddingTop: 2,
            "&::before, &::after": {
              borderColor: "black",
            },
          }}
        >
          <Typography variant='h4'>Some Text</Typography>
        </Divider>
        {/* Large screen view */}
        {isMatchLarge &&
          <SimpleReactLightbox>
            <SRLWrapper>
              <ImageList cols={4} gap={12} sx={{
                m: { md: 1 }, p: { md: 3 },
                gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))!important'
              }}>
                {itemData.map((item) => (
                  <MyComponent>
                    <ImageListItem key={item.img} sx={{
                      
                      // opacity: { md: '.7' },

                      // '&:hover': { md: {  transform: 'scale(1.03)' } },
                    }}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        // style={{ cursor: 'pointer' }}
                        loading="lazy"
                      />
                      {/* <ImageListItemBar title='Delete' sx={{ background: (theme) => theme.palette.secondary.main }}  /> */}
                      

                      <Delete/>
                    </ImageListItem>
                    
                  </MyComponent>
                ))}
              </ImageList>
            </SRLWrapper>
          </SimpleReactLightbox>
        }
        {/* Small screen view */}
        {!isMatchLarge &&
          <ImageList cols={4} gap={12} sx={{
            gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))!important'
          }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} sx={{
                m: 1,
                cursor: 'pointer',
              }}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  // style={{ cursor: 'pointer' }}
                  loading="lazy"
                />
                {/* <ImageListItemBar title={item.title} /> */}
              </ImageListItem>
            ))}
          </ImageList>
        }

      </Container>
    </>
  );
}


