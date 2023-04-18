import React from 'react'

export function MovesList({ title, movesList }) {

    if(!movesList) return <div>No moves</div>
    return (
        <section className='moves-section'>
            <h3>{title}</h3>
            <div className='moves-container'>
                {movesList.map(move => <div className='moves-list'>
                    <h5>To</h5>
                    <h5>At</h5>
                    <h5>Amount</h5>
                    <h4>{move.to}</h4>
                    <h4>{move.at}</h4>
                    <h4>{move.amount}</h4>
                </div>
                )}
            </div>
        </section>
    )
}
