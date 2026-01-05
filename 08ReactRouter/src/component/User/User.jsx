import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userid}=useParams();
    return (
        <div className='bg-red-200 p-10 text-center text-3xl font-bold'>
           User: {userid}
        </div>
    );
}

export default User;