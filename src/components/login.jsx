import React,{useState,useContext} from "react";
import UserContext from "../context/userContext";
function Login() {
    const {user,setUser}=useContext (UserContext);
    const [username,setUsername]=useState("");
    const handleLogin=()=>{
        setUser({name:username});
    }
    return (<div>
        <h2>Login</h2>
        <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
        {user && <p>Welcome, {user.name}!</p>}
    </div>
    );
}
export default Login;