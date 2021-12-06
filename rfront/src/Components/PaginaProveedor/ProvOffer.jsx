import React from 'react';

function ProvOffer({offerType, title, description}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProvOffer;