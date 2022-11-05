import React from 'react';
import {FaTrashAlt, FaRegHeart} from 'react-icons/fa';

const OrderSummary = ({order, handleDelete, handleUpdate}) => {
    const {_id,serviceName, img, price, phone, message, status} = order;
    
    return (
        <div className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={img} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between items-center w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{serviceName}</h3>
                                <p className="text-sm dark:text-gray-400">{phone}</p>
                                <p className="text-sm dark:text-gray-400">{message}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${price}</p>
                            </div>
                            <div className="text-right">
                                <button className='btn ' onClick={() => handleUpdate(_id)}>{status? status:"pending"}</button>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1 hover:bg-gray-300 rounded-full" onClick={() => handleDelete(_id)}>
                                <FaTrashAlt className="w-4 h-4 fill-current" />
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <FaRegHeart className="w-4 h-4 fill-current"/>
                                <span>Add to favorites</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default OrderSummary;