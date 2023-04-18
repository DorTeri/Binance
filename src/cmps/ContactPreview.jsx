import React from 'react';
import Avatar from 'react-avatar';
import { Link, useNavigate } from 'react-router-dom';
import { svgService } from '../services/svg.service';
import { utilService } from '../services/util.service';


export function ContactPreview({ contact, removeContact }) {

    const navigate = useNavigate()

    function getSvg(iconName) {
        return svgService.getSvg(iconName)
    }

    return (
        <article className='contact-preview'>
            <img src={utilService.getRandomImg()} className='avatar-img' />
            <div className='contact-info' onClick={() => navigate(`/contact/${contact._id}`)}>
                <Link to={`/contact/${contact._id}`} className='contact-name'>{contact.name}</Link>
                <span className='contact-email'>{contact.email}</span>
            </div>
            <button onClick={() => removeContact(contact._id)}>{getSvg('x')}</button>
        </article>
    )
}
