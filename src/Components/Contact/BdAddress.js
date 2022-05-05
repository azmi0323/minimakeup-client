import React from 'react';
import { Link } from 'react-router-dom';

const BdAddress = () => {
    return (
        <div className=' container'>
      <div className='d-flex justify-contain-between align-items-center py-5'>
        <div>
          <h1>Street: 17/4 Dhanmondi.</h1>
          <h1>City: Dhaka</h1>
          <h1>Phone: +880303823282</h1>
          <h1>Email: azmihabib0323@gmail.com</h1>
          <Link to='/contact'>Go Back to contact page </Link>
        </div>
       
      </div>
    </div>
    );
};

export default BdAddress;