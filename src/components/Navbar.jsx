import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://raw.githubusercontent.com/vipinishere/mern-app/main/Mern.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        MERN
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/mern-frontend"><button type="button" className="btn btn-outline-primary">ALL</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add"><button type="button" className="btn btn-outline-warning">ADD</button></Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    );
}

export default Navbar;