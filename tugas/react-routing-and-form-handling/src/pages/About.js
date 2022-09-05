import React from "react";
import { Link, Outlet } from 'react-router-dom'


export default function About () {
    return <>
    <h1>This is About</h1>

    <Link to='/about/contact'>
        Our Contact
    </Link>

    <hr/>

    <Link to='/about/profile'>
        Our Profile
    </Link>

    <hr/>
    <hr/>

    <Link to='/'>
        Back to Homepage
    </Link>

    <Outlet />
    </>
}