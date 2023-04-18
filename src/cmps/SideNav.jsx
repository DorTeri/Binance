import React from 'react'
import { NavLink } from 'react-router-dom'
import { svgService } from '../services/svg.service'

export function SideNav() {

    function getSvg(iconName) {
        return svgService.getSvg(iconName)
    }

    return (
        <section className='sidenav-section'>
            <nav>
                <NavLink exact to="/" className='link flex align-center'>
                    {getSvg('home')}
                    <h4>Home</h4>
                </NavLink>
                <NavLink to="/contacts" className='link flex align-center'>
                    {getSvg('contacts')}
                    <h4>Contacts</h4>
                </NavLink>
                <NavLink to="/statistics" className='link flex align-center'>
                    {getSvg('stats')}
                    <h4>Statistics</h4>
                </NavLink>
            </nav>

        </section>
    )
}
