import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {

    const saved = JSON.parse(sessionStorage.getItem("timeline")) || [];

    const counts = { Call: 0, Text: 0, Video: 0 };

    saved.forEach(item => {
        if (counts[item.type] !== undefined) {
            counts[item.type]++;
        }
    });

    const data = [
        { name: "Text", value: counts.Text },
        { name: "Call", value: counts.Call },
        { name: "Video", value: counts.Video }
    ];

    const COLORS = ["#7C3AED", "#244D3F", "#22C55E"];

    if (saved.length === 0) {
        return <div className="flex justify-center items-center min-h-[60vh]">
            <div className="bg-white shadow-md rounded-xl px-10 py-8 text-center">
                
                <h2 className="text-2xl font-semibold text-[#1F2937] mb-2">
                    No interaction logged yet!
                </h2>

            </div>
        </div>
    }

    return (
        <div className="container mx-auto mt-10 md:mt-16">

            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
                Friendship Analytics
            </h2>

            <div className="bg-white rounded-xl shadow-md p-6">

                <h2 className='text-[#244D3F] font-medium text-xl'>By Interaction Type</h2>

                <div className='flex justify-center'>

                    <PieChart width={350} height={350}>
                        <Pie
                            data={data}
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                            cornerRadius={10}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </div>



            </div>
        </div>
    );
};

export default Stats;
