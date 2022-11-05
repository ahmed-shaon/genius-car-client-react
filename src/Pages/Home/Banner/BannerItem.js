import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-carosuel'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-1/4">
                <h2 className='text-6xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h2>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-10 top-2/4">
                <p className='w-2/4 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-10 top-3/4 ">
                <button className="btn btn-warning mr-4 text-white">Discover More</button>
                <button className="btn btn-outline btn-warning text-white">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;