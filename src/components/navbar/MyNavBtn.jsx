import React from 'react';
import { NavLink } from 'react-router';

const MyNavBtn = ({ to, children, icon }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-3 rounded-sm font-medium text-sm transition-all duration-300
                 ${isActive 
                    ? 'bg-[#244D3F] text-white' 
                    : ''
                 }`
            }
        >
            <span className="text-xl">{icon}</span>
            <span>{children}</span>
        </NavLink>
    );
};

export default MyNavBtn;
