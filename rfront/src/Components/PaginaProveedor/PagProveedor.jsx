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
import { useParams, useNavigate } from 'react-router-dom';
import { getProvById } from '../../services/NegocioService';

// referencia para la logica de negocio: https://youtu.be/0Q7LA6jRdA4?t=9251

function PagProveedor() {

  const { negocioId } = useParams();
  const [pageData, setPageData] = useState({
    contacto_id: null,
    nombre_empresa: '',
    eslogan: '',
    descripcion_corta : '',
    descripcion_empresa : '',
    imagen_destacada : '',
    color_tema: '#333',
    horario_atencion : '',
    telefono : 0,
    direccion : '',
    email : '',
    web: '',
    otro: '',
    ubicacion_mapa: {} ,
    productos: [ 
      {
        tipo: '',
        titulo: '',
        descripcion: ''
      },
      {
        tipo: '',
        titulo: '',
        descripcion: ''
      }, 
      {
        tipo: '',
        titulo: '',
        descripcion: ''
      }
    ]
  })

  const navigate = useNavigate()

  const txtColor = '#ddd'
  
  const userEmailSS = window.sessionStorage.getItem('correo') 
  const empresaIdSS = window.sessionStorage.getItem('empresa_id')
  
  useEffect(() => {
    getProvById(negocioId)
      .then((response) => {
        setPageData(response.data)
        // PREGUNTAR POR QUE???
        console.log('Funka respuesta de la peticion: ');
        console.log(response.data)
        console.log(pageData);
        window.localStorage.setItem('bizName', JSON.stringify(response.data.nombre_empresa))
        window.localStorage.setItem('bizSlogan', JSON.stringify(response.data.eslogan))
        window.localStorage.setItem('bizDesc', JSON.stringify(response.data.descripcion_corta))
        window.localStorage.setItem('bizDescription', JSON.stringify(response.data.descripcion_empresa))
        window.localStorage.setItem('bizHour', JSON.stringify(response.data.horario_atencion))
        window.localStorage.setItem('bizTel', response.data.telefono)
        window.localStorage.setItem('bizDir', JSON.stringify(response.data.direccion))
        window.localStorage.setItem('bizEmail', JSON.stringify(response.data.email))
        window.localStorage.setItem('bizWeb', JSON.stringify(response.data.web))
        window.localStorage.setItem('bizOtro', JSON.stringify(response.data.otro))
        window.localStorage.setItem('bizLat', response.data.ubicacion_mapa.lat)
        window.localStorage.setItem('bizLng', response.data.ubicacion_mapa.log)
        window.localStorage.setItem('bizPSEtype', JSON.stringify(response.data.productos[0].tipo))
        window.localStorage.setItem('bizPSEtitle', JSON.stringify(response.data.productos[0].titulo))
        window.localStorage.setItem('bizPSEdesc', JSON.stringify(response.data.productos[0].descripcion))
        window.localStorage.setItem('bizPS2type', JSON.stringify(response.data.productos[1].tipo))
        window.localStorage.setItem('bizPS2title', JSON.stringify(response.data.productos[1].titulo))
        window.localStorage.setItem('bizPS2desc', JSON.stringify(response.data.productos[1].descripcion))
        window.localStorage.setItem('bizPS3type', JSON.stringify(response.data.productos[2].tipo))
        window.localStorage.setItem('bizPS3title', JSON.stringify(response.data.productos[2].titulo))
        window.localStorage.setItem('bizPS3desc', JSON.stringify(response.data.productos[2].descripcion))

      })
      .catch((e) => {
        console.error('La petición no se completó: ')
        console.error(e);
      });

  }, [])

  const handleToMap = () => {
    window.localStorage.setItem('centerLat', pageData.ubicacion_mapa.lat)
    window.localStorage.setItem('centerLng', pageData.ubicacion_mapa.lng)
    navigate('/mapa')
  }

  return (
    <div className="pag-container">
      <header>
        {
          window.sessionStorage.getItem('rol')==='proveedor'&&negocioId===empresaIdSS ? <ProvAdminBar email={userEmailSS} /> : <FavBtn />
        }
        <ProvImg src={pageData.imagen_destacada} />
        <Box className="hero-container" sx={{
          maxWidth: 900,
          backgroundColor: pageData.color_tema,
          marginX: 'auto',
          textAlign: 'center',
          paddingY:5,
          paddingX:7,
          color: `${txtColor}`
        }}>
          <ProvInfo 
          provName={pageData.nombre_empresa}
          provSlogan={pageData.eslogan}
          provDesc={pageData.descripcion_corta}
          />
        </Box>
        {/* </div> */}
      </header>
      <div className="flex-container">
        <aside className="aside-bizp">
          <Box sx={{
            // maxWidth: 400,
            backgroundColor: pageData.color_tema,
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
              <Button 
                onClick={handleToMap}
                className="map-btn" 
                variant="warning"
              >
                Ver en Mapa
              </Button>
            </div>
          </Box>
        </aside>
        <main className="main-bizp">
          <section className="prov-description">
            <Box sx={{ mb: 4, color: pageData.color_tema}}>
              <h3>Descripción de la Empresa</h3>
              <Box sx={{
                height: 2,
                bgcolor: pageData.color_tema
              }} />
            </Box>
            <ProvDescription 
            description={pageData.descripcion_empresa}
            />
          </section>
          <section className="prov-services">
            <Box sx={{ my: 4, color: pageData.color_tema}}>
              <h3>Productos / Servicios</h3>
              <Box sx={{
                height: 2,
                bgcolor: pageData.color_tema
              }} />
            </Box>

            <Box sx={{
              backgroundColor: pageData.color_tema,
              borderRadius:5,
              textAlign: 'center',
              padding: 3,
              color: `${txtColor}`,
              mb: 3
            }}>
              <h4><StarsIcon /> {pageData.productos[0].tipo}</h4>
              <ProvOffer 
              title={pageData.productos[0].titulo}
              description={pageData.productos[0].descripcion}
              />
            </Box>

            <div className="offer-container">
              <Box className="rps-card" sx={{
                border: 1,
                borderColor: pageData.color_tema,
                borderRadius:4,
                padding: 3,
                color: pageData.color_tema
              }}>
                <h4>{pageData.productos[1].tipo==="Producto"?<AddShoppingCartIcon />:<BusinessCenterIcon />} {pageData.productos[1].tipo}</h4>
                <ProvOffer 
                title={pageData.productos[1].titulo}
                description={pageData.productos[1].descripcion}
                />
              </Box>
              <Box className="rps-card" sx={{
                border: 1,
                borderColor: pageData.color_tema,
                borderRadius:4,
                padding: 3,
                color: pageData.color_tema
              }}>
                <h4>{pageData.productos[2].tipo==="Producto"?<AddShoppingCartIcon />:<BusinessCenterIcon />} {pageData.productos[2].tipo}</h4>
                <ProvOffer 
                title={pageData.productos[2].titulo}
                description={pageData.productos[2].descripcion}
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