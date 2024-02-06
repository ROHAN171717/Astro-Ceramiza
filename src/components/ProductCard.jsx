import React from "react";

const ProductCard = ({ imgSrc, name, desc }) => {
    return (
        <div className="product-card-wrapper rounded-xl w-80 p-4 bg-cream">
            <div className="text-center w-full p-1">
                <h1 className="text-xl font-bold">{name}</h1>
                <div className="text-lg mb-5">{desc}</div>
                <a href="/products" className="border-2 border-black px-2 py-1 rounded font-bold">
                    View Products
                </a>
            </div>
            <img src={imgSrc} alt="demo" className="rounded mt-5" />
        </div>
    );
};

export default ProductCard;
