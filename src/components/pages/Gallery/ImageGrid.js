import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { styled } from '@mui/system';
import { Container, Divider, Typography } from '@mui/material';
import Upload from './Upload';
import Delete from './Delete';

function ImageGrid({ imagesData }) {
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
        '&:hover': { transform: 'scale(1.03)' },
    });
    let DeleteComp;
    if(true){
        DeleteComp = <Delete/>
    }
    else{
        DeleteComp = null
    }
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
        <SimpleReactLightbox>
            <SRLWrapper>
                <ImageList cols={4} gap={12} sx={{
                    m: { md: 1 }, p: { md: 3 },
                    gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))!important'
                }}>
                    {imagesData.map((item, index) => (
                        <MyComponent>
                            <ImageListItem key={index}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    // style={{ cursor: 'pointer' }}
                                    loading="lazy"
                                />
                                {/* <ImageListItemBar title='Delete' sx={{ background: (theme) => theme.palette.secondary.main }}  /> */}

                                {/* {Delete ? <Delete /> : null} */}
                                {DeleteComp}

                            </ImageListItem>

                        </MyComponent>
                    ))}
                </ImageList>
            </SRLWrapper>
        </SimpleReactLightbox>
        </Container>
        </>
    )
}

export default ImageGrid