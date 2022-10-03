import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { styled } from '@mui/system';
import { Container, Divider, Typography } from '@mui/material';
// import Upload from './Upload';
// import Delete from './Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
// import { useAuth } from '../../../context/authContext';
import { useState } from 'react';
// import Loading from '../Loading';
import { useEffect } from 'react';
import { useAuth } from '../../../../context/authContext';
import Loading from '../../Loading';
import { useNavigate } from 'react-router-dom';
import Upload from './Upload';
import Delete from './Delete';

function ImageGrid({ imagesDataDict }) {
    const { auth, isAdmin } = useAuth();
    const nav = useNavigate()
    const MyComponentHover = styled('div')({
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
    // console.log("VAL: ",isAdmin);
    // Images preloading
    const [load, setload] = useState(true)
    useEffect(() => {
        let preImg;
        let loadedCount = 0;
        const imgLen = imagesDataDict.length;
        imagesDataDict.forEach((picture) => {
            preImg = new Image();
            preImg.src = picture.src;
            preImg.onload = () => {
                // console.log("IMG loaded");
                loadedCount++;
                if (loadedCount === imgLen) {
                    setload(false);
                    // console.log("IMG Loading Done")
                }
            }
        });
    }, [imagesDataDict])
    if (load) {
        return (<Loading />)
    }
    else {
        return (
            <>
                <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
                    <Button variant="contained" endIcon={<ArrowBackIcon />} aria-label="add an image" onClick={() => nav('/home')}>
                        Go Back
                    </Button></Container>
                {auth.currentUser && isAdmin ? <Upload cateId={imagesDataDict.id} /> : null}
                <Container maxWidth='xl'>
                    <Divider
                        sx={{
                            paddingTop: 2,
                            "&::before, &::after": {
                                borderColor: "black",
                            },
                        }}
                    >
                        <Typography variant='h4'>Slider Images</Typography>
                    </Divider>
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <ImageList cols={4} gap={12} sx={{
                                m: { md: 1 }, p: { md: 3 },
                                gridTemplateColumns: 'repeat(auto-fill,minmax(500px,1fr))!important'
                            }}>
                                {imagesDataDict.map((item, index) => (
                                    <MyComponentHover key={index}>
                                        <ImageListItem >
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                loading="lazy"
                                                style={{ height: '242px' }}
                                            />
                                            {/* <ImageListItemBar title='Delete' sx={{ background: (theme) => theme.palette.secondary.main }}  /> */}

                                            {/* {Delete ? <Delete /> : null} */}


                                            {auth.currentUser && isAdmin ? <Delete curImgData={item} /> : null}

                                        </ImageListItem>

                                    </MyComponentHover>
                                ))}
                            </ImageList>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </Container>
            </>
        )
    }
}

export default ImageGrid