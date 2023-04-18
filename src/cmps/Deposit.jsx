import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deposit } from '../store/actions/user.actions'

export function Deposit({closeScreen}) {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)

    function handleChange({ target }) {
        if (target.value < 0) {
            setAmount(0)
            return
        }
        setAmount(target.value)
    }

    function onDeposit() {
        dispatch(deposit(amount))
        setAmount(0)
        closeScreen(false)
    }

    if (!user) {
        navigate('/signup')
        return
    }
    return (
        <section className='deposit-action'>
            <div>
                <input value={amount} onChange={handleChange} type="number" name="coins" id="coins" />
            </div>
            <button className='btn-deposit' onClick={() => onDeposit()}>Deposit</button>
        </section>
    )
}
