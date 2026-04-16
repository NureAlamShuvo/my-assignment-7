
import { useState } from 'react';
import callImg from '../../assets/images/call.png';
import textImg from '../../assets/images/text.png';
import videoImg from '../../assets/images/video.png';
import FilterPage from '../../components/filterpage/FilterPage';

const TimeLine = () => {

    const [filter, setFilter] = useState("All");

    const imgType = {
        Call: callImg,
        Text: textImg,
        Video: videoImg
    }


    const saved = JSON.parse(sessionStorage.getItem('timeline')) || [];


    const filteredData = filter === "All"
        ? saved
        : saved.filter(item => item.type === filter);


    if (saved.length === 0) {
        return <p className='text-center mt-20 text-gray-400'>No check-ins yet!</p>;
    }

    return (
        <div className='container mx-auto mt-10 md:mt-20 px-4 space-y-3'>
            <h2 className='font-bold text-5xl'>Timeline</h2>

            <FilterPage filter={filter} setFilter={setFilter} />

            <div className='space-y-3'>
                {filteredData.map((entry, ind) => (
                    <div key={ind} className='bg-white shadow rounded-xl p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>

                        <img src={imgType[entry.type]} alt="" className='w-10 h-10 object-contain' />

                        <div>
                            <p className='font-semibold text-[#1F2937]'>
                                {entry.type} <span className='font-normal text-[#64748B]'>with {entry.friendName}</span>
                            </p>
                            <p className='text-sm text-[#64748B]'>{entry.date}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;
