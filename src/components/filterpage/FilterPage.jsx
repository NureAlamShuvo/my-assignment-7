import React from 'react';

const FilterPage = ({ filter, setFilter }) => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                Filter: {filter} ⬇️
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                <li><button onClick={() => setFilter("All")}>All</button></li>
                <li><button onClick={() => setFilter("Call")}>Call</button></li>
                <li><button onClick={() => setFilter("Text")}>Text</button></li>
                <li><button onClick={() => setFilter("Video")}>Video</button></li>
            </ul>
        </div>
    );
};

export default FilterPage;
