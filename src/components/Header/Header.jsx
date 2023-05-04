import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
   

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Village</a>
                </div>
                <div className="navbar-center hidden lg:flex text-xl">

                    <Link className='' to="/">Home</Link>
                    <Link className='ms-5' to="/blog">Blog</Link>



                </div>
                <div className="navbar-end">
                   
                    {
                        user ? <div className="avatar mr-4">
                            <div className="w-10 rounded-full mr-4">
                                {user.photoURL? <img src={user.photoURL} alt='Photo' title={user.displayName} />:<img src='' alt='Photo' title={user.displayName} />}
                            </div>
                            <Link onClick={handleLogOut} className="btn">Logout</Link>
                        </div> : <Link to="/login" className="btn">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;