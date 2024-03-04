import { Container } from '@mui/system';
import { Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import AddCate from './AddCate';
import { useAuth } from '../../../context/authContext';
import Loading from '../Loading';
import { useEffect } from 'react';
import { useState } from 'react';
import Videos from './Videos';

function CateGrid({ cateImgArr, setcateInfo }) {

    const { auth, isAdmin } = useAuth();
    const handleClick = (cateId, cateIndex) => {
        setcateInfo({
            // cateIndex: cateIndex,
            cateId: cateId,
        });
    }
    // Images preloading
    const [load, setload] = useState(true)
    const [imageOrVideo, setImageOrVideo] = useState(0)
    useEffect(() => {
        let preImg;
        let loadedCount = 0;
        const imgLen = cateImgArr.length;
        cateImgArr.forEach((ele) => {
            const picture = ele.data.imgData[0];
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
    }, [cateImgArr])
    if (load) {
        return (
            <>
                {auth.currentUser && isAdmin ? <AddCate /> : null}
                < Loading editable={true} />
            </>)
    }
    else {
        return (
            <>
                <Container maxWidth='xl' sx={{ alignItems: 'center' }}>
                    {auth.currentUser && isAdmin ? <AddCate /> : null}
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
                    <Tabs value={imageOrVideo}
                        onChange={() => setImageOrVideo((cur) => (cur + 1) % 2)}
                        centered>
                        <Tab label="Images" />
                        <Tab label="Videos" />
                    </Tabs>
                    {imageOrVideo === 0 &&
                        <Grid container justifyContent='center' sx={{
                            m: 'auto', mt: 5,
                        }}>
                            {cateImgArr.map((ele, index) => {
                                // console.log("Err ",ele.data)
                                const item = ele.data.imgData[0];
                                console.log()
                                return (
                                    <Grid item key={index} padding={2} style={{
                                        boxShadow: '0 0 3px #FF0000, 0 0 5px #0000FF', margin: '15px',

                                    }} onClick={() => handleClick(ele.id, index)}>
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            style={{
                                                cursor: 'pointer', height: '300px', width: '300px',
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
                    }
                    {imageOrVideo === 1 &&
                        <Videos />
                    }
                </Container>
            </>
        );
    }
}

export default CateGrid