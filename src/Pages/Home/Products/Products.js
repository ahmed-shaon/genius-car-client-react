import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-orange-600 text-xl font-bold'>Our Products</p>
                <h2 className='text-4xl font-bold my-4'>Browse Our Products</h2>
                <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;