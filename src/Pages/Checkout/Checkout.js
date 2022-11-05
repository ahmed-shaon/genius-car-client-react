import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price, img } = useLoaderData();
    const {user} = useContext(AuthContext);
    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            serviceId : _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            img,
            message
        }

        fetch('https://genius-car-server-gray.vercel.app/orders', {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Your order placed');
                form.reset();
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='my-12'>
            <h2 className='text-2xl font-semibold'>Service you are taken to: <span className='text-orange-600'>{title}</span></h2>
            <h4 className='text-xl my-3'>Price: <span className='text-orange-600'>${price}</span></h4>
            <form className='mb-8 p-16 shadow-xl' onSubmit={handleOrder}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" />
                    <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                </div>
                <textarea name="message" className="textarea textarea-bordered w-full my-4" placeholder="Any extra requirement?"></textarea>
                <div className='flex justify-center'>
                    <input type="submit" className='btn mx-auto' value="Place your order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;