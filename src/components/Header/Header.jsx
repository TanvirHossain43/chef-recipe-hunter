import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateCurrentUser } from 'firebase/auth';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const activeLink = "text-blue-500 font-bold mr-3 ml-3";



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
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
                            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>Home</NavLink>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? activeLink : "")}>Blog</NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? activeLink : "")}>Register</NavLink>
                        </ul>
                    </div>
                    <a className=" normal-case font-mono text-3xl ml-3 font-bold text-orange-400">Food Village</a>
                </div>
                <div className="navbar-center hidden lg:flex text-xl">

                    <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : " mr-3")}>Home</NavLink>

                    <NavLink to="/blog" className={({ isActive }) => (isActive ? activeLink : "ml-3")}>Blog</NavLink>

                    <NavLink to="/register" className={({ isActive }) => (isActive ? activeLink : "ml-3")}>Register</NavLink>



                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="avatar mr-4">
                            <div className="w-10 rounded-full mr-4">
                                {user ? <img src={user.photoURL} alt='Photo' title={user.displayName} /> : <img src='' alt='Photo' title={user.displayName} />}
                            </div>
                            <Link onClick={handleLogOut} className="btn">Logout</Link>
                        </div>
                            :
                            <Link to="/login" className="btn mr-4">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;