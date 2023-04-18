import { Component, useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund'
import { userService } from '../services/user.service'
import { spendBalance } from '../store/actions/user.actions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { MovesList } from '../cmps/MovesList'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function ContactDetails() {

    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [contact, setContact] = useState(null)

    useEffect(() => {
        loadContact()
    }, [params.id])


    async function loadContact() {
        try {
            const contact = await contactService.getContactById(params.id)
            setContact(contact)
        } catch (error) {
            console.log('error:', error)
        }
    }

    function onBack() {
        navigate('/contacts')
    }

    function onTransferCoins(contact, amount) {
        dispatch(spendBalance(contact, amount))
    }

    function movesList(moves) {
        return moves.filter(move => move.toId === contact._id)
    }

    if (!contact || !user) return <div>Loading...</div>
    return (
        <section className='contact-details'>
            <Link to={`/contacts/edit/${contact._id}`}>Edit</Link>
            <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="user" />
            <h3>Name: {contact.name}</h3>
            <h3>Phone: {contact.phone}</h3>
            <h3>Email: {contact.name}</h3>
            <button onClick={onBack}>Back</button>
            {user.name}
            <TransferFund contact={contact} maxCoins={user.coins} onTransferCoins={onTransferCoins} />
            <MovesList title='Your moves' movesList={movesList(user.moves)} />
        </section>
    )
}