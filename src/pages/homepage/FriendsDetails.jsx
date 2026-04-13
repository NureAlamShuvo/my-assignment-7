import React from 'react';

const FriendsDetails = () => {
    return (
        <div className='container mx-auto mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-4 px-4'>
            <div className='p-8 text-center shadow-sm rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                <h2 className='font-semibold text-3xl text-[#244D3F]'>10</h2>
                <p className='text-[#64748B] text-[1.17rem]'>Total Friends</p>
            </div>
            <div className='p-8 text-center shadow-sm rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                <h2 className='font-semibold text-3xl text-[#244D3F]'>3</h2>
                <p className='text-[#64748B] text-[1.17rem]'>On Track</p>
            </div>
            <div className='p-8 text-center shadow-sm rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                <h2 className='font-semibold text-3xl text-[#244D3F]'>6</h2>
                <p className='text-[#64748B] text-[1.17rem]'>Need Attention</p>
            </div>
            <div className='p-8 text-center shadow-sm rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                <h2 className='font-semibold text-3xl text-[#244D3F]'>12</h2>
                <p className='text-[#64748B] text-[1.17rem]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default FriendsDetails;