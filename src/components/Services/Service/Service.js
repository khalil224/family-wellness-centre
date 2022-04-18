import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, visit } = service;

    const navigate = useNavigate()
    const VisitProceedDetail = id => {
        navigate(`/visit/${id}`)
    }

    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h6 className='fw-bold'>Visit: {visit}</h6>
            <p className='mb-5 fw-bold'><small>{description}</small></p>
            <div>
                <button onClick={() => VisitProceedDetail(id)} className='btn-visit'>Serial: {name} </button>
            </div>

        </div>
    );
};

export default Service;