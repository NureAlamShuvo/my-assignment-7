import React from 'react';
import { Outlet, } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { PuffLoader } from 'react-spinners';

const RootLayout = () => {

    return (
        <div>
            <Navbar />


            <Outlet />


            <Footer />
        </div>
    );
};

export default RootLayout;
