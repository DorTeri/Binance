import { Link, NavLink, useNavigate } from "react-router-dom";
import { svgService } from "../services/svg.service";

export function AppHeader({ setIsScreen }) {

    function getSvg(iconName) {
        return svgService.getSvg(iconName)
    }


    return (
        <header className="app-header full main-layout">
            <section className="nav-content flex align-center space-between">
                <NavLink to="/">{getSvg('logo')}</NavLink>
                <nav className="nav-links flex align-center">
                    <button onClick={() => setIsScreen(true)} className="btn-deposit flex align-center"><span>{getSvg('deposit')}</span> Deposit</button>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </section>
        </header>
    )
}


// export const AppHeader = withRouter(_AppHeader)