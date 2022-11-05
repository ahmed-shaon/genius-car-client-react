import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, googleSignin } = useContext(AuthContext)
    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                if(user?.uid){
                    toast.success('Registration Successfully Completed');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    //google signin 
    const handleGoogleSignin = () => {
        googleSignin()
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero my-20 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up now!</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex justify-evenly text-3xl px-8'>
                        <FaGoogle className='hover:text-gray-600' onClick={handleGoogleSignin} />
                        <FaFacebook className='hover:text-gray-600' />
                        <FaGithub className='hover:text-gray-600' />
                    </div>
                    <p className='text-center py-8'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;