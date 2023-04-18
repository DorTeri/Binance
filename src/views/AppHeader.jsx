import { Link, NavLink, useNavigate } from "react-router-dom";
import { svgService } from "../services/svg.service";
import { useState } from "react";
import { Deposit } from "../cmps/Deposit";

export function AppHeader(props) {

    const [isScreen, setIsScreen] = useState(false)

    function getSvg(iconName) {
        return svgService.getSvg(iconName)
    }


    return (
        <header className="app-header full main-layout">
            <section className="nav-content flex align-center space-between">
                <NavLink to="/">{getSvg('logo')}</NavLink>
                <nav className="nav-links">
                    <button onClick={() => setIsScreen(true)} className="btn-deposit flex align-center"><span>{getSvg('deposit')}</span> Deposit</button>
                    {/* <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <NavLink to="/statistics">statistics</NavLink>
                    <NavLink to="/signup">Signup</NavLink> */}
                </nav>
            </section>
            <section className={`screen ${isScreen ? 'active' : ''}`}>
                <div className="screen-title flex align-center space-between">
                    <h2>Fund Your Wallet</h2>
                    <button className="btn-close-screen" onClick={() => setIsScreen(false)}>{getSvg('x')}</button>
                </div>
                <Deposit closeScreen={setIsScreen}/>
            </section>
            <section className={`black-screen ${isScreen ? 'active' : ''}`}></section>
        </header>
    )
}


// export const AppHeader = withRouter(_AppHeader)