import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const { signInUser, googleSignIn, gitLogIn } = useContext(AuthContext)
    const [error,setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                
            })
            .catch(error => {
                
                setError('Enter valid email and password')
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const githubLogIn = () => {
        gitLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="w-3/5 mx-auto mt-4 p-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="  w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5 rounded-xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <p>New to this site? <Link to="/register" className='text-emerald-500'>Register</Link></p>
                                <p className='text-red-700'>{error}</p>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex flex-col items-center gap-y-2 pb-5'>
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Login with Google</button>
                            </div>
                            <div>
                                <button onClick={githubLogIn} className="btn btn-outline ">Login with Github</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;