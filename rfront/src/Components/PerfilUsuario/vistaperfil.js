import ImgMediaCard from "./cardperf";
import Grid from "@mui/material/Grid";
import "./vistaperfil.css";
import Userbar from "./userbar";

export default function VistaPerfil() {
  return (
    <div className="pag-container">
      <header>
        <Userbar />
        <h2 className="texx">Mis proveedores favoritos</h2>
      </header>

      <Grid container>
        {/* <Grid item md={4} sm={5} xs={12}>
                {
                  bizData.map(infoprov => (
                    <div key={infoprov.id}>
                      <ImgMediaCard nombre={infoprov.nombre_empresa} descripcion={infoprov.descripcion_corta} imagen={infoprov.imagen_destacada} />
                    </div>
                  ))
                }
              </Grid> */}
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="maximascotas"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/dog"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Ultrapets"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/cat"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
      </Grid>
    </div>
  );
}
