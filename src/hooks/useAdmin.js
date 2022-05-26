import React, { useState, useEffect } from "react";
const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
 
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://young-springs-65716.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
               
            })
                .then(response => response.json())
                .then(data => {
                   setAdmin(data.admin)
            })
        }
    }, [user])

    return [admin];
}
export default useAdmin;