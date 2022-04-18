import React from 'react';

import { Link, useParams } from 'react-router-dom';
import './VisitDetails.css'

const VisitDetails = () => {
    const { visitId } = useParams();
    return (
        <div>
            <h2>This is visit details page:{visitId}</h2>
            <div className='text-center'>
                <Link to='/checkout'><button style={{ width: "15%", height: "100%" }} className='btn btn-primary '>Proceed to Checkout</button></Link>
            </div>

        </div>
    );
};

export default VisitDetails;