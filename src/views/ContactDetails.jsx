import { Component, useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund'
import { userService } from '../services/user.service'
import { spendBalance } from '../store/actions/user.actions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { MovesList } from '../cmps/MovesList'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { svgService } from '../services/svg.service'
import { utilService } from '../services/util.service'

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

    function getSvg(iconName) {
        return svgService.getSvg(iconName)
    }

    if (!contact || !user) return <div>Loading...</div>
    return (
        <section className='contact-details'>
            <div className='intro'></div>
            <Link className='btn-edit' to={`/contacts/edit/${contact._id}`}>{getSvg('edit')}</Link>
            <img className='user-img' src={utilService.getRandomImg()} alt="user" />
            <div className='contact-content'>
                <h2>{contact.name}</h2>
                <h3>{contact.email}</h3>
                <h3>{contact.phone}</h3>
                <button className='btn-back' onClick={onBack}>Back</button>
                <TransferFund contact={contact} maxCoins={user.coins} onTransferCoins={onTransferCoins} />
                <MovesList title='Your moves' movesList={movesList(user.moves)} />
            </div>
        </section>
    )
}