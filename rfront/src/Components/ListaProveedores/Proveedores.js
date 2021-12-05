import React, { useEffect, useState } from 'react';
// import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAllProvs } from '../../services/NegocioService';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Proveedores() {

  const [bizData, setBizData] = useState([])

  useEffect(() => {
    getAllProvs()
      .then((response) => {
        setBizData(response.data)
        console.log('peticion: ');
        console.log(response.data)
        console.log(bizData);
      })
      .catch((er) => {
        console.error('La petición no se completó: ')
        console.error(er);
      });

  }, [])
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
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      // sx={{
                      //   // 16:9
                      //   pt: '2.25%',
                      // }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Servicio
                      </Typography>
                      <Typography>
                        Acá va una breve descripción del servicio que se brindará.
                        Y si quiere ver la información completa debe clickear en
                        el botón
                      </Typography>
                    </CardContent>
                    <Stack alignItems="center" mb>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          style={{ backgroundColor: "#F7CC31", color: "#00303F" }}
                        >
                          Ver más información
                        </Button>
                      </CardActions>
                    </Stack>
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
