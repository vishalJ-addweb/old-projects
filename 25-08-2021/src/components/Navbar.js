import React from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">My Project</a>
                    <p className="nav-item text-white mx-auto my-2">{props.RandomText}</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/FormTwo">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sign Up</a>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </>);
}

Navbar.propTypes = {
    RandomText: propTypes.string
}