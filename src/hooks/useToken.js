import React, {useEffect, useState} from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://young-springs-65716.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(response => response.json())
                .then(data => {
                console.log('data inside useToken', data)
                    const AccessToken = data.token;
                   localStorage.setItem('accessToken', AccessToken)
                   setToken(AccessToken)
            })
        }
    }, [user]);
    return [token];
}

export default useToken;   