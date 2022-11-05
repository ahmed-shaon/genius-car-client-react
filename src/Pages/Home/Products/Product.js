import React from 'react';
import {FaStar} from 'react-icons/fa';

const Product = ({ product }) => {
    const { name, img, price } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl h-3/4" />
            </figure>
            <div className="card-body p-4 items-center text-center">
                <div className='flex text-yellow-600'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;