import { Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import AddCate from './AddCate';
import { useAuth } from '../../../context/authContext';

function CateGrid({ cateImgArr, setcateInfo }) {

    const { auth } = useAuth();
    const handleClick = (cateId, cateIndex) => {
        setcateInfo({
            // cateIndex: cateIndex,
            cateId: cateId,
        });
    }
    return (
        <>
            <Container maxWidth='xl' sx={{ alignItems: 'center' }}>
                {auth.currentUser ? <AddCate /> : null}
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
                <Grid container justifyContent='center' sx={{
                    m: 'auto', mt: 5,
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
            </Container>
        </>
    );
}

export default CateGrid