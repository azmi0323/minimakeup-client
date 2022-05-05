import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className='px-4  py-5 mx-auto'>
      <div className='justify-contain-center align-items-center'>
        <h1 className=' fs-1 text-center '>
          Contact Us, Our Office Address Down Below
        </h1>

        <div className='d-flex justify-contain-center align-items-center'>
          <Link to='bdAddress' className='  py-1 px-3 text-dark fw-bold rounded mt-3 mx-1 bg-info w-50'>
            BD Address
          </Link>
          <Link to='usaAddress' className='py-1 px-3 text-dark fw-bold rounded mt-3 mx-1 bg-info w-50'>
            US Address
          </Link>
        </div>
      </div>
    </section>
    );
};

export default Contact;