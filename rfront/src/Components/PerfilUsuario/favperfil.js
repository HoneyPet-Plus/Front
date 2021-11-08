import React from 'react'
import PropTypes from 'prop-types'
import './cfavperfil.css';


const Perfil = ({nombre,descripcion,direccion,foto}) => {
    return (
        <div className="container">
            <div className="card-container">
                <div className="header">
                    <a href="#">
                        <img src={foto} alt="" />
                    </a>
                    <h2>{nombre}</h2>
                    <h4>{direccion}</h4>
                </div>
                <div className="descripcion">
                    <p>{descripcion}</p>
                    <div className="botones">
                        <a href="#"><i class="fab fa-trash">eliminar</i></a>
                        <a href="#">visitar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

Perfil.propTypes = {

}

export default Perfil
