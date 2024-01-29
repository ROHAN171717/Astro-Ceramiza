import React from "react";
import '../styles/components/ProductCard.scss'

const ProductCard = () => {
    return (
        <div className="product-card-wrapper relative w-fit">
            <img src="/images/product-images/img-1.jpg" alt="demo" className="rounded"></img>
            <div className="absolute text-center w-full img-text">
                <h1 className="text-xl font-bold">Name</h1>
                <div className="text-lg">Desc</div>
                <button className="border-2 border-black px-2 py-1 rounded font-semibold mt-2">View Products</button>
            </div>
        </div>
    );
};

export default ProductCard;
