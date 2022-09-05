import { Link } from 'react-router-dom'

export default function ListContact() {
    
    return <>

        <Link to='/about/contact/list-contact/whatsapp'>
            Whatsapp
        </Link>

        <hr />

        <Link to='/about/contact/list-contact/facebook'>
            Facebook
        </Link>

        <hr />

        <Link to='/about/contact/list-contact/instagram'>
            Instagram
        </Link>

        <hr />
        <hr />

        <Link to='/'>
            Back to HomePage
        </Link>

    </>
}