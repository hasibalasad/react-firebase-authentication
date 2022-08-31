import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    function handleLogin() {
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <div className=' flex h-screen'>
            <div className='m-auto'>
                <h1 className=' m-3 text-center'>Create Your Account</h1>
                <div className=' p-2'>
                    <label>Full-Name</label>
                    <br />
                    <input
                        className=' p-2'
                        name='name'
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className=' p-2'>
                    <label>Email</label>
                    <br />
                    <input
                        className=' p-2'
                        name='email'
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className=' p-2'>
                    <label>Password</label>
                    <br />
                    <input
                        className=' p-2'
                        name='password'
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className=' p-2'>
                    <label>Confirm Password</label>
                    <br />
                    <input
                        className=' p-2'
                        name='password'
                        type='password'
                        placeholder='Enter your password again'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>

                {password !== confirmPassword ? <p className=' text-red-600'> Password did not match</p> : <p></p>}

                <button className=' p-2' onClick={e => handleLogin()}>Create Account</button>

                <div className=' p-2'>
                    <p>
                        Already have an account ? <Link to='/login'>
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Signup
