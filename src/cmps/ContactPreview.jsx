import React from 'react';
import Avatar from 'react-avatar';
import { Link, useNavigate } from 'react-router-dom';


export function ContactPreview({ contact , removeContact }) {

    const navigate = useNavigate()

    return (
        <article className='contact-preview'>
            <Avatar className='avatar-img' name={contact.name} size="30" />
            <div className='contact-info' onClick={() => navigate(`/contact/${contact._id}`)}>
                <Link to={`/contact/${contact._id}`} className='contact-name'>{contact.name}</Link>
                <span className='contact-email'>{contact.email}</span>
            </div>
            <button onClick={() => removeContact(contact._id)}>X</button>
        </article>
    )
}
