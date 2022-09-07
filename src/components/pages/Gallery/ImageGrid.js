import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { styled } from '@mui/system';
import { Container, Divider, Typography } from '@mui/material';
import Upload from './Upload';
import Delete from './Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

function ImageGrid({ imagesDataDict,setcateInfo }) {
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
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
                <Button variant="contained" endIcon={<ArrowBackIcon />} aria-label="add an image" onClick={() => setcateInfo(null)}>
                    Go Back
                </Button></Container>
            <Upload cateId={imagesDataDict.id}/>
            <Container maxWidth='xl'>
                <Divider
                    sx={{
                        paddingTop: 2,
                        "&::before, &::after": {
                            borderColor: "black",
                        },
                    }}
                >
                    <Typography variant='h4'>{imagesDataDict.id}</Typography>
                </Divider>
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <ImageList cols={4} gap={12} sx={{
                            m: { md: 1 }, p: { md: 3 },
                            gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))!important'
                        }}>
                            {imagesDataDict.data.imgData.map((item, index) => (
                                <MyComponent key={index}>
                                    <ImageListItem >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                            style={{ height: '242px' }}
                                        />
                                        {/* <ImageListItemBar title='Delete' sx={{ background: (theme) => theme.palette.secondary.main }}  /> */}

                                        {/* {Delete ? <Delete /> : null} */}
                                        <Delete cateId={imagesDataDict.id} curImgData={item} />

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