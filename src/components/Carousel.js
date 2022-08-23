import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Step, StepButton, Stepper } from '@mui/material';
import { Box, Grid, Paper } from '@mui/material'
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco- Oakland Bay Bridge, United States',
        imgPath:
            '/images/w1.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            '/images/w2.jpg',
    },
    {
        label: 'San Francisco- Oakland Bay Bridge, United States',
        imgPath:
            '/images/w1.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            '/images/w2.jpg',
    },

    {
        label: 'San Francisco- Oakland Bay Bridge, United States',
        imgPath:
            '/images/w1.jpg',
    },



];

function Carousel() {
    // const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    // Autoplay effect based on given interval
    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 3000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    // };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <div>
            <Box sx={{ maxWidth: '100%' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                {/* Autoswipe add here */}
                {images.map((step, index) => (
                    <div key={index}>
                        {/* {console.log("Index test: ", activeStep, index)} */}
                        {activeStep === index ? (
                            <Box
                                component="img"
                                sx={{
                                    height: '100%',
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                    // position: 'relative'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
                {/* Autoswipe add here */}
                {/* <Box sx={{
                    width: '10%', ml: 'auto', display: 'flex', justifyContent: 'center',
                    minWidth: 0,
                }}> */}
                <Grid container columns={12} >
                        <Grid item xs={6} padding={2}></Grid>
                        <Grid item xs={6} padding={2}>
                            <Stepper nonLinear activeStep={activeStep} sx={{
                                position: 'relative', top: "-2rem",
                                display: { xs: 'none', md: 'flex' }
                            }}>
                                {images.map((step, index) => (
                                    <Step key={index}>
                                        <StepButton size='small' color="inherit" onClick={() => handleStepChange(index)}>
                                            {/* {label} */}
                                        </StepButton>
                                    </Step>
                                ))}
                            </Stepper>
                            <MobileStepper steps={maxSteps} position="static" activeStep={activeStep}
                                sx={{ position: 'relative', top: "-2rem",  display: { md: 'none' }, 
                                background: 'transparent' }} />
                        </Grid>
                </Grid>

            </Box>


            {/* <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    // style={{
                    //     backgroundColor: "transparent", zIndex: 2, position: 'relative',
                    //     top: "-43px", bottom: 0, left: 0, right: 0,
                    //     overflow: 'hidden',
                    // }}
                    // style={{ backgroundColor: "transparent" }}
                    nextButton={
                        <Button
                            variant='outlined' size="small" onClick={handleNext} 
                            // disabled={activeStep === maxSteps - 1}                      
                            >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button variant='outlined' size="small" onClick={handleBack} 
                        // disabled={activeStep === 0}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}

                        </Button>
                    }
                /> */}


        </div >
    );
}

export default Carousel;
