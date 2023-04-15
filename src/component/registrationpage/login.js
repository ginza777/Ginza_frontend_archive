import React, { useState } from 'react';
import logo from "../homepage/icons/g.png";
import '../homepage/style.css'
import './style.css'
import '../main.css'
import {Link} from "react-router-dom";



function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic
    }

    return (
        <div className={'login'}>
            <div className="login-page">
                <div className="Nav">
                    <div className="navbar">
                        <Link to="/">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                                <h1>Ginza</h1>
                            </div></Link>

                        <div className="nav-items">
                            <ul>
                                <li><Link className={'login_button'} to="/signup">Register</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={'login-form'}>
                    <h1 style={{color:'black'}}>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username or Email or Phone:</label>
                            <input type="text" id="username"
                                   placeholder={'Enter your username or email or phone'}
                                   value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder={'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className={'login-button'} type="submit">Login</button>
                    </form>
                </div>
            </div>

        </div>

    );
}

export default LoginPage;
