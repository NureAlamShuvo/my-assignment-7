import React from 'react';
import { useLoaderData } from 'react-router';

const AllFriends = () => {

    const friendsData = useLoaderData();
    console.log(friendsData,"all friends data");

    return (
        <div className='container mx-auto px-4'>
            <h2 className='font-semibold text-2xl text-[#1F2937] mb-4'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    friendsData.map((friend) => {

                        const statusBadge = friend.status === "overdue" ? "bg-[#EF4444] text-white" : friend.status === "almost due" ? "bg-[#EFAD44] text-white" : "bg-[#244D3F] text-white";

                        return <div key={friend.id} className='p-4 text-center space-y-3 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white'>
                            <img src={friend.picture} alt="" className='w-40 h-40 mx-auto rounded-full' />
                            <h2 className='font-semibold text-2xl text-[#1F2937]'>{friend.name}</h2>
                            <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
                            <div>
                                {
                                friend.tags.map((tag, ind) => (
                                    <span key={ind} className='badge badge-soft badge-success mr-2'>{tag}</span>
                                ))
                            }
                            </div>
                            <span className={`badge rounded-full ${statusBadge}`}>{friend.status}</span>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;
