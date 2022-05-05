import React from 'react';
import { Link } from 'react-router-dom';

const UsaAddress = () => {
    return (
        <div className=' container'>
      <div className='d-flex justify-contain-between align-items-center py-5'>
        <div>
          <h1>Street: 1203 SN Street</h1>
          <h1>City: New York</h1>
          <h1>Phone: +1(607)2333333</h1>
          <h1>Email: azmihabib0323@gmail.com</h1>
          <Link to='/contact'>Go Back to contact page </Link>
        </div>
       
      </div>
    </div>
    );
};

export default UsaAddress;