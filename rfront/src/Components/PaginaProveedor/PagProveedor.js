import './PagProveedor.css';
import ProvBar from './ProvBar';
import ProvImg from './ProvImg';
import ProvContactData from './ProvContactData';
import ProvInfo from './ProvInfo';
import ProvOffer from './ProvOffer';

function PagProveedor() {
  return (
    <div className="container">
      <header>
          <ProvBar email="dummy2@email.com"/>
          <ProvImg src="https://loremflickr.com/1440/600/pets"/>
      </header>
      <aside>
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
      </aside>
      <main>
        <ProvInfo 
        provName="Nombre Empresa LTDA."
        provSlogan="Eslogan de la empresa"
        provDesc="Descripción limitada de la empresa, para saber que hace la empresa o que ofrece de diferente"
        />
        <section>
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
  );
}

export default PagProveedor;