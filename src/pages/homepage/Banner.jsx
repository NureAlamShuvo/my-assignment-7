import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='container mx-auto px-4 mt-16 md:mt-20'>
            <div className='text-center space-y-4'>
                <h2 className='font-bold text-[3rem] text-[#1F2937]'>Friends to keep close in your life</h2>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white hover:bg-[#1b3a30] transition duration-300'><FaPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;