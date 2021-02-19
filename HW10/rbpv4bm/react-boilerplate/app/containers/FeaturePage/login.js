import React, {Fragment, useState} from 'react';

function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(){
        console.log("Username: " + username + "\nPassword: " + password);
    }

    return(
        <Fragment>
            <form>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </form>
        <button onClick={e => {handleSubmit()}} type="submit">Submit</button>
        </Fragment> 
    )
}

export default Login;