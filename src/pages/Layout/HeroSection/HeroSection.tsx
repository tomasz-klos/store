import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Carousel from 'react-material-ui-carousel';

const HeroSection = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const images = [
        {
            title: 'San Francisco – Oakland Bay Bridge, United States',
            desc: 'asdasdasdasdasdasdasdasdas',
        },
        {
            title: 'Bird',
            desc: 'asdasdasdasdasdasdasdasdas',
        },
        {
            title: 'Bali, Indonesia',
            desc: 'asdasdasdasdasdasdasdasdas',
        },
        {
            title: 'Goč, Serbia',
            desc: 'asdasdasdasdasdasdasdasdas',
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexGrow: 1, height: '80%' }}>
            <Carousel
                animation="slide"
                duration={700}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        background: 'none', width: 64, height: 64,
                    }
                }}
                next={handleNext}
                NextIcon={<KeyboardArrowRight sx={{ width: 64, height: 64, fill: '#495057' }} />}
                prev={handleBack}
                PrevIcon={<KeyboardArrowLeft sx={{ width: 64, height: 64, fill: '#495057' }} />}
                sx={{ width: '100%', background: '#e9ecef' }}
            >
                {images.map((step) => (
                    <Box component="article" key={step.title}>
                        <Box
                            sx={{ maxWidth: '100vw', height: '70%', padding: '15% 5%' }}
                        >
                            <Typography variant="h2">{step.title}</Typography>
                            <Typography variant="body1">{step.desc}</Typography>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    )
}

export default HeroSection;