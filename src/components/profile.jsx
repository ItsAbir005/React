import React,{useState,useContext} from "react";
import UserContext from "../context/userContext";
function Profile() {
    const {user}=useContext (UserContext);
    return (<div>
        <h2>Profile</h2>
        {user ? <p>User Name: {user.name}</p> : <p>Please login to see profile information.</p>}
    </div>
    );
}
export default Profile;