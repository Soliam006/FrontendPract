import React from 'react';

const PlateCard = ({ imgSrc, dishName, dishDescription, price }) => {
    return (
        <div className="bg-[#000e14] px-10 flex flex-col items-center mt-14 p-8 rounded-lg shadow-xl">
            <img src={imgSrc} alt="food" className="shadow-2xl object-cover -mt-20 w-40 h-40 rounded-full" />
            <h2 className="text-white font-bold text-xl mt-4">{dishName}</h2>
            <p className="text-gray-300">{dishDescription}</p>
            <p className="text-gray-500">{price}</p>
        </div>
    );
}

export default PlateCard;