import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
    const {loginManually, googleSignin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginManually(email, password)
        .then(res => {
            const user = res.user;
            const currentUser= {
                email: user.email,
            }
            console.log(currentUser)
            fetch('https://genius-car-server-gray.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.token)
                localStorage.setItem('user-token',data.token)
                // navigate(from, { replace: true });
            })
            form.reset();
        })
        .catch(err => console.error(err));

    }
    //google login 
    const handleGoogleLogin = () => {
        googleSignin()
        .then( res => {
            // const user = res.user;
            // console.log(user);
            navigate(from, { replace: true })
        })
        .catch(err => console.error(err))

    }
    const handleFacebookLogin = () => {

    }
    const handleGithubLogin = () => {

    }
    return (
        <div className="hero my-20 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='flex justify-evenly px-8 text-3xl'>
                        <FaGoogle className='hover:text-gray-600' onClick={handleGoogleLogin}/>
                        <FaFacebook className='hover:text-gray-600' onClick={handleFacebookLogin}/>
                        <FaGithub className='hover:text-gray-600' onClick={handleGithubLogin}/>
                    </div>
                    <p className='text-center py-8'>New to Genius Car <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;