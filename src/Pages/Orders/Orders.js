import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderSummary from './OrderSummary';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://genius-car-server-gray.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut()
                    .then(() => {})
                    .catch(err => {})
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email])
    const handleDelete = (_id) => {
        fetch(`https://genius-car-server-gray.vercel.app/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const restOrders = orders.filter(ord => ord._id === _id)
                    setOrders(restOrders);
                }
            })
            .catch(err => console.error(err))
    }
    const handleUpdate = id => {
        fetch(`https://genius-car-server-gray.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const restOrders = orders.filter(ord => ord._id !== id);
                    const approving = orders.find(ord => ord._id === id);
                    approving.status = "Approved";
                    const newOrders = [approving, ...restOrders];
                    setOrders(newOrders);
                }
            })

    }
    return (
        <div className='my-12'>
            <h2 className="text-3xl font-bold">You have <span className='text-orange-600 text-4xl'>{orders.length}</span> {orders.length > 1 ? 'orders' : 'order'}.</h2>
            <div>
                {
                    orders.map(order => <OrderSummary
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></OrderSummary>)
                }
            </div>
            <div className="flex justify-center space-x-4">
                <Link to='/'><button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400 hover:bg-slate-300">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </button></Link>
                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                    <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                </button>
            </div>
        </div>
    );
};

export default Orders;