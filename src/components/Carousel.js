import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
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
    }
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    // Autoplay effect based on given interval
    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 2000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps );
    };

    // const handleStepChange = (step) => {
    //     setActiveStep(step);
    // };
    return (
        <div>
            <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
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
                    <div key={step.label}>
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
                                    position: 'relative'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
                {/* Autoswipe add here */}
                <MobileStepper
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
                />
            </Box>
        </div>
    );
}

export default Carousel;
