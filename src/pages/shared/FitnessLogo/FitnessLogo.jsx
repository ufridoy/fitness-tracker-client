import React from 'react';
import logo from "../../../assets/logo.png"
import { Link } from 'react-router';

const FitnessLogo = () => {
    return (
        <Link to="/">
            <div className='flex gap-1 items-center'>
                <img className='w-10' src={logo} alt="" />
                <p className='text-2xl font-extrabold leading-none'><span>Fitness</span> <br /> <span>Tracker</span></p>
            </div>
        </Link>
    );
};

export default FitnessLogo;