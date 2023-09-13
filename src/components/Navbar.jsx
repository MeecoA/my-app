

import { Link, Outlet } from "react-router-dom"

const NavBar = () => {

    return ( 
        <>
        <div className="nav-bar">
            <div className="logo">
            <Link to="/" className="nav-link">
                MoonBook</Link>
            </div>

            <ul>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/cards-local" className="nav-link"> FOLLOWERS(LOCAL) </Link>
                </li>
                <li>
                    <Link to="/followers" className="nav-link">FOLLOWERS(API)</Link>
                </li>
                <li>
                    <Link to="/add-follower" className="nav-link"> ADD FOLLOWERS </Link>
                </li>
            </ul>

        </div>
        <Outlet />
        </>
    )
}

export default NavBar