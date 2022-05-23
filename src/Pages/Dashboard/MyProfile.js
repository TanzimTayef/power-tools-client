import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <section>
            <div>
                <h1>{user?.displayName}</h1>
                <h4>{user?.email}</h4>
            </div>
       </section>
    );
};

export default MyProfile;