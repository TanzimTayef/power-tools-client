import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [tool, setTool] = useState({});
  const { images, _id, toolsName, minOrder, availableQuan, desc } = tool;
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/tools/${purchaseId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [purchaseId]);

  const handleBooking = (e) => {
    e.preventDefault();
    console.log(user);

    const order = {
      toolsId: _id,
      toolsName: toolsName,
      quantity: minOrder,
      orderEmail: user.email,
      orderedPerson: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("order success");
      });
  };

  return (
    <section className="min-h-screen container mx-auto">
      This is purchase page: {tool._id}
      <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{toolsName}</h2>
          <p>Available Quantity: {availableQuan}</p>
          <p>Minimum Order: {minOrder}</p>
          <p>{tool.desc}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
      {/* order input */}
      <form
        onSubmit={handleBooking}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Purchase"
          className="btn btn-secondary w-full max-w-xs"
        />
      </form>
    </section>
  );
};

export default Purchase;