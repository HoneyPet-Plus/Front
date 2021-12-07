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
import Swal from "sweetalert2";
import { favProveedor } from "../../services/UsuarioService";
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

  const agregarFavorito = (lsprov) => (event) => {
    const idNegocio = lsprov._id;
    const idUsuario = window.sessionStorage.getItem("idUsuario");
    const token = window.sessionStorage.getItem("token");
    const rol = window.sessionStorage.getItem("rol");

    if (idUsuario != null && token != null) {
      if (rol === "usuario") {
        Swal.fire({
          title:
            '¿Estas seguro de que quieres añadir a "' +
            lsprov.nombre_empresa +
            '" a tu lista de favoritos?',
          text: "Elige una opcion",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#F7CC31",
          cancelButtonColor: "#cfcfcf",
          confirmButtonText: "Si, añadir a favoritos",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(token);
            favProveedor(idUsuario, idNegocio)
              .then((response) => {
                console.log(response.data.mensaje);
                if (
                  response.data.mensaje ===
                  "El proveedor se añadió la lista de favoritos"
                ) {
                  Swal.fire(
                    "Añadido!",
                    '"' +
                      lsprov.nombre_empresa +
                      '" se ha añadido a tu lista de favoritos',
                    "success"
                  );
                } else {
                  if (
                    response.data.mensaje ===
                    "El proveedor ya esta en tu lista de favoritos"
                  ) {
                    Swal.fire(
                      "No añadido!",
                      '"' +
                        lsprov.nombre_empresa +
                        '" ya se encuentra en tu lista da favoritos. sí deseas eliminarlo de esta, dirígete a tu perfil para poder realizar esta acción ',
                      "warning"
                    );
                  }
                }
              })
              .catch((e) => {
                console.error("No funcionó la petición" + e);
                Swal.fire({
                  icon: "error",
                  title: "Ocurrió un error",
                  showConfirmButton: false,
                  timer: 2000,
                });
              });
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Necesitas tener una cuenta de usuario con mascota si quieres añadir proveedores a tu lista de favoritos",
          footer:
            '<a href="/registrar">¿Quieres crear una cuenta como usuario?</a>',
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Necesitas iniciar sesion para poder añadir proveedores a tu lista de favoritos",
        footer: '<a href="/Ingresar">¿Quieres iniciar sesion?</a>',
      });
    }
  };

  const quitarFavorito = (card) => (event) => {
    
  };

  const favoritosSS = window.sessionStorage.getItem("favoritos");
  // const favoritos = "Hola favoritos";
  const favoritos = favoritosSS.split(",");
  console.log("Favoritos: ");
  console.log(favoritos);

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
                        {
                        favoritos.includes(card._id) ? 
                        <Button
                        onClick={quitarFavorito(card._id)}
                        size="small"
                        variant="contained"
                        style={{
                          backgroundColor: "#004F67",
                          color: "#F7CC31",
                        }}
                      >
                        <StarIcon />
                        Favorito
                      </Button>
                         : 
                          <Button
                            onClick={agregarFavorito(card)}
                            size="small"
                            variant="contained"
                            style={{
                              backgroundColor: "#004F67",
                              color: "#CAE4DB",
                            }}
                          >
                            <StarIcon />
                            Agregar favorito
                          </Button>
                        
                        }

                        {/* <Button
                          onClick={agregarFavorito(card)}
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#ddd",
                            color: "#00303F",
                          }}
                        >
                          <StarIcon />
                          Añadir a favoritos
                        </Button> */}
                        <Button
                          onClick={visitarPagina(card._id)}
                          size="small"
                          variant="contained"
                          style={{
                            backgroundColor: "#004F67",
                              color: "#CAE4DB",
                          }}
                        >
                          <InfoIcon />
                          Ver página
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
