import React, { useState } from "react";

const Accordian = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);
    return (
        <div className="border-2 border-stone-500 mb-8 xl:w-1/2">
            <div
                onClick={() => setIsActive(!isActive)}
                className={`flex justify-between text-xl font-semibold p-4 ${isActive && "bg-stone-500 text-white"}`}
            >
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="p-4 py-6">{content}</div>}
        </div>
    );
};

export default Accordian;
