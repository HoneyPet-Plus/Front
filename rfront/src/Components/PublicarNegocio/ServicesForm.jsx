import React from 'react'
import { Form, InputGroup, FormControl, FloatingLabel } from 'react-bootstrap';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

function ServicesForm() {
    const [bizPSEtype, setBizPSEtype] = useLocalStorage('bizPSEtype', '')
    const [bizPSEtitle, setBizPSEtitle] = useLocalStorage('bizPSEtitle', '')
    const [bizPSEdesc, setBizPSEdesc] = useLocalStorage('bizPSEdesc', '')
    const [bizPS2type, setBizPS2type] = useLocalStorage('bizPS2type', '')
    const [bizPS2title, setBizPS2title] = useLocalStorage('bizPS2title', '')
    const [bizPS2desc, setBizPS2desc] = useLocalStorage('bizPS2desc', '')
    const [bizPS3type, setBizPS3type] = useLocalStorage('bizPS3type', '')
    const [bizPS3title, setBizPS3title] = useLocalStorage('bizPS3title', '')
    const [bizPS3desc, setBizPS3desc] = useLocalStorage('bizPS3desc', '')
    

    return (
        <div>
            <h2 className="mb-4">Productos / Servicios</h2>
            <h5>*Producto o Servicio Destacado:</h5>
            <Form.Group className="mb-4" controlId="spStar">
                <Form.Select 
                    onChange={e => setBizPSEtype(e.target.value)}
                    value={bizPSEtype}
                    className="mb-2" 
                    aria-label="tipo-star"
                >
                    <option>*Seleccione un Tipo...</option>
                    <option value="Servcio Estrella">Servicio Estrella</option>
                    <option value="Producto Estrella">Producto Estrella</option>
                </Form.Select>
                <InputGroup className="mb-2">
                    <InputGroup.Text id="biz-sps">*Título:</InputGroup.Text>
                    <FormControl
                    onChange={e => setBizPSEtitle(e.target.value)}
                    value={bizPSEtitle}
                    placeholder="Nombre del producto o servicio"
                    aria-label="biz-sps"
                    aria-describedby="biz-sps"
                    />
                </InputGroup>
                <FloatingLabel controlId="spdescs" label="*Descripción">
                    <Form.Control 
                    onChange={e => setBizPSEdesc(e.target.value)}
                    value={bizPSEdesc}
                    as="textarea"
                    style={{ height: '110px' }}
                    />
                </FloatingLabel>
            </Form.Group>

            <h5>*Producto o Servicio Nº 2:</h5>
            <Form.Group className="mb-4" controlId="sp2">
                <Form.Select 
                    onChange={e => setBizPS2type(e.target.value)}
                    value={bizPS2type}
                    className="mb-2" 
                    aria-label="tipo-sp2"
                >
                    <option>*Seleccione un Tipo...</option>
                    <option value="Servcio">Servicio</option>
                    <option value="Producto">Producto</option>
                </Form.Select>
                <InputGroup className="mb-2">
                    <InputGroup.Text id="biz-sp2">*Título:</InputGroup.Text>
                    <FormControl 
                    onChange={e => setBizPS2title(e.target.value)}
                    value={bizPS2title}
                    placeholder="Nombre del producto o servicio"
                    aria-label="biz-sp2"
                    aria-describedby="biz-sp2"
                    />
                </InputGroup>
                <FloatingLabel controlId="spdesc2" label="*Descripción">
                    <Form.Control
                    onChange={e => setBizPS2desc(e.target.value)}
                    value={bizPS2desc}
                    as="textarea"
                    style={{ height: '110px' }}
                    />
                </FloatingLabel>
            </Form.Group>

            <h5>*Producto o Servicio Nº 3:</h5>
            <Form.Group className="mb-4" controlId="sp3">
                <Form.Select 
                    onChange={e => setBizPS3type(e.target.value)}
                    value={bizPS3type}
                    className="mb-2" 
                    aria-label="tipo-sp3"
                >
                    <option>*Seleccione un Tipo...</option>
                    <option value="Servcio">Servicio</option>
                    <option value="Producto">Producto</option>
                </Form.Select>
                <InputGroup className="mb-2">
                    <InputGroup.Text id="biz-sp3">*Título:</InputGroup.Text>
                    <FormControl 
                    onChange={e => setBizPS3title(e.target.value)}
                    value={bizPS3title}
                    placeholder="Nombre del producto o servicio"
                    aria-label="biz-sp3"
                    aria-describedby="biz-sp3"
                    />
                </InputGroup>
                <FloatingLabel controlId="spdesc3" label="*Descripción">
                    <Form.Control
                    onChange={e => setBizPS3desc(e.target.value)}
                    value={bizPS3desc}
                    as="textarea"
                    style={{ height: '110px' }}
                    />
                </FloatingLabel>
            </Form.Group>
        </div>
    )
}

export default ServicesForm
