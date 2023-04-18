import { Component, useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { ContactsList } from '../cmps/ContactsList'
import { ContactFilter } from '../cmps/ContactFilter';
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadContacts, setFilterBy , removeContact} from '../store/actions/contacts.actions';

export function ContactPage() {

  const contacts = useSelector((storeState) => storeState.contactsModule.contacts)
  const filterBy = useSelector((storeState) => storeState.contactsModule.filterBy)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadContacts())
  }, [])

  function onChangeFilter(filterBy) {
    dispatch(setFilterBy(filterBy))
    dispatch(loadContacts())
  }

  function onRemoveContact(contactId) {
    dispatch(removeContact(contactId))
  }

  if (!contacts) return <div>Loading...</div>
  return (
    <section className='contact-page'>
      <ContactFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
      <ContactsList contacts={contacts} removeContact={onRemoveContact} />
      <NavLink className='btn-add-contact' to="/contacts/edit">Add Friend</NavLink>
    </section>
  )
}

