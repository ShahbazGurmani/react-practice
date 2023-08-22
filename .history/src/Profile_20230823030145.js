import { useState } from "react";


function Profile()
{
    const [login,setLogin] = useState(true);

    return(
        <div>
             {login?<h1>Welcome shahbaz</h1>:<h1>Welcome guest</h1>}
        </div>
    )
}
export default Profile;