import { Link } from 'react-router-dom'

export default function ListContact() {

    return <>

        <h2>List Contact :</h2>

        <ul>

            <li>
                Whatsapp | 
                <Link to='/about/contact/list-contact/whatsapp'>
                    Go to Whatsapp
                </Link>
            </li>

            <hr />

            <li>
                Facebook | 
                <Link to='/about/contact/list-contact/facebook'>
                    Go to Facebook page
                </Link>
            </li>

            <hr />

            <li>
                Instagram | 
                <Link to='/about/contact/list-contact/instagram'>
                    Go to Instagram page
                </Link>
            </li>

        </ul>

        <hr />
        <hr />

        <Link to='/'>
            Back to HomePage
        </Link>

    </>
}