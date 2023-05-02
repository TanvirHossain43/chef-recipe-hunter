import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="w-3/5 mx-auto mt-4 p-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="  w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5 rounded-xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;