import React from "react";

const OrdersRow = ({ order, index }) => {
  const {
    _id,
    images,
    toolsName,
    quantity,
    email,
    orderedPerson,
    phone,
    address,
  } = order;
  return (
    <tr>
      <th>
       {index +1}
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">{toolsName}</div>
            <div>{_id}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{orderedPerson}</div>
        <div class=" opacity-100"><small>{address}</small></div>
        <div class=" opacity-100"><small>{email}</small></div>
        <div class=" opacity-100"><small>{phone}</small></div>
      </td>
          <td>
         <div className="font-bold text-xl"> {quantity}</div>
      </td>
      <th>
        <button class="btn btn-ghost bg-slate-200 ">Paid</button>
      </th>
    </tr>
  );
};

export default OrdersRow;
