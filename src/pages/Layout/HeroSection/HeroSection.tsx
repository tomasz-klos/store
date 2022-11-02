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
            title: 'San Francisco ',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusantium laboriosam, recusandae delectus sunt quia voluptate quibusdam at sint dicta asperiores, facere reiciendis est in assumenda aut magnam atque consequuntur.',
        },
        {
            title: 'Bird',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusantium laboriosam, recusandae delectus sunt quia voluptate quibusdam at sint dicta asperiores, facere reiciendis est in assumenda aut magnam atque consequuntur.',
        },
        {
            title: 'Bali, Indonesia',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusantium laboriosam, recusandae delectus sunt quia voluptate quibusdam at sint dicta asperiores, facere reiciendis est in assumenda aut magnam atque consequuntur.',
        },
        {
            title: 'Goč, Serbia',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure accusantium laboriosam, recusandae delectus sunt quia voluptate quibusdam at sint dicta asperiores, facere reiciendis est in assumenda aut magnam atque consequuntur.',
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexGrow: 1 }}>
            <Carousel
            autoPlay={false}
                animation="slide"
                duration={700}
                interval={8000}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        background: 'none', width: 48, height: 48,  margin: 0, fill: '#495057'
                    }
                }}
                next={handleNext}
                NextIcon={<KeyboardArrowRight sx={{ width: 48, height: 48, fill: '#495057' }} />}
                prev={handleBack}
                PrevIcon={<KeyboardArrowLeft sx={{ width: 48, height: 48, fill: '#495057' }} />}
                sx={{ width: '100%', background: '#e9ecef' }}
            >
                {images.map((step) => (
                    <Box component="article" key={step.title}>
                        <Box
                            sx={{ maxWidth: '100vw', padding: '15% 10%' }}
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