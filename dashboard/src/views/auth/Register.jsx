import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';

const Register = () => {

    const [state, setState] = useState({
        name: "",
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
        console.log(state);
    };

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl font-bold mb-3'>Welcome To Ecommerce</h2>
                    <p className='text-sm font-medium mb-3'>Please Register Your Account</p>

                    <form onSubmit={submit}>

                        {/* name field */}
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input name='name' onChange={inputHandle} value={state.name} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="text" placeholder='Enter Your Name' required />
                        </div>

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

                        {/* Privacy Policy field */}
                        <div className='flex items-center w-full gap-3 mb-3'>
                            <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500' type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox"> I agree to privacy policy & treams</label>
                        </div>

                        {/* Submit Button */}
                        <button className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                            Sign Up
                        </button>

                        {/* Redirecte Field */}
                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>Already Have an account ? <Link className='font-bold' to="/login">Sing In</Link> </p>
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

export default Register;
