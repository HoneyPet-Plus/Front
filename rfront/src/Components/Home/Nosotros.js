import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './AboutAs.css'
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import BadgeIcon from '@mui/icons-material/Badge';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import migue from '../../assets/Home/migue.png'
import francis from '../../assets/Home/francis.png'
import pipe from '../../assets/Home/pipe.png'
import nelsi from '../../assets/Home/nelsi.png'
import ivan from '../../assets/Home/ivan.png'

const steps = [
    {
        label: 'Andrés Felipe García Viña',
        imgPath:
          pipe,
        descrip: 'Destacado Estudiante de Matemáticas y Estadística, Apasionado por las Ciencias Exactas y con Gran Motivación en Adquirir Habilidades en las Nuevas Tecnologías.',
        urlGithub: 'https://github.com/Asap4u',
        urlLin: 'https://www.linkedin.com/in/andres-garcia-405697194/',
        urlInterp: 'https://interacpedia.com/user/andres-felipe-garcia-vina?tab=profile',
  
      },
      {
        label: 'Nelsi Miramag Díaz',
        imgPath:
          nelsi,
        descrip: 'Estudiante de Geología y Programación, con Gran Interés en las Nuevas Tecnologías y Apasionada por la Ciencia.',
        urlGithub: 'https://github.com/danimidi',
        urlLin: 'https://www.linkedin.com/in/nelsi-miramag-734144220/',
        urlInterp: 'https://interacpedia.com/user/nelsi-miramag?tab=profile',
      },
      {
        label: 'Miguel Alexis Cáceres',
        imgPath:
          migue,
        descrip: 'Estudiante de Ingeniería en Sistemas y Computación, Joven Programador con Ganas de Aprender y Trabajar en el Mundo de la Tecnología.',
        urlGithub: 'https://github.com/MiguelNietox',
        urlLin: 'https://www.linkedin.com/in/miguel-alexis-caceres-294b12221/',
        urlInterp: 'https://interacpedia.com/user/miguel-alexis-caceres%7D',
      },
      {
        label: 'Iván M. Campos',
        imgPath:
          ivan,
        descrip: 'Emprendedor, Diseñador Gráfico y Dearrollador Web Apasionado por la Tecnología, la Educación y las Artes.',
        urlGithub: 'https://github.com/imcamposdev',
        urlLin: 'https://www.linkedin.com/in/ivan-m-campos-422a78221',
        urlInterp: 'https://interacpedia.com/user/ivan-m-campos',
      },
      {
        label: 'Francisco Sánchez Toro',
        imgPath:
          francis,
        descrip: 'Estudiante de Ingeniería de sistemas, con gran motivación para seguir obteniendo conocimientos y habilidades, para así crecer profesionalmente.',
        urlGithub: 'https://github.com/franciscoww',
        urlLin: 'https://www.linkedin.com/in/francisco-javier-sanchez-toro-b8564a221/',
        urlInterp: 'https://interacpedia.com/user/francisco-javier-sanchez-toro',
      },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
            display:'block',
            alignItems: 'center',
            height: 50,
            bgcolor: 'background.default',
            marginBottom: 8,
        }}
      >
          <Stack alignItems='center' mb mt='-15px'>

              <Box
                  component="img"
                  sx={{
                      height: 200,
                      width: 200,
                      maxWidth: 400,
                      maxHeight: 400,
                      overflow: 'hidden',
                      alignContent: 'center',
                      borderRadius: '300px',
                  }}
                  src={steps[activeStep].imgPath}
                  alt={steps[activeStep].label}
              />
          </Stack>
              <Typography component="div" color="#004F67" align='center' fontWeight="bold" mb mt='20px' >{steps[activeStep].label}</Typography>
              <Typography component="div" color="#00303F" fontSize='14px' align='center'  >{steps[activeStep].descrip}</Typography>
              <Stack alignItems='center' direction='row' justifyContent='center' mt spacing={1}>
            
              <Link target='_blank' color="inherit" href={steps[activeStep].urlGithub}>
                <GitHubIcon/>
              </Link>
              <Link target='_blank' color="inherit" href={steps[activeStep].urlLin}>
                <LinkedInIcon/>
              </Link>
              <Link target='_blank' color="inherit" href={steps[activeStep].urlInterp}>
                <BadgeIcon/>  
              </Link>

          </Stack>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {/* {steps[activeStep].descrip} */}
      </Box>
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
            Siguiente
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
            Anterior
          </Button>
        }
      />
    </Box>
  );
}