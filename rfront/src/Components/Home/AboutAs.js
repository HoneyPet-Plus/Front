import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Stack from '@mui/material/Stack';
import './AboutAs.css'

// import {migue, francis, pipe, nelsi, ivan} from '../../assets/Home'
import migue from '../../assets/Home/migue.png'
import francis from '../../assets/Home/francis.png'
import pipe from '../../assets/Home/pipe.png'
import nelsi from '../../assets/Home/nelsi.png'
import ivan from '../../assets/Home/ivan.png'
import { Avatar, listItemAvatarClasses } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Pucho-Lagartija',
        imgPath:
            migue,
    },
    {
        label: 'Pipe-Hamster',
        imgPath:
            pipe,
    },
    {
        label: 'Nelsi-Gatu',
        imgPath:
            nelsi,
    },
    {
        label: 'Ivan-Firulais',
        imgPath:
            ivan,
    },
    {
        label: 'Francis-Pejelagarto',
        imgPath:
            francis,
    },
];

export default function  AboutAs() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, alignItems:'center' }}>
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
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      > 
        {images.map((step, index) => (
            <Stack className='img-nosotros'>
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                            component="img"
                            sx={{
                                height: 200,
                                width: 200,
                                display: 'block',
                                maxWidth: 400,
                                maxHeight: 400,
                                overflow: 'hidden',
                                alignContent: 'center',
                                borderRadius: '300px',
                                padding: '10px,'
                            }}
                            src={step.imgPath}
                            alt={step.label}
                        />
                    ) : null}
                </div>

            </Stack>
            
        ))}
      
        
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

    </Box>


  );
}