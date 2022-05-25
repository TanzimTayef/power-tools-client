import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content px-16 sticky top-0 z-50 ">
        <h2 className="text-3xl font-bold text-accent">Dashboard</h2>
        <Outlet />
      </div>
      <div class="drawer-side ">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-slate-100   text-base-content">
          {/* Sidebar content here  */}
          <li> <Link to="/dashboard/">My Order</Link>  </li>
          <li> <Link to="/dashboard/profile">My Profile</Link></li>
          <li><Link to="/dashboard/review">Add Review</Link></li>
          {admin && <li> <Link to="/dashboard/manageOrders">Manage Orders</Link></li>}
          {admin &&  <li><Link to="/dashboard/addTools">Add Tools</Link></li>}
          {admin && <li> <Link to="/dashboard/makeAdmin">Make Admin</Link></li>}
          {admin && <li><Link to="/dashboard/manageTools">Manage Tools</Link></li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
