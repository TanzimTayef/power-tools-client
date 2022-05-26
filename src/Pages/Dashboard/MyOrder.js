import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import DeleteConfirmModal from "./DeleteConfirmModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [deletingUser, setDeletingUser] = useState(null)

  useEffect(() => {
    const email = user.email;
    const url = `https://young-springs-65716.herokuapp.com/order?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user, orders]);

 

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
              <OrderRow key={order._id} order={order} setDeletingUser={setDeletingUser} />
            ))}
          </tbody>
        </table>
      </div>
   {deletingUser && <DeleteConfirmModal
        deletingUser={deletingUser}
        setOrders={setOrders}
        setDeletingUser={setDeletingUser}
      />}
    </section>
  );
};

export default MyOrder;
