import React, { useEffect, useState } from "react";
// import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAllProvs } from "../../services/NegocioService";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
// import ImgMediaCard from '../PerfilUsuario/cardperf';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Proveedores() {
  const [bizData, setBizData] = useState([]);

  useEffect(() => {
    getAllProvs()
      .then((response) => {
        setBizData(response.data);
        console.log("peticion: ");
        console.log(response.data);
        console.log(bizData);
      })
      .catch((er) => {
        console.error("La petición no se completó: ");
        console.error(er);
      });
  }, []);

  const navigate = useNavigate();
  const visitarPagina = (idProv) => (event) => {
    console.log(idProv);
    navigate("/negocio/" + idProv);
  };
  return (
    <Grid style={{ backgroundColor: "#CAE4DB" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "#CAE4DB",
              pt: 8,
              pb: 6,
            }}
          >
            <Container>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#00303F"
                pt="10%"
                fontWeight="bold"
              >
                Lista de Proveedores
              </Typography>
            </Container>
          </Box>
          <Container sx={{ py: 2 }} maxWidth="md">
            <Grid container spacing={4}>
              {/* <Grid item md={4} sm={5} xs={12}>
                {
                  bizData.map(infoprov => (
                    <div key={infoprov.id}>
                      <ImgMediaCard nombre={infoprov.nombre_empresa} descripcion={infoprov.descripcion_corta} imagen={infoprov.imagen_destacada} />
                    </div>
                  ))
                }
              </Grid> */}

              {/* <Grid item md={4} sm={6} xs={12}>
                <ImgMediaCard nombre="maximascotas" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!" imagen="https://loremflickr.com/389/183/dog" />
              </Grid> */}

              {bizData.map((card) => (
                <Grid item key={card._id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      // sx={{
                      //   // 16:9
                      //   pt: '2.25%',
                      // }}
                      image={card.imagen_destacada}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.nombre_empresa}
                      </Typography>
                      <Typography>{card.descripcion_corta}</Typography>
                    </CardContent>
                    <Grid alignItems="center" mb>
                      <CardActions>
                        {/* <BottomNavigationAction label="Favorite" icon={<StarIcon />} />
                        <BottomNavigationAction label="Visit Page" icon={<InfoIcon />} /> */}
                        <Button
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#F7CC31",
                            color: "#00303F",
                          }}
                        >
                          Añadir a favoritos <StarIcon />
                        </Button>
                        <Button
                          onClick={visitarPagina(card._id)}
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#F7CC31",
                            color: "#00303F",
                          }}
                        >
                          Ver más información <InfoIcon />
                        </Button>
                      </CardActions>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </Grid>
  );
}
