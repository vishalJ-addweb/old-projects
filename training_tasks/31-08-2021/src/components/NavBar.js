import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink exact activeClassName="active_class" className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active_class" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active_class" className="nav-link active" aria-current="page" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active_class" className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active_class" className="nav-link active" aria-current="page" to="/Service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active_class" className="nav-link active" aria-current="page" to="/User/vishal/jangid">User</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
