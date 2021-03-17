import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { isLoggedContext } from '../Components/isLoggedContext';

function NavBar(){
     const {isLogged} = useContext(isLoggedContext);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    {!isLogged &&
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>}
                    {!isLogged &&
                    <li className="nav-item" >
                        <Link className="nav-link" to="/login">Log In</Link>
                    </li>}
                    {isLogged &&
                    <li className="nav-item" >
                        <Link className="nav-link" to="/watched">Watched</Link>
                    </li>}
                    {isLogged &&
                    <li className="nav-item" >
                        <Link className="nav-link" to="/loved">Loved</Link>
                    </li>}
                    {isLogged &&
                    <li className="nav-item" >
                        <Link className="nav-link" to="/watchlist">Watchlist</Link>
                    </li>}
                    {isLogged &&
                    <li className="nav-item" >
                        <Link className="nav-link" to="/dashboard">Profile</Link>
                    </li>}
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar