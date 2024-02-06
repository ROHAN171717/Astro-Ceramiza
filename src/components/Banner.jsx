import React from "react";

const Banner = ({ title, desc, variant }) => {
    return (
        <div className="relative">
            <div className={`banner-img ${variant}`}></div>
            <div className="absolute banner-text text-right">
                <div className="w-fit font-semibold mb-2 text-lg tracking-widest ml-auto">{title}</div>
                <div className="w-fit font-semibold text-4xl tracking-wide">{desc}</div>
            </div>
        </div>
    );
};

export default Banner;
