import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete, setDeletingUser }) => {
  const { _id, price, toolsName, quantity, email, orderedPerson } = order;
  return (
    <tr className=" ">
      <th>{toolsName}</th>
      <th>{orderedPerson}</th>
      <td>{email}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {price && !order.paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-sm">Pay</button>
          </Link>
        )}
      </td>

      <td>
        {" "}
        <label
          onClick={() => setDeletingUser(order)}
          for="my-modal-6"
          class="btn btn-error btn-sm "
        >
          X
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
