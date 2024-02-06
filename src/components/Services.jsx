import React from "react";

const Services = ({title, desc, icon}) => {
    return (
        <div>
            <div className="border-2 rounded-2xl border-black w-fit p-0.5">
            <img src={icon} alt="service-icon" width={34} height={34}  />
            </div>
            <div className="text-2xl font-bold mb-2">{title}</div>
            <div className="text-lg">
                {desc}
            </div>
        </div>
    );
};

export default Services;
