import React from "react";

const Services = ({title, desc}) => {
    return (
        <div>
            <div className="text-2xl font-bold mb-2">{title}</div>
            <div className="text-lg">
                {desc}
            </div>
        </div>
    );
};

export default Services;
