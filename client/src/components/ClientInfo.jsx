// this code defines a component that displays client information using icons and corresponding data. The component receives a client prop containing the client object, and it renders the client's name, email, and phone number using the appropriate icons from the react-icons/fa package.

import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa"

export default function ClientInfo({ client }) {
    return (
        <>
        <h5 className="mt-5">Client Information</h5>
        <ul className="list-group">
            <li className="list-group-item">
                <FaIdBadge className="icon" /> {client.name}
            </li>
            <li className="list-group-item">
                <FaEnvelope className="icon" /> {client.email}
            </li>
            <li className="list-group-item">
                <FaPhone className="icon" /> {client.phone}
            </li>
        </ul>
        </>
    );
}