import React from 'react'
// import Form from 'react-bootstrap/Form'
import { Form, InputGroup, FormControl, FloatingLabel } from 'react-bootstrap';

function ServicesForm() {
    return (
        <div>
            <h2 className="mb-4">Productos / Servicios</h2>
            <h5>*Producto o Servicio Destacado:</h5>
            <Form.Group className="mb-4" controlId="spStar">
                <Form.Select className="mb-2" aria-label="tipo-star">
                    <option>*Seleccione un Tipo...</option>
                    <option value="ss">Servicio Estrella</option>
                    <option value="ps">Producto Estrella</option>
                </Form.Select>
                <InputGroup className="mb-2">
                    <InputGroup.Text id="biz-sps">*Título:</InputGroup.Text>
                    <FormControl
                    placeholder="Nombre del producto o servicio"
                    aria-label="biz-sps"
                    aria-describedby="biz-sps"
                    />
                </InputGroup>
                <FloatingLabel controlId="spdescs" label="*Descripción">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '110px' }}
                    />
                </FloatingLabel>
            </Form.Group>

            <h5>*Producto o Servicio Nº 2:</h5>
            <Form.Group className="mb-4" controlId="sp2">
                <Form.Select className="mb-2" aria-label="tipo-sp2">
                    <option>*Seleccione un Tipo...</option>
                    <option value="s2">Servicio</option>
                    <option value="p2">Producto</option>
                </Form.Select>
                <InputGroup className="mb-2">
                    <InputGroup.Text id="biz-sp2">*Título:</InputGroup.Text>
                    <FormControl
                    placeholder="Nombre del producto o servicio"
                    aria-label="biz-sp2"
                    aria-describedby="biz-sp2"
                    />
                </InputGroup>
                <FloatingLabel controlId="spdesc2" label="*Descripción">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '110px' }}
                    />
                </FloatingLabel>
            </Form.Group>

            <h5>*Producto o Servicio Nº 3:</h5>
            <Form.Group className="mb-4" controlId="sp3">
                <Form.Select className="mb-2" aria-label="tipo-sp3">
                    <option>*Seleccione un Tipo...</option>
                    <option value="s3">Servicio</option>
                    <option value="p3">Producto</option>
                </Form.Select>
                <InputGroup className="mb-2">
                    <InputGroup.Text id="biz-sp3">*Título:</InputGroup.Text>
                    <FormControl
                    placeholder="Nombre del producto o servicio"
                    aria-label="biz-sp3"
                    aria-describedby="biz-sp3"
                    />
                </InputGroup>
                <FloatingLabel controlId="spdesc3" label="*Descripción">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '110px' }}
                    />
                </FloatingLabel>
            </Form.Group>
        </div>
    )
}

export default ServicesForm
