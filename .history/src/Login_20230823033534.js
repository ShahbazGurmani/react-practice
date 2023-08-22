import { useState } from "react";

function Login()
{
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");

    function handleData(e)
    {
        e.preventDefault();
    }

    // validation empliment
    function userIdHandle(e)
    {
        let item = e.target.value;
       if(item.length<3)
       {
         console.warn("invalid")
       }
       console.warn(e.target.value.length)
    }


    return(
        <div>
            <h1>Login</h1>
            {/* //form validation apply; */}
            <form onSubmit={handleData}>
                <input type="text" placeholder="Enter user Id" onChange={userIdHandle} /><br/><br/>
                <input type="text" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} /><br/><br/>
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Login;