import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  };
  const menuItems = (
    <>
      <li>
        <Link className="font-semibold hover:bg-primary   text-sm text-gray-200 uppercase hover:bg-neutral " to="/">Home</Link>
      </li>

      <li>
        <Link className="font-semibold hover:bg-primary text-sm text-gray-200 uppercase hover:bg-neutral " to="/review">Review</Link>
      </li>
      <li>
        <Link className="font-semibold hover:bg-primary text-sm text-gray-200 uppercase hover:bg-neutral " to="/portfolio">My Portfolio</Link>
      </li>
      
      <li> 
        {
          user &&  <Link className="font-semibold hover:bg-primary text-sm text-gray-200 uppercase hover:bg-neutral " to="/dashboard">Dashboard</Link> 
        }
       </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-accent px-8 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="normal-case text-xl text-2xl font-bold uppercase text-white">Power Tools</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
      </div>
      <div className="navbar-end">
      <label tabindex="0" class="btn btn-ghost btn-circle text-gray-200 hover:bg-primary">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item badge-primary hover:badge-accent hover:text-gray-200">0</span>
        </div>
        </label>
        {
            <li>
        {user ? (
          <button onClick={logout}className="shadow-xl btn  font-semibold  text-sm uppercase  text-gray-200  hover:bg-transparent border bg-transparent">Sign out</button>
        ) : (
          <Link className="shadow-xl btn font-semibold  text-sm uppercase  text-gray-200  hover:bg-transparent bg-transparent border"  to="/login">Login</Link>
        )}
      </li>
      }
        <label tabindex="0" class="btn btn-ghost btn-circle avatar ml-3">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      </div>
    </div>
  );
};

export default Navbar;
