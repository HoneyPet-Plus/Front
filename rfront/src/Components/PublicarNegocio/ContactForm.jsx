import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';

function ContactForm() {
    return (
        <div>
            <h2 className="mb-4">Datos de Contacto</h2>
            <InputGroup className="mb-1">
                <InputGroup.Text id="biz-hour">*Horario:</InputGroup.Text>
                <FormControl
                placeholder="Horario de Atención"
                aria-label="biz-hour"
                aria-describedby="biz-hour"
                />
            </InputGroup>
            <p className="mb-4"><span className="badge bg-secondary">Formato Sugerido:</span> L - S de 10:00am a 9:00pm</p>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-tel">*Teléfono:</InputGroup.Text>
                <FormControl
                placeholder="Ejemplo: 300 233 4455"
                aria-label="biz-tel"
                aria-describedby="biz-tel"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-dir">Dirección:</InputGroup.Text>
                <FormControl
                placeholder="Ejemplo: Calle 5 # 43 - 12"
                aria-label="biz-dir"
                aria-describedby="biz-dir"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-email">*Email:</InputGroup.Text>
                <FormControl
                placeholder="ejemplo@email.com"
                aria-label="biz-email"
                aria-describedby="biz-email"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-web">Sitio Web:</InputGroup.Text>
                <FormControl
                placeholder="ejemplo.com"
                aria-label="biz-web"
                aria-describedby="biz-web"
                />
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="biz-otro">Otro:</InputGroup.Text>
                <FormControl
                placeholder="Información adicional o complementaria"
                aria-label="biz-otro"
                aria-describedby="biz-otro"
                />
            </InputGroup>
            <p className="mb-4"><span className="badge bg-secondary">Ejemplos:</span> Servicio a domicilio, Solo con cita previa, etc...</p>
            <div className="mb-4">
                <h5>*Seleccione la ubicación de su negocio:</h5>
                <div>MAPA</div>
            </div>
            <p className="mb-4">*Campos obligatorios</p>
        </div>
    )
}

export default ContactForm
