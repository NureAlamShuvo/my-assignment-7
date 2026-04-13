import React from 'react';
import NavLogo from '../../assets/images/logo.png';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';
import MyNavBtn from './MyNavBtn';

const Navbar = () => {

    const navBtnDetails = [
        {
            path: '/',
            text: "Home",
            icon: <IoHomeOutline />
        },
        {
            path: '/timeline',
            text: "Timeline",
            icon: <IoTimeOutline />
        },
        {
            path: '/stats',
            text: "Stats",
            icon: <ImStatsDots />
        }
    ]

    return (
        <nav className="bg-white shadow border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto py-4 flex justify-between items-center">
                    
                        <img
                            src={NavLogo}
                            alt="KeenKeeper Logo"
                            className="w-35"
                        />
                    
                    <div className="flex items-center gap-2 p-1.5">
                        {navBtnDetails.map((navBtn, ind) => (
                            <MyNavBtn
                                key={ind}
                                icon={navBtn.icon}
                                to={navBtn.path}
                            >
                                {navBtn.text}
                            </MyNavBtn>
                        ))}
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;