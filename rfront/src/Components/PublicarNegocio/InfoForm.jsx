import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useLocalStorage } from '../../Hooks/useLocalStorage';


function InfoForm() {
    // binding del form
    const [bizName, setBizName] = useLocalStorage('bizName', '')
    const [bizSlogan, setBizSlogan] = useLocalStorage('bizSlogan', '')
    const [bizDesc, setBizDesc] = useLocalStorage('bizDesc', '')
    const [bizDescription, setBizDescription] = useLocalStorage('bizDescription', '')

    return (
        <div>
            <h2 className="mb-4">Describa su Negocio</h2>
            {/* Input File - TODO: llevarlo a la admin page del proveedor
            <div className="mb-4">
                <label htmlFor="biz-img" className="form-label">Imagen destacada:</label>
                <input type="file" className="form-control mb-2" id="biz-img" accept="image/*" />
                <p><span className="badge bg-secondary">Consejo</span> La imagen debe tener un tamano de 1440 x 560</p>
            </div> */}
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-name">*Nombre del Negocio</InputGroup.Text>
                <FormControl 
                onChange={e => setBizName(e.target.value)}
                value={bizName}    
                placeholder="Nombre de la empresa o negocio"
                aria-label="biz-name"
                aria-describedby="biz-name"
                />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text id="biz-slogan">*Eslogan del Negocio</InputGroup.Text>
                <FormControl  
                onChange={e => setBizSlogan(e.target.value)}
                value={bizSlogan}   
                placeholder="Eslogan de la empresa o negocio"
                aria-label="biz-slogan"
                aria-describedby="biz-slogan"
                />
            </InputGroup>
            <div className="mb-4">
                <label htmlFor="biz-desc" className="form-label">*Descripcción Corta: </label>
                <textarea 
                onChange={e => setBizDesc(e.target.value)}
                value={bizDesc}   
                className="form-control"
                id="biz-desc"
                cols="30"
                rows="3"
                required
                placeholder="Una descripcción corta que estará destacada en la página de su negocio."
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="biz-description" className="form-label">*Descripcción: </label>
                <textarea 
                onChange={e => setBizDescription(e.target.value)}
                value={bizDescription}   
                className="form-control"
                id="biz-description"
                cols="30"
                rows="7"
                required
                placeholder="Describa su empresa o negocio."
                ></textarea>
            </div>
            <p className="mb-4">*Campos obligatorios</p>
        </div>
    )
}

export default InfoForm
