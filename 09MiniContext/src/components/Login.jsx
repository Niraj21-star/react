import React,{useState,useContext} from 'react';
import Usercontext from '../context/UserContext';

function Login(){

    const [Username,SetUsername]=useState('')
    const [password,Setpassword]=useState('')

    const {setUser}=useContext(Usercontext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({Username,password})

    }
        return(
            <div>
                <h2>Login</h2>
                <input type='text' 
                 value={Username}
                 onChange={(e)=>SetUsername(e.target.value)}
                placeholder='Username'/>
                {" "}
                <input type='text' 
                 value={password}
                 onChange={(e)=>Setpassword(e.target.value)}
                placeholder='Password'/>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        )
}

export default Login