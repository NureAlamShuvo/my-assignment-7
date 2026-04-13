import React, { useState } from 'react';
import NavLogo from '../../assets/images/logo.png';
import { IoCloseOutline, IoHomeOutline, IoMenuOutline, IoTimeOutline } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';
import MyNavBtn from './MyNavBtn';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

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

                <div className="hidden md:flex items-center gap-2 p-1.5">
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

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col px-4 pb-4 gap-2">
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
            )}

        </nav>
    );
};

export default Navbar;
