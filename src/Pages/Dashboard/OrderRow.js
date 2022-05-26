import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete }) => {
    const {_id, price, toolsName, quantity, email, orderedPerson} = order;
  return (
    <tr className=" ">
          <th>{toolsName }</th>
          <th>{orderedPerson }</th>
          <td>{email}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{price && !order.paid && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-sm">Pay</button></Link>}</td>
          <td><button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">x</button></td>
    </tr>
  );
};

export default OrderRow;
