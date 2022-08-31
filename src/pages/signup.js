import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className=' flex h-screen'>
            <div className='m-auto'>
                <h1 className=' m-3 text-center'>Create Your Account</h1>
                <div className=' p-2'>
                    <label>Full-Name</label>
                    <br />
                    <input
                        className=' p-2'
                        type='text'
                        placeholder='Enter your name'
                    />
                </div>
                <div className=' p-2'>
                    <label>Email</label>
                    <br />
                    <input
                        className=' p-2'
                        type='email'
                        placeholder='Enter your email'
                    />
                </div>
                <div className=' p-2'>
                    <label>Password</label>
                    <br />
                    <input
                        className=' p-2'
                        type='password'
                        placeholder='Enter your password'
                    />
                </div>
                <div className=' p-2'>
                    <label>Confirm Password</label>
                    <br />
                    <input
                        className=' p-2'
                        type='password'
                        placeholder='Enter your password again'
                    />
                </div>

                <button className=' p-2'>Create Account</button>

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
