import React from 'react'
import { useState } from 'react'

export function TransferFund({ contact, maxCoins, onTransferCoins }) {

    const [amount, setAmount] = useState(0)
    const [isTransfer, setIsTransfer] = useState(false)


    function onSetAmount({ target }) {
        setAmount(target.value)
    }

    return (
        <section className='transfer-section flex align-center'>
            {!isTransfer ? <button className='btn-open' onClick={() => setIsTransfer(!isTransfer)}>
                Transfer coins to {contact.name}
                </button>
                : <><div className='input-wrapper'>
                    <input onChange={onSetAmount} value={amount} type="number" name="amount" id="amount" />
                </div>
                    <button className='btn-transfer' onClick={() => onTransferCoins(contact, amount)}>Trasnfer</button>
                </>}
        </section>
    )
}
