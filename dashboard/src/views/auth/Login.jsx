import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { PropagateLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { overrideStyle } from '../../utils/utils';
import { seller_login, messageClear } from '../../store/Reducers/authReducer';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loader, successMessage, errorMessage } = useSelector(state => state.auth);

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
        dispatch(seller_login(state)); // ei fn call hole state gulo authReducer file a chole jay
    };

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            navigate("/");
        }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
    }, [successMessage, errorMessage]);

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl font-bold mb-3'>Welcome To Ecommerce</h2>
                    <p className='text-sm font-medium mb-3'>Please Register Your Account</p>

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
                        <button disabled={loader ? true : false} className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                            {
                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : "Login"
                            }
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

export default Login;
