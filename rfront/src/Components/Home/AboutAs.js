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
        label: 'Pucho- La Lagartija',
        imgPath:
            migue,
        descrip: 'luchare, fracasare, pero rendirme es un privilegió que no tengo.',
    },
    {
        label: 'Pipe- El Hamster',
        imgPath:
            pipe,
        descrip: 'Por las rudezas del camino, hacia las estrellas',
    },
    {
        label: 'Nelsi- La Gatu',
        imgPath:
            nelsi,
        descrip: 'El que no muestra no vende',
    },
    {
        label: 'Ivan- El Pejelagarto',
        imgPath:
            ivan,
        descrip: 'Emprendedor en constante busqueda de libertad y progreso.',
    },
    {
        label: 'Francis- El Firulais',
        imgPath:
            francis,
            descrip: 'La perseverancia hace el éxito',
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


  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, alignItems:'center' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
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
      <Stack alignItems='center'>

        <Paper
          square
          elevation={0}
          sx={{
            display:'block',
            alignItems: 'center',
            height: 50,
            paddingBlock:3,
            bgcolor: 'background.default',
            marginBottom: 7,
          }}
        >
          <Typography component="div" align='center' >{images[activeStep].label}</Typography>
  
          <Typography component="div" align='center'  >{images[activeStep].descrip}</Typography>
        </Paper>

      </Stack>
  
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