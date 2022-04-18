import React from 'react';

import { Link, useParams } from 'react-router-dom';
import './VisitDetails.css'

const VisitDetails = () => {
    const { visitId } = useParams();
    return (
        <div className='visit-container'>
            <h2 className='text-center'>This is visit details page</h2>
            <div className='text-center'>
                <Link to='/checkout'><button style={{ width: "15%", height: "100%" }} className='btn btn-primary '>Proceed to Checkout</button></Link>
            </div>

        </div>
    );
};

export default VisitDetails;