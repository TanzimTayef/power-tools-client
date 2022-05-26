import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [tool, setTool] = useState({});
  const { images, _id, toolsName, minOrder, availableQuan, desc, price } = tool;
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);


  

  useEffect(() => {
    const url = `https://young-springs-65716.herokuapp.com/tools/${purchaseId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [purchaseId]);

  const handleBooking = (e) => {
    e.preventDefault();
    console.log(user);
    console.log()
    const newQuantity = parseInt(e.target.quantity.value);
    const order = {
      toolsName: toolsName,
      price: price,
      quantity: newQuantity,
      email: user.email,
      orderedPerson: user.displayName,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };

    fetch("https://young-springs-65716.herokuapp.com/order", {
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
    <section className="p-16 ">
      <div class="grid grid-rows-3  grid-cols-3 grid-flow-col gap-10 ">
        <div class="row-span-3 col-span-2 shadow bg-base-100 flex justify-center items-center">
          <div class="card ">
            <figure>
              <img
                src={images}
                alt="tools"
              />
            </figure>
            <div class="card-body">
              <div>
                <h2 class="card-title mb-2 text-4xl text-primary">{toolsName}</h2>
                <p className="text-xl ">Available Quantity: {availableQuan}</p>
                <p className="text-xl ">Minimum Order: {minOrder}</p>
                <p className="text-md mt-2">{desc}</p>
              </div>
              <div class="card-actions justify-center mt-5">
                <div className="grid grid-cols-3 gap-5 border-t-4 border-gray-300 pt-5">
                <img
                src={images}
                alt="tools"
                />
                <img
              src={images}
              alt="tools"
                />
                <img
            src={images}
            alt="tools"
          />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shadow bg-base-100 px-3 py-5">
        <h1 className="font-bold border-b-4 border-gray-300 pb-1 text-gray-500 uppercase text-center text-xl">
              Total Price
            </h1>
         <p className="text-center py-5 text-2xl"><span >0000</span> US</p>
        </div>
        <div class="row-span-2 bg-slate-50 shadow py-5 px-3">
          <div className="">
            <h1 className="font-bold border-b-4 border-gray-300 pb-1 text-gray-500 uppercase text-center text-xl">
              Purchase The Product
            </h1>

            <div className="mt-8">
              <p className=" font-bold mb-2 border-b-2 pb-1 border-gray-300 uppercase text-gray-500">
                Information
              </p>
              <form
                onSubmit={handleBooking}
                className="grid grid-cols-1 gap-3 mt-5  justify-items-center mt-2"
              >
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName}
                  className=" bg-white w-full shadow px-2 py-1 max-w-xs"
                />
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email}
                  className="bg-white w-full shadow px-2 py-1 max-w-xs"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="bg-white w-full shadow px-2 py-1 max-w-xs"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className="bg-white w-full shadow px-2 py-1 max-w-xs"
                />
                <div>
                <p className=" font-bold mb-2 border-b-2 pb-1 border-gray-300 uppercase text-gray-500">
                {" "}
                Quantity
                  </p>
                  <div class="flex shadow">
              
              <button  className="bg-gray-300 py-2 px-5 font-bold text-xl">
                -
              </button>
                <input
                  name="quantity"
                type="text"
                placeholder={minOrder}
                class="bg-white w-full shadow px-5 py-1 max-w-xs text-center"
              />
              <button className="bg-gray-300 py-2 px-5 font-bold text-xl">
                +
              </button>
            </div>
                </div>
              
                <input
                  type="submit"
                  value="purchase"
                  className="btn btn-secondary w-full max-w-xs mt-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
