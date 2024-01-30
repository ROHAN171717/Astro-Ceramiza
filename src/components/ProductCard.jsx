import React from "react";
import "../styles/components/ProductCard.scss";

const ProductCard = ({ imgSrc, name, desc }) => {
    return (
        <div className="product-card-wrapper relative w-fit ">
            <img src={imgSrc} alt="demo" className="rounded"/>
            <div className="absolute text-center w-full img-text">
                <h1 className="text-xl font-bold">{name}</h1>
                <div className="text-lg">{desc}</div>
                <button className="border-2 border-black px-2 py-1 rounded font-bold mt-2">View Products</button>
            </div>
        </div>
    );
};

export default ProductCard;
