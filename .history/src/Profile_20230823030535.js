import { useState } from "react";


function Profile()
{
    const [login,setLogin] = useState(2);
    // using condition if else in ternry oprator
    return(
        <div>
             {login==1?<h1>Welcome shahbaz</h1>:
             login==2?<h1>Welcome anail</h1>:
             <h1>Welcome guest</h1>
             }
        </div>
    )
}
export default Profile;