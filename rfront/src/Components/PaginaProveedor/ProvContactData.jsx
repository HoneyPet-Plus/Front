import React from 'react';

function ProvContactData({type, data}) {
    return (
        <>
            <dt className="dt-title">{type}</dt>
            <dd className="dd-data">{data}</dd>
        </>
    );
}

export default ProvContactData;