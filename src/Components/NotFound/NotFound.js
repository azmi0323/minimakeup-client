import React from 'react';
import notFound from '../../img/notFound.png'
const NotFound = () => {
    return (
        <div>
            <img src={notFound} className='img-fluid my-5' alt="" />
            <h3 className='text-center mb-5 fw-bold text-danger'>Page Not Found</h3>
        </div>
    );
};

export default NotFound;