import React from 'react';
import FitnessLogo from '../pages/shared/FitnessLogo/FitnessLogo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
            <div>
                <FitnessLogo></FitnessLogo>
            </div>
            <div className="hero-content flex-col lg:flex">
                {/* <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div> */}
                <div className='flex'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;