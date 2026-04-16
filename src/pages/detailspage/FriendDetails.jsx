import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiArchiveBox } from 'react-icons/hi2';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuBellRing } from 'react-icons/lu';
import { MdDelete, MdOutlineTextsms } from 'react-icons/md';
import { useLoaderData, } from 'react-router';
import { toast } from 'react-toastify';

const FriendDetails = () => {

    const friend = useLoaderData();

    const handleCheckInBtn = (type) => {
        const newEntry = {
            id: Date.now(),
            friendId: friend.id,
            friendName: friend.name,
            type,
            date: new Date().toLocaleDateString()
        };

        const oldData = JSON.parse(sessionStorage.getItem("timeline")) || [];

        sessionStorage.setItem("timeline", JSON.stringify([newEntry, ...oldData]));

        const updated = [newEntry, ...oldData];

        localStorage.setItem("timeline", JSON.stringify(updated));
        
        toast.success(`${type} with ${friend.name} added!`);
    };

    const statusBadge = friend.status === "overdue" ? "bg-[#EF4444] text-white" : friend.status === "almost due" ? "bg-[#EFAD44] text-white" : "bg-[#244D3F] text-white";

    return (
        <div className='container mx-auto mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-4'>
            <div>
                <div className='rounded-xl shadow-sm text-center p-6 space-y-4'>
                    <img src={friend.picture} alt='' className='w-40 h-40 mx-auto rounded-full' />
                    <h2 className='font-semibold text-2xl text-[#1F2937]'>{friend.name}</h2>
                    <span className={`badge rounded-full ${statusBadge}`}>{friend.status}</span>
                    <div>
                        {
                            friend.tags.map((tag, ind) => (
                                <span key={ind} className='badge badge-soft badge-success mr-2'>{tag}</span>
                            ))
                        }
                    </div>
                    <p className='text-[#64748B]'>{friend.bio}</p>
                    <p className='text-[#64748B]'>Email: {friend.email}</p>
                </div>

                {/* Snozee */}
                <div className='space-y-2 mt-4'>

                    <button className="btn btn-active w-full text-[#1F2937]"><LuBellRing />Snooze 2 weeks</button>
                    <button className="btn btn-active w-full text-[#1F2937]"><HiArchiveBox />Archive</button>
                    <button className="btn btn-active w-full text-red-500"><MdDelete />Delete</button>


                </div>
            </div>

            {/* right section */}

            <div className='space-y-6'>
                <div className='grid grid-cols-3 text-center gap-6'>

                    <div className='shadow-sm p-8 rounded-xl'>
                        <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.days_since_contact}</h2>
                        <p className='text-[#64748B] font-medium'>Days Since Contact</p>
                    </div>
                    <div className='shadow-sm p-8 rounded-xl'>
                        <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.goal}</h2>
                        <p className='text-[#64748B] font-medium'>Goal (Days)</p>
                    </div>
                    <div className='shadow-sm p-8 rounded-xl'>
                        <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.next_due_date}</h2>
                        <p className='text-[#64748B] font-medium'>Next Due</p>
                    </div>

                </div>

                <div className='shadow-sm rounded-xl p-6'>
                    <div className='flex justify-between'>

                        <h2 className='font-semibold text-3xl text-[#244D3F]'>Relationship Goal</h2>
                        <button className="btn btn-active">Edit</button>

                    </div>
                    <p><span className='text-[#64748B] font-medium'>Connect every</span> <span className='font-semibold text-[#1F2937]'>30 days</span></p>
                </div>


                <div className='shadow-sm rounded-xl p-6'>

                    <h2 className='font-medium text-xl text-[#244D3F]'>Quick Check-In</h2>
                    <div className='flex gap-4 mt-4 flex-wrap'>

                        <div onClick={() => handleCheckInBtn('Call')} className='bg-[#E9E9E9] p-6 w-40 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:shadow-md'>
                            <FiPhoneCall size={20} />
                            <h2 className='text-[#1F2937] font-medium'>Call</h2>
                        </div>
                        <div onClick={() => handleCheckInBtn('Text')} className='bg-[#E9E9E9] p-6 w-40 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:shadow-md'>
                            <MdOutlineTextsms size={20} />
                            <h2 className='text-[#1F2937] font-medium'>Text</h2>
                        </div>
                        <div onClick={() => handleCheckInBtn('Video')} className='bg-[#E9E9E9] p-6 w-40 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:shadow-md'>
                            <IoVideocamOutline size={20} />
                            <h2 className='text-[#1F2937] font-medium'>Video</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
