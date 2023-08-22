import { useState } from "react";

function Login()
{
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [iderr,setIderr] = useState(false)
    const [passwordErr,setPasswordErr] = useState(false);

    function handleData(e)
    {
        if(id.length<3 || password.length<3)
        {
            alert("enter Correct value")
        }else
        {
            alert("ok good")
        }
        e.preventDefault();
    }

    // validation empliment user id
    function userIdHandle(e)
    {
      let item = e.target.value;
       if(item.length<3)
       {
        setIderr(true);
       }else
       {
        setIderr(false);
       }

      setId(item);
    }

     // validation empliment user id
     function userPasswordHandle(e)
     {
       let item = e.target.value;
        if(item.length<3)
        {
         setPasswordErr(true);
        }else
        {
         setPasswordErr(false);
        }
 
       setPassword(item);
     }


    return(
        <div>
            <h1>Login</h1>
            {/* //form validation apply; */}
            <form onSubmit={handleData}>
                <input type="text" placeholder="Enter user Id" onChange={userIdHandle} /><br/>{iderr?<span>User Id not valid</span>:''} <br/><br/>
                <input type="text" placeholder="Enter your password" onChange={userPasswordHandle} /><br/>{passwordErr?<span>User passsword not valid</span>:''}<br/><br/>
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Login;