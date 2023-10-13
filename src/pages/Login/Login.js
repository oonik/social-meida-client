import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = (data) =>{
        loginUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            if(user){
                navigate(from, {replace: true})
            }
        })
        .catch(error =>{
           setLoginError(error.message)
        })
    }
    
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full shadow-2xl  bg-base-100 border-4 border-amber-400">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <h4 className='text-2xl font-bold text-center mb-3 text-amber-400'>Login Now</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" 
                            {...register("email", { required: "Email is required" })} 
                            className="input input-bordered" />
                            {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" 
                            {...register("password", { required: "Password is required", minLength:{value:8, message:"Password length 8 character or number"} })} 
                            className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                            <label className="label">
                                <a href="htmlFor"  className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-2'>Don't have an account? <Link to="/signup" className='text-amber-500'>Signup</Link></p>
                    <p className='text-red-500'>{loginError}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;