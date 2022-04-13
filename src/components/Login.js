import { useRef, useState, useEffect, useContext } from 'react';
import {Link, Navigate} from 'react-router-dom';
import AuthContext from "./AuthProvider";
import '../Login.css';
import google from './google1.png'; 

import axios from 'axios';
const LOGIN_URL = 'http://127.0.0.1:5003/v1/api/loginwithpass';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                user_details: user, 
                password: pwd
            }
            const response = await axios.post(LOGIN_URL, data);
            localStorage.setItem('authtoken', response.data.token);
            // console.log(JSON.stringify(response?.data));
            // //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            // setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
            <Navigate to="/" />
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/">Go to Home</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className="login_form">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            placeholder="Enter Username, emailID or password"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button type="button" class="btn btn-success" onClick={handleSubmit}>Sign In</button>
                    </form>
                    <p style={{display:"flex"}}>
                        Need an Account?<br />
                        <img className="mx-4" src={google} style={{height:"35px",width:"38px"}}/>
                        
                    </p>
                    <span className="line">
                            {/*put router link here*/}
                            <Link to="/signup">Sign Up</Link>
                        </span>
                </section>
            )}
        </>
    )
}

export default Login