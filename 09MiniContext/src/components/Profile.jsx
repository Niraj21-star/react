import React,{useContext}from 'react';
import Usercontext from '../context/UserContext';

function Profile(){
    const {user}=useContext(Usercontext)

    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.Username}</div>
}

export default Profile