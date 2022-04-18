import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Information from './Information/Information';
import Service from './Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container' >
            <h2 className='service-title' >Our Services: {services.length}</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

            <Information></Information>
        </div>
    );
};

export default Services;