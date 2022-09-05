import { Link } from 'react-router-dom';

export default function Profile () {
    return <>
        <p>This is profile page</p>

        <hr />
        <hr />

        <Link to='/'>
            Back to Homepage
        </Link>
    </>
}