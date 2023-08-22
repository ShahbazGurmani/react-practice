import { useState } from "react";

function Login()
{

    function handleData(e)
    {
        e.preventDefault();
    }

    return(
        <div>
            <h1>Login</h1>
            {/* //form validation apply; */}
            <form onSubmit={handleData}>
                <input type="text" placeholder="Enter user Id" /><br/><br/>
                <input type="text" placeholder="Enter your password" /><br/><br/>
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Login;