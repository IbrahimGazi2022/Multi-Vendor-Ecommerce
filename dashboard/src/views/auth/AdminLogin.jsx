import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';

const AdminLogin = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state)); // ei fn call hole state gulo authReducer file a chole jay
        // console.log(state);
    };

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>

                    {/* Logo Image */}
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img src='http://localhost:5173/images/logo.png' alt="logo" />
                        </div>
                    </div>

                    <form onSubmit={submit}>

                        {/* Email field */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="Email">Email</label>
                            <input name='email' onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="email" placeholder='Enter Your Email' required />
                        </div>

                        {/* Password field */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input name='password' onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="password" placeholder='Enter Your Password' required />
                        </div>

                        {/* Submit Button */}
                        <button className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                            Sign Up
                        </button>

                        {/* Redirecte Field */}
                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>Don't have account ? <Link className='font-bold' to="/login">Sing Up</Link> </p>
                        </div>

                        {/* Horizontal Line */}
                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>Or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px] '></div>
                        </div>

                        {/* Google & Facebook Button */}
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaGoogle /></span>
                            </div>

                            <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaFacebookF /></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;          
