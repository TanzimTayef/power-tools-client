import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order }) => {
    const {_id, price, toolsName, quantity, email, orderedPerson} = order;
  return (
    <tr>
          <th>{toolsName }</th>
          <th>{orderedPerson }</th>
          <td>{email}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{price && !order.paid && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-xm">Pay</button></Link>}</td>
    </tr>
  );
};

export default OrderRow;
