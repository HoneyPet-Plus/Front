import React from 'react';

function ProvInfo({provName, provSlogan, provDesc}) {
    return (
        <section className="hero-biz">
            <h1>{provName}</h1>
            <p className="slogan">{provSlogan}</p>
            <p>{provDesc}</p>
        </section>
    );
}

export default ProvInfo;