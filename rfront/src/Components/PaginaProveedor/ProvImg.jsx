import React from 'react';

function ProvImg({src}) {
    return (
        <>
            <img className="hero-img" src={src} alt="Foto destacada" />
        </>
    );
}

export default ProvImg;