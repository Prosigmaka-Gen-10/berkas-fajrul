import { Link, Outlet } from 'react-router-dom';

export default function Contact() {
    return <>
        <p>This is contact page</p>

        <hr/>

        <Link to='/about/contact/list-contact'>
            List Contact
        </Link>

        <hr />
        <hr />

        <Link to='/'>
            Back to Homepage
        </Link>

        <Outlet />
    </>
}