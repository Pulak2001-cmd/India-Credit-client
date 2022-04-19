import { useRef, useState, useEffect, useContext } from 'react';
import {Link, Navigate} from 'react-router-dom';
import AuthContext from "./AuthProvider";
import '../Login.css';
import google from './google1.png';
import { GoogleLogin } from 'react-google-login'; 

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
        if (localStorage.getItem('authtoken')) {
            setSuccess(true);
        }
    }, [user, pwd])
    const responseGoogle = async (response) => {
        console.log(response);
        const data = {
            email: response.Lu.Bv,
            name: response.Lu.tf
        }
        console.log(data);
        const response2 = await axios.post('http://localhost:5003/v1/api/o_login', data);
        console.log(response2);
        if (response2.data.status === true){
            localStorage.setItem('authtoken', response2.data.token);
            setSuccess(true);
        }
        else{
            setErrMsg(response2.error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                user_details: user, 
                password: pwd
            }
            const response = await axios.post(LOGIN_URL, data);
            console.log(response);
            if (response.data.error === "") {
                localStorage.setItem('authtoken', response.data.token);
                setUser('');
                setPwd('');
                setSuccess(true);
            }
            else {
                setErrMsg(response.data.error);
            }
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
        <div className="App">
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
                    <GoogleLogin
                            clientId="237161729419-go8jqorki8ocba83afao4r7bfapclaf3.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="my-2 px-4"
                            style={{backgroundColor: 'black'}}
                    />
                    <p style={{display:"flex"}}>
                        Need an Account?<br />
                        {/* <img className="mx-4" src={google} style={{height:"35px",width:"38px"}}/> */}
                        
                        
                    </p>
                    <span className="line">
                            {/*put router link here*/}
                            <Link to="/signup">Sign Up</Link>
                        </span>
                </section>
            )}
        </div>
    )
}

export default Login