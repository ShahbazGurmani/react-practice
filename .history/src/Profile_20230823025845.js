import { useState } from "react";


function Profile()
{
    const [login,setLogin] = useState(false);

    if(login)
    {
        return(
                <div>
                    <h1>Well shahbaz</h1>
                </div>
            )
    }
    else
    {
        return(
            <div>
                <h1>Well guest</h1>
            </div>
        )
    }
}
export default Profile;