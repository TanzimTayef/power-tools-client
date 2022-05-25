import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const PurchaseContainer = () => {
    return (
        <div class="drawer drawer-mobile bg-slate-50">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-slate-100 ">
                <div className='px-16 py-3 sticky top-0 z-50 flex justify-between items-center'>
                    <h4 className=' font-bold text-primary'>Product ❯</h4>
                    <div>
                    <span className='font-bold text-primary mx-2'>❮</span>
                        <span className='font-bold text-primary mx-2'>❯</span>
                     
                    </div>
                </div>
          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-50 bg-slate-50 shadow border-r   bg-base-100 text-base-content">
            {/* Sidebar content here  */}
            <li>
        <Link className="font-bold uppercase hover:bg-neutral hover:text-white" to="/">Home</Link>
      </li>

      <li>
        <Link className="font-bold uppercase hover:bg-neutral hover:text-white" to="/review">Review</Link>
      </li>
      <li>
        <Link className="font-bold uppercase hover:bg-neutral hover:text-white" to="/portfolio">My Portfolio</Link>
      </li>
      <li>
        <Link className="font-bold uppercase hover:bg-neutral hover:text-white" to="/purchase/:purchaseId/allTools">All Tools</Link>
      </li>
      
          </ul>
        </div>
      </div>
    );
};

export default PurchaseContainer;