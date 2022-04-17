import React from 'react';
import { useParams } from 'react-router-dom';

const VisitDetails = () => {
    const { visitId } = useParams();
    return (
        <div>
            <h2>This is visit details page:{visitId}</h2>
        </div>
    );
};

export default VisitDetails;