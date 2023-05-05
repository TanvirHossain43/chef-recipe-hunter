import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(email, password, name, photo)


        if (password.length < 6) {
            setError('Password should be more than 6 characters')
            return;
        }


        createUser(email, password, name, photo)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser)
                setError('')
                event.target.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })



    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="w-3/5 mx-auto mt-4 p-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>

                    <div className="  w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5 rounded-xl">

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo URL" className="input input-bordered" name='photo' required />

                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;