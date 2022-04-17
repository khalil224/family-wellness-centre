import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, visit } = service;
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p >Visit: {visit}</p>
            <p><small>{description}</small></p>
            <div>
                <button className='btn btn-primary'>Serial: {name} </button>
            </div>

        </div>
    );
};

export default Service;