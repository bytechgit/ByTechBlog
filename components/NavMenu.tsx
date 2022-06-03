import React, { useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script';


const NavMenu = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://bytech.rs/homepage.html">
                        <img src="https://bytech.rs/img/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://bytech.rs/homepage.html">Početna</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://bytech.rs/pages/order.html">
                                    Poruči</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#footer">
                                    Kontakt
                                    <i className="fa-solid fa-angle-down"></i></a>
                            </li>
                        </ul>
                        <form className="d-flex">

                            <a href='https://ntpark.rs/raising-starts/'>
                                <img src="https://bytech.rs/img/Raising%20Starts%20BED%C5%BD.png" alt="" />
                            </a>
                            {/* <img src="https://bytech.rs/img/logo_elfak.png" alt="" /> */}
                            <button className="btn btn-outline-success" type="submit">
                                <a href="https://bytech.rs/pages/somnium.html"> SOMNIUM </a>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMenu