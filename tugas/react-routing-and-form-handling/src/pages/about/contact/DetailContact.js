import { useParams, Link } from "react-router-dom";

export default function DetailContact() {
    let params = useParams()

    return <>

        <h2> Detail Contact</h2>

        <p>{params.listcontact}</p>

        <hr />
        <hr />

        <Link to='/about/contact/list-contact'>
            Back to List Contact
        </Link>

        <hr />
        <hr />

        <Link to='/'>
            Back to HomePage
        </Link>
        
    </>
}