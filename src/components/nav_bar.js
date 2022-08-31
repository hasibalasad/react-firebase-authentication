import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className='p-3 m-2 flex justify-between'>
            <Link to='/' className='text-xl'>
                Company
            </Link>
            <ul className='flex gap-10'>
                <li>
                    <Link to='/signup'>
                        Signup
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
