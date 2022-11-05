import React from 'react';
import { FaCalendarAlt, FaClock, FaPhoneAlt, FaCommentDots, FaMapMarkerAlt } from "react-icons/fa";

const Information = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around bg-gray-800 text-white my-8 px-12 py-12 rounded-lg'>
            <div className='flex items-center'>
                <div className='relative mr-4'>
                    <FaCalendarAlt className='text-3xl text-white' />
                    <FaClock className='text-lg absolute bottom-0 right-0 text-orange-700 bg-gray-800 rounded-full' />
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <p>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative mr-4'>
                    <FaPhoneAlt className='text-3xl text-white' />
                    <FaCommentDots className='text-lg absolute top-0 right-0 text-orange-700' />
                </div>
                <div>
                    <p>Have a question?</p>
                    <p>+2344545465</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative mr-4'>
                    <FaMapMarkerAlt className='text-3xl text-white' />                    
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <p>Liza street, New York</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Information;