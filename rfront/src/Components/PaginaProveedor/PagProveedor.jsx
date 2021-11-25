import './PagProveedor.css';
import ProvBar from './ProvBar';
import ProvImg from './ProvImg';
import ProvContactData from './ProvContactData';
import ProvInfo from './ProvInfo';
import ProvDescription from './ProvDescription';
import ProvOffer from './ProvOffer';
import Box from '@mui/material/Box';

function PagProveedor() {
  const bgColor = '#333';
  const txtColor = 'whitesmoke';

  return (
    <div className="pag-container">
      <header>
        <ProvBar email="dummy2@email.com"/>
        <ProvImg src="https://loremflickr.com/1440/560/cat"/>
        <Box sx={{
          maxWidth: 800,
          backgroundColor: `${bgColor}`,
          marginBottom: 2,
          marginTop: 2,
          marginX: 'auto',
          borderRadius:5,
          textAlign: 'center',
          paddingY:3,
          paddingX:4,
          color: `${txtColor}`
        }}>
          <ProvInfo 
          provName="HoneyPet DC"
          provSlogan="Adopta o Publica Mascotas que Necesitan Amor y Hogar"
          provDesc="Sumamos amor a las familias, dandole una segunda oportunidad a una mascota que necesita un hogar. En este sitio podrás publicar o adoptar una mascota en cualquier lugar de Colombia."
          />
        </Box>
      </header>
      <div className="flex-container">
        <aside className="aside-bizp">
          <Box sx={{
            maxWidth: 400,
            backgroundColor: `${bgColor}`,
            borderRadius:5,
            paddingY: 3,
            paddingX: 4,
            color: `${txtColor}`
          }}>
            <h2>Datos de Contacto</h2>
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
            </dl>
          </Box>
        </aside>
        <main className="main-bizp">
          <section className="prov-description">
            <ProvDescription 
            description="Es un proyecto que nace como ejercicio y muestra de las habilidades adquiridas durante el tercer ciclo del diplomado en programación MisionTIC2022, impartido por la Universidad Tecnológica de Pereira UTP y el Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia (MinTIC).

            El proyecto fue desarrollado con tecnologías de Javascript stack MENV (Vue.JS, Node.Js, Express y MongoDB).
            
            El código fuente, los diseños y logotipos fueron desarrollados por el equipo de trabajo, los datos de los usuarios y mascotas son ficticios, las fotografías que se usaron están bajo licencia de uso libre."
            />
          </section>
          <section className="prov-services">
              <ProvOffer 
              type="servicio" 
              title="Servicio uno" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="servicio" 
              title="Servicio dos" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="servicio" 
              title="Servicio tres" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="producto" 
              title="Producto uno" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="producto" 
              title="Producto dos" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
          </section>
        </main>
      </div>
    </div>
  );
}

export default PagProveedor;