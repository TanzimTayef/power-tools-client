import React, { useState, useEffect } from "react";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://young-springs-65716.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th>make admin</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} index={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
