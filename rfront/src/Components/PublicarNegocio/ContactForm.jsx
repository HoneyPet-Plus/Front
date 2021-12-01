import React from 'react'
import { InputGroup, Form, FormControl } from 'react-bootstrap';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { InputMap } from './InputMap';


function ContactForm() {
    const [bizHour, setBizHour] = useLocalStorage('bizHour', '')
    const [bizTel, setBizTel] = useLocalStorage('bizTel', '')
    const [bizDir, setBizDir] = useLocalStorage('bizDir', '')
    const [bizEmail, setBizEmail] = useLocalStorage('bizEmail', '')
    const [bizWeb, setBizWeb] = useLocalStorage('bizWeb', '')
    const [bizOtro, setBizOtro] = useLocalStorage('bizOtro', '')

    return (
        <div>
            <h2 className="mb-4">Datos de Contacto</h2>
            <InputGroup className="mb-1">
                <InputGroup.Text id="biz-hour">*Horario:</InputGroup.Text>
                <FormControl 
                onChange={e => setBizHour(e.target.value)}
                value={bizHour}
                placeholder="Horario de Atención"
                aria-label="biz-hour"
                aria-describedby="biz-hour"
                />
            </InputGroup>
            <Form.Text id="bizHourHelpBlock" muted>
                <span className="badge bg-secondary">Formato Sugerido: </span> Lun a Sab de 10am a 9pm
            </Form.Text>
            <InputGroup className="my-4">
                <InputGroup.Text id="biz-tel">*Teléfono:</InputGroup.Text>
                <FormControl 
                onChange={e => setBizTel(e.target.value)}
                value={bizTel}
                placeholder="Ejemplo: 300 233 4455"
                aria-label="biz-tel"
                aria-describedby="biz-tel"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-dir">Dirección:</InputGroup.Text>
                <FormControl 
                onChange={e => setBizDir(e.target.value)}
                value={bizDir}
                placeholder="Ejemplo: Calle 5 # 43 - 12"
                aria-label="biz-dir"
                aria-describedby="biz-dir"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-email">*Email:</InputGroup.Text>
                <FormControl 
                onChange={e => setBizEmail(e.target.value)}
                value={bizEmail}
                placeholder="ejemplo@email.com"
                aria-label="biz-email"
                aria-describedby="biz-email"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-web">Sitio Web:</InputGroup.Text>
                <FormControl 
                onChange={e => setBizWeb(e.target.value)}
                value={bizWeb}
                placeholder="ejemplo.com"
                aria-label="biz-web"
                aria-describedby="biz-web"
                />
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text id="biz-otro">Otro:</InputGroup.Text>
                <FormControl 
                onChange={e => setBizOtro(e.target.value)}
                value={bizOtro}
                placeholder="Información adicional o complementaria"
                aria-label="biz-otro"
                aria-describedby="biz-otro"
                />
            </InputGroup>
            <Form.Text id="bizOtroHelpBlock" muted>
                <span className="badge bg-secondary">Sugerencias: </span> Servicio a domicilio, Solo con cita previa, etc...
            </Form.Text>

            <div className="my-4">
                <h5>*Ubicación exacta de su negocio:</h5>
                <p>Mueva el mapa para ajustar la posicición exacta de su negocio, luego presione el botón "Asignar Ubicación" o "Actualizar Ubicación".</p>
                <InputMap />
                
            </div>
            <p className="mb-4">*Campos obligatorios</p>
        </div>
    )
}

export default ContactForm
