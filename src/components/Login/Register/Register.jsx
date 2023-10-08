import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <div className=" max-w-7xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">REGISTER</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 ">

                        <div className="shadow-md rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-400 mt-4 text-center">Please Register & Access Yoga Service</h1>
                            <form className="card-body px-4 ">
                                <div className="form-control">
                                    <input type="text" placeholder="Name" name='name' className="input w-full input-bordered rounded-full" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered rounded-full my-4" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-full" required />
                                </div>
                                <h1 className="text-sm p-2">Forget Password</h1>
                                <div className="flex justify-center">
                                    <button className="btn bg-[#ED0B5A] hover:text-gray-500 px-8 rounded-full text-white">Register</button>
                                </div>
                            </form>
                            <h2 className="text-center text-lg font-semibold">Already have an Account ? Please <Link to='/login' className="text-[#ED0B5A] underline">Login</Link> </h2>
                            
                            
                        </div>
                        <div className="">
                            <img src={'https://i.ibb.co/wC6YM3D/about003-d85a9cb4-d856-42e0-85ae-aa744e21e11a-600x.webp'} className=" rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;