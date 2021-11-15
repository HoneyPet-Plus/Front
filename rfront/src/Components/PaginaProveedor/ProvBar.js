import React from 'react';

function ProvBar({email}) {
    return (
        <div>
            <span>{email}</span>
            <button>Eliminar Perfil</button>
            <button>Editar Datos</button>
            <button>Cerrar Sesión</button>
        </div>
    );
}

export default ProvBar;
