import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, visit } = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p >Visit: {visit}</p>
            <p><small>{description}</small></p>
            <button>Serial: {name} </button>

        </div>
    );
};

export default Service;