import { useState } from "react";

function Login()
{
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");

    function handleData(e)
    {
        e.preventDefault();
    }

    return(
        <div>
            <h1>Login</h1>
            {/* //form validation apply; */}
            <form onSubmit={handleData}>
                <input type="text" placeholder="Enter user Id" onChange={(e)=>{setId(e.target.value)}} /><br/><br/>
                <input type="text" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} /><br/><br/>
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Login;