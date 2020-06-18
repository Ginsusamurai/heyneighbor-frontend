import React from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducers/user';

const LoginWHooks = props => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch();
    const handleLogin = () => {
        // check to make sure neither the username nor password field is blank
        dispatch(loginUser({ username, password }));
    }

    return (
        <div>

            <span>Login</span>
            <p>Username <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /></p>
            <p>Password <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} /></p>
            <p><button onClick={handleLogin}>Submit</button></p>
        </div>
    )
}

export default LoginWHooks;