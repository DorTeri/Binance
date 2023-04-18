import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactsList({ contacts , removeContact}) {
    if(!contacts) return <div>Loading...</div>
    if(!contacts.length) return <div>No friends to show</div>

    return (
        <section className='contacts-list'>
            {contacts.map(contact => <ContactPreview key={contact.name} contact={contact} removeContact={removeContact}/>)}
        </section>
    )
}
