import React, { useEffect, useState } from 'react';
import './PagProveedor.css';
import ProvAdminBar from './ProvAdminBar';
import ProvImg from './ProvImg';
import FavBtn from './FavBtn';
import ProvContactData from './ProvContactData';
import ProvInfo from './ProvInfo';
import ProvDescription from './ProvDescription';
import ProvOffer from './ProvOffer';
import Box from '@mui/material/Box';
import mapImg from "../../assets/proveedor/map.png";
import Button from 'react-bootstrap/Button'
import StarsIcon from '@mui/icons-material/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useParams } from 'react-router-dom';
import { getProvById } from '../../services/NegocioService';

// referencia para la logica de negocio: https://youtu.be/0Q7LA6jRdA4?t=9251

function PagProveedor() {

  const { myPageIdSS } = useParams();
  const [pageData, setPageData] = useState({})

  const [bgColor, setBgColor] = useState('#333')
  const [txtColor, setTxtColor] = useState('#ddd')
  
  const userEmailSS = window.sessionStorage.getItem('correo') 
  const empresaIdSS = window.sessionStorage.getItem('empresa_id')
  
  useEffect(() => {
    console.log('aqui va la petición' + myPageIdSS)
    getProvById(myPageIdSS)
    .then((response) => {
      setPageData(response.data)
      // PREGUNTAR POR QUE???
      console.log('Funka respuesta de la peticion: ');
      console.log(response.data)
      console.log(pageData);
    })
    .catch((e) => console.error('La petición no se completó: '+ e));

  }, [])

  return (
    <div className="pag-container">
      <header>
        {
          window.sessionStorage.getItem('rol')==='proveedor'&&myPageIdSS===empresaIdSS ? <ProvAdminBar email={userEmailSS} /> : <FavBtn />
        }
        <ProvImg src={pageData.imagen_destacada} />
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
          provName={pageData.nombre_empresa}
          provSlogan={pageData.descripcion_corta}
          provDesc={pageData.descripcion_empresa}
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
              data={pageData.horario_atencion}
              />
              <ProvContactData 
              type="Teléfono:"
              data={pageData.telefono}
              />
              <ProvContactData 
              type="Dirección:"
              data={pageData.direccion}
              />
              <ProvContactData 
              type="Email:"
              data={pageData.email}
              />
              <ProvContactData 
              type="Sitio Web:"
              data={pageData.web}
              />
              <ProvContactData 
              type="Otro:"
              data={pageData.otro}
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
            description={pageData.descripcion_empresa}
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
              <h4><StarsIcon /> algo</h4>
              <ProvOffer 
              offerType=''
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
                <h4><AddShoppingCartIcon />  algo</h4>
                <ProvOffer 
                offerType='algo'
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
                <h4><BusinessCenterIcon />  algo</h4>
                <ProvOffer 
                offerType='algo'
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