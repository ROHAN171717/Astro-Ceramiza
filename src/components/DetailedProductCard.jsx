import React from "react";

const DetailedProductCard = ({ info }) => {
    return (
        <div className="flex gap-8 my-10 font-normal">
            <div className="border-2 border-black rounded">
                <img src={info.imgSrc} alt={info.name} className="product-img" />
            </div>
            <div className="flex flex-col justify-start gap-3">
                <div className="text-2xl font-bold border-b-2 border-black pb-3 w-fit">{info.name}</div>
                <div className="text-xl font-semibold">
                    Price: <span className="text-red-600">{info.price}</span>
                </div>
                <div>{info.desc}</div>
                <div>
                    <input
                        type="number"
                        value={1}
                        min={1}
                        className="border-2 border-black rounded pl-4 py-1 w-14 mr-4"
                    />
                    <button className="border-2 border-black px-2 py-1 rounded font-bold mt-2">Add to cart</button>
                </div>
                <table className="w-80 text-left">
                    <tr>
                        <th className="w-1/3">SKU</th>
                        <td>{info.sku}</td>
                    </tr>
                    <tr>
                        <th className="w-1/3">Categories</th>
                        <td>{info.categories}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default DetailedProductCard;
