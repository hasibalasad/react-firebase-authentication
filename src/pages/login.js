import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    function handleLogin() {
        console.log(email)
        console.log(password)
        const isValid = isValidEmail(email)
        console.log(isValid)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    return (
        <div className=' flex h-screen'>
            <div className=' m-auto'>
                <h1 className=' m-3 text-center'>Login Your Account</h1>
                <div className=' p-2'>
                    <label>Email</label>
                    <br />
                    <input
                        name='email'
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={e =>
                            setEmail(e.target.value)
                        }


                    />
                </div>
                <div className=' p-2'>
                    <label>Password</label>
                    <br />
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}

                    />
                </div>
                <button className=' p-2' onClick={(e) => handleLogin()}>Login</button>
                <div className=' p-2'>
                    <p>
                        Don't have an account ? <Link to='/signup'>Sign Up</Link>
                    </p>
                    <br />
                    Forgot ur Password ? <button> Reset Password</button>
                </div>
            </div>
        </div>
    )
}

export default Login
