import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoForm from './InfoForm';
import ContactForm from './ContactForm';
import ServicesForm from './ServicesForm';
import { createProv } from '../../services/NegocioService';
import Swal from 'sweetalert2';

// ref para escribir la logica con el contex https://youtu.be/EUsNVz53gMc?t=4039
// TODO escribir la redirección del boton final del steper

const steps = ['Información de la empresa', 'Datos de contacto', 'Productos / Servicios'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <ServicesForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function PublicarNegocio() {
  // logica del steper
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      console.log("Aqui Vamo a hace el submit")
      const negocio = { 
        "contacto_id": window.sessionStorage.getItem('idUsuario'),
        "nombre_empresa": JSON.parse(window.localStorage.getItem('bizName')),
        "eslogan": JSON.parse(window.localStorage.getItem('bizSlogan')),
        "descripcion_corta": JSON.parse(window.localStorage.getItem('bizDesc')),
        "descripcion_empresa": JSON.parse(window.localStorage.getItem('bizDescription')),
        "horario_atencion": JSON.parse(window.localStorage.getItem('bizHour')),
        "telefono": JSON.parse(window.localStorage.getItem('bizTel')),
        "direccion": JSON.parse(window.localStorage.getItem('bizDir')),
        "email": JSON.parse(window.localStorage.getItem('bizEmail')),
        "web": JSON.parse(window.localStorage.getItem('bizWeb')),
        "otro": JSON.parse(window.localStorage.getItem('bizOtro')),
        "ubicacion_mapa": {'lat': JSON.parse(window.localStorage.getItem('bizLat')), 'log': JSON.parse(window.localStorage.getItem('bizLng'))},
        "productos": [ 
          {
          "tipo": JSON.parse(window.localStorage.getItem('bizPSEtype')),
          "titulo": JSON.parse(window.localStorage.getItem('bizPSEtitle')),
          "descripcion": JSON.parse(window.localStorage.getItem('bizPSEdesc'))
          },
          {
          "tipo": JSON.parse(window.localStorage.getItem('bizPS2type')),
          "titulo": JSON.parse(window.localStorage.getItem('bizPS2title')),
          "descripcion": JSON.parse(window.localStorage.getItem('bizPS2desc'))
          },
          {
          "tipo": JSON.parse(window.localStorage.getItem('bizPS3type')),
          "titulo": JSON.parse(window.localStorage.getItem('bizPS3title')),
          "descripcion": JSON.parse(window.localStorage.getItem('bizPS3desc'))
          }
        ]
      };
      const token = window.sessionStorage.getItem('token');

      console.log(negocio);
      console.log(token);

      createProv(negocio, token)
        .then((response) => {
          console.log("Exitooooo!!!!!! " + response)
          Swal.fire({
            icon: 'success',
            title: '¡Negocio creado con éxito!',
            showConfirmButton: false,
            timer: 2000
          })
          setActiveStep(activeStep + 1);
          clearBizLS();
        })
        .catch((e) => {
          console.error('No funcionó la petición' + e);
          Swal.fire({
            icon: 'error',
            title: 'Paila',
            showConfirmButton: false,
            timer: 2000
          })
        })

    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const clearBizLS = () => {
    localStorage.removeItem('bizDesc');
    localStorage.removeItem('bizDescription');
    localStorage.removeItem('bizDir');
    localStorage.removeItem('bizEmail');
    localStorage.removeItem('bizHour');
    localStorage.removeItem('bizName');
    localStorage.removeItem('bizOtro');
    localStorage.removeItem('bizPS2desc');
    localStorage.removeItem('bizPS2title');
    localStorage.removeItem('bizPS2type');
    localStorage.removeItem('bizPS3desc');
    localStorage.removeItem('bizPS3title');
    localStorage.removeItem('bizPS3type');
    localStorage.removeItem('bizPSEdesc');
    localStorage.removeItem('bizPSEtitle');
    localStorage.removeItem('bizPSEtype');
    localStorage.removeItem('bizSlogan');
    localStorage.removeItem('bizTel');
    localStorage.removeItem('bizWeb');
    localStorage.removeItem('bizLat');
    localStorage.removeItem('bizLng');
  }

  const handleClearLS = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se borraran todos los campos diligenciados.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Limpia el Formulario!',
      cancelButtonText: 'No, Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho!',
          'La información se limpió con éxito',
          'success'
        )
        clearBizLS();
        setActiveStep(0);
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="pag-container" component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Publicar Negocio
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom align="center">
                  ¡Gracias por publicar su negocio!
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Ahora, podrá administrar y editar la infoprmación de su negocio desde la página: "Mi Negocio".
                </Typography>
                <Typography variant="subtitle1" align="center" marginTop="15px">
                    {/* onClick={toBizPage}  */}
                    <Button variant="outlined">Ir a Mi Negocio</Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={handleClearLS} sx={{ mt: 3, ml: 1 }}>
                    Limpiar Formulario
                  </Button>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Anterior
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Completar' : 'Siguiente'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}