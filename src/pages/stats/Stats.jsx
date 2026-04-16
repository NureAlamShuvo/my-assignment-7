import React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';

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
    return (
        <div className="container mx-auto mt-10 md:mt-16">

            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
                Friendship Analytics
            </h2>

            <div className="bg-white rounded-xl shadow-md p-6 flex justify-center">

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

                    <Legend />

                </PieChart>

            </div>
        </div>
    );
};

export default Stats;
