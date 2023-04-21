import React from 'react'
import { Deposit } from "../cmps/Deposit";
import { svgService } from '../services/svg.service';


export function SideScreen({ isScreen, setIsScreen }) {

    function getSvg(iconName) {
        return svgService.getSvg(iconName)
    }


    return (
        <section className='screen-section'>
            <section className={`screen ${isScreen ? 'active' : ''}`}>
                <div className="screen-title flex align-center space-between">
                    <h2>Fund Your Wallet</h2>
                    <button className="btn-close-screen" onClick={() => setIsScreen(false)}>{getSvg('x')}</button>
                </div>
                <Deposit closeScreen={setIsScreen} />
            </section>
            <section className={`black-screen ${isScreen ? 'active' : ''}`}></section>
        </section>
    )
}
