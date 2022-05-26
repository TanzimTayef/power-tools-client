import React, { useEffect, useState } from "react";
import OrdersRow from "./OrdersRow";

const ManageOrders = () => {
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    fetch("https://young-springs-65716.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrdered(data));
  }, []);

  return (
    <div>
      <h1>Manage All Orders</h1>
      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Person Details</th>
                <th>Ordered Quantity</th>
                <th>Paid/Unpaid</th>
              </tr>
            </thead>
            <tbody>
              {ordered.map((order, index) => (
                <OrdersRow key={order._id} order={order} index={index} />
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Person Details</th>
                <th>Ordered Quantity</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
