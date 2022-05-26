import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `https://young-springs-65716.herokuapp.com/order?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://young-springs-65716.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Order deleted")
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <section className="py-8 ">
      <div class="overflow-x-auto ">
        <table class="table table-compact w--96  md:w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Person</th>
              <th>Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Remove Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order._id} order={order} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrder;
