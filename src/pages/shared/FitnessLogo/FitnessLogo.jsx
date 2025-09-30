import React from 'react';
import logo from "../../../assets/logo.png"

const FitnessLogo = () => {
    return (
        <Link to="/">
            <div className='flex items-start'>
                <img className='mb-2' src={logo} alt="" />
                <p className='text-3xl font-extrabold'>Fitness <br /> Tracker</p>
            </div>
        </Link>
    );
};

export default FitnessLogo;