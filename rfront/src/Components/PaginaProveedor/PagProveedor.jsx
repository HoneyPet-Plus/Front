import React, { useState } from 'react';
import './PagProveedor.css';
import ProvAdminBar from './ProvAdminBar';
import ProvImg from './ProvImg';
import FavBtn from './FavBtn';
import ProvContactData from './ProvContactData';
import ProvInfo from './ProvInfo';
import ProvDescription from './ProvDescription';
import ProvOffer from './ProvOffer';
import Box from '@mui/material/Box';
import hpdcImg from "../../assets/proveedor/hpdc-min.png";
import mapImg from "../../assets/proveedor/map.png";
import Button from 'react-bootstrap/Button'
import StarsIcon from '@mui/icons-material/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// referencia para la logica de negocio: https://youtu.be/0Q7LA6jRdA4?t=9251

function PagProveedor() {

  const [bgColor, setBgColor] = useState('#333')
  const [txtColor, setTxtColor] = useState('#ddd')

  const userEmailSS = window.sessionStorage.getItem('correo') 


  return (
    <div className="pag-container">
      <header>
        <ProvAdminBar email={userEmailSS} />
        <FavBtn />
        {/* <div className="img-cont"> */}
        <ProvImg src={hpdcImg} />
        {/* </div>
        <div className="hero-container">  */}
        <Box className="hero-container" sx={{
          maxWidth: 900,
          backgroundColor: `${bgColor}`,
          marginX: 'auto',
          textAlign: 'center',
          paddingY:5,
          paddingX:7,
          color: `${txtColor}`
        }}>
          <ProvInfo 
          provName="HoneyPet DC"
          provSlogan="Adopta o Publica Mascotas que Necesitan Amor y Hogar"
          provDesc="Sumamos amor a las familias, dandole una segunda oportunidad a una mascota que necesita un hogar. En este sitio podrás publicar o adoptar una mascota en cualquier lugar de Colombia."
          />
        </Box>
        {/* </div> */}
      </header>
      <div className="flex-container">
        <aside className="aside-bizp">
          <Box sx={{
            // maxWidth: 400,
            backgroundColor: `${bgColor}`,
            borderRadius:5,
            mb: 4,
            paddingY: 3,
            paddingX: 4,
            color: `${txtColor}`
          }}>
            <h3>Datos de Contacto</h3>
            <Box sx={{
              height: 2,
              mb: 4,
              bgcolor: `${txtColor}`
            }} />
            <dl>
              <ProvContactData 
              type="Horario de Atención:"
              data="L-S de 10:00am a 9:00pm"
              />
              <ProvContactData 
              type="Teléfono:"
              data="300 455 6677"
              />
              <ProvContactData 
              type="Dirección:"
              data="Calle 10 # 12 - 13"
              />
              <ProvContactData 
              type="Email:"
              data="hola@honeypetdc.com"
              />
              <ProvContactData 
              type="Sitio Web:"
              data="honeypetdc.com"
              />
              <ProvContactData 
              type="Otro:"
              data="Esta Página es Demostrativa"
              />
            </dl>
            <div className="map-img-container">
              <img className="map-img" src={mapImg} alt="Mapa Representativo" />
              <Button className="map-btn" variant="warning">Ver en Mapa</Button>
            </div>
          </Box>
        </aside>
        <main className="main-bizp">
          <section className="prov-description">
            <Box sx={{ mb: 4, color: `${bgColor}`}}>
              <h3>Descripción de la Empresa</h3>
              <Box sx={{
                height: 2,
                bgcolor: `${bgColor}`
              }} />
            </Box>
            <ProvDescription 
            description="Es un proyecto que nace como ejercicio y muestra de las habilidades adquiridas durante el tercer ciclo del diplomado en programación MisionTIC2022, impartido por la Universidad Tecnológica de Pereira UTP y el Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia (MinTIC).

            El proyecto fue desarrollado con tecnologías de Javascript stack MENV (Vue.JS, Node.Js, Express y MongoDB).
            
            El código fuente, los diseños y logotipos fueron desarrollados por el equipo de trabajo, los datos de los usuarios y mascotas son ficticios, las fotografías que se usaron están bajo licencia de uso libre."
            />
          </section>
          <section className="prov-services">
            <Box sx={{ my: 4, color: `${bgColor}`}}>
              <h3>Productos / Servicios</h3>
              <Box sx={{
                height: 2,
                bgcolor: `${bgColor}`
              }} />
            </Box>

            <Box sx={{
              backgroundColor: `${bgColor}`,
              borderRadius:5,
              textAlign: 'center',
              padding: 3,
              color: `${txtColor}`,
              mb: 3
            }}>
              <h4><StarsIcon /> Servicio</h4>
              <ProvOffer 
              offerType="Servicio" 
              title="Desarrollo de Software a Medida" 
              description="Servicio integral con el cual construimos las soluciones digitales que requiera su empresa brindando consultoría, acompañamiento y soporte en todas las etapas de su proyecto, ofreciendo la mejor solución posible ajustada a su situación y presupuesto." 
              />
            </Box>

            <div className="offer-container">
              <Box className="rps-card" sx={{
                border: 1,
                borderColor: `${bgColor}`,
                borderRadius:4,
                padding: 3,
                color: `${bgColor}`
              }}>
                <h4><AddShoppingCartIcon /> Producto</h4>
                <ProvOffer 
                offerType="producto" 
                title="Aplicación Estandar" 
                description="Usamos las mejores técnicas para ofrecerle una aplicación corporativa estandar que le ayudará a promocionar su empresa o marca." 
                />
              </Box>
              <Box className="rps-card" sx={{
                border: 1,
                borderColor: `${bgColor}`,
                borderRadius:4,
                padding: 3,
                color: `${bgColor}`
              }}>
                <h4><BusinessCenterIcon /> Servicio</h4>
                <ProvOffer 
                offerType="servicio" 
                title="Consultoría TIC" 
                description="Contamos con los profesionales, la experiencia y el respaldo para estudiar y estructurar su proyecto desde un enfoque profesional y efectivo." 
                />
              </Box>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PagProveedor;