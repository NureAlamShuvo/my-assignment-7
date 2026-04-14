import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import MyCard from '../../components/ui/MyCard';

const AllFriends = () => {

    const [friendsData, setFriendsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setFriendsData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <PuffLoader color="#244D3F" size={60} />
            </div>
        );
    }

    return (
        <div className='container mx-auto px-4'>
            <h2 className='font-semibold text-2xl text-[#1F2937] mb-4'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    friendsData.map((friend) => {

                        const statusBadge = friend.status === "overdue" ? "bg-[#EF4444] text-white" : friend.status === "almost due" ? "bg-[#EFAD44] text-white" : "bg-[#244D3F] text-white";

                        return <MyCard friend={friend} statusBadge={statusBadge} key={friend.id} />
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;
