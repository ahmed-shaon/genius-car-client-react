import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end items-center">
                    <p className='text-2xl text-semibold text-orange-600'>Price: ${price}</p>
                    <Link to={`/services/${_id}`}>
                        <FaArrowRight className='text-orange-600 text-xl font-thin hover:text-orange-700' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;