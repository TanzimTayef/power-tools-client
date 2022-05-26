import React from 'react';

const UserRow = ({ user, index }) => {
    const {displayName, email, role} = user;

    const  makeAdmin = () => {
        fetch(`https://young-springs-65716.herokuapp.com/users/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            
        })
            .then(res => res.json())
        .then(data => console.log(data))
        
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        
      </tr>
    );
};

export default UserRow;