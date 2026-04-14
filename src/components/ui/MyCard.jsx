import React from 'react';
import { useNavigate } from 'react-router';

const MyCard = ({ friend, statusBadge }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/friend/${friend.id}`)} className='p-4 text-center space-y-3 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white cursor-pointer'>
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
    );
};

export default MyCard;
