import React from 'react'

const Footer = () => {
    return (
        <>
            {/* <hr className='top-line' />

            <hr className='bottom-line' /> */}


            <div className="footer" id="footer">
                <div className="container-fluid f">


                    <div className="f-logo">
                        <img src="https://bytech.rs/img/logob.png" alt="" />
                    </div>
                    <div className="row footer-row">
                        <form>
                            <h5>Prijavi se za newsletter</h5>
                            <p>Svakog prvog u mesecu dobijas novo izdanje!</p>
                            <div className="d-flex newsletter">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button"><i className="fa-solid fa-check"></i></button>
                            </div>
                        </form>

                        <div className="col-4">
                            <h5>Idi na</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#top" className="nav-link p-0 text-muted">Na vrh</a></li>
                                <li className="nav-item mb-2"><a href="../homepage.html" className="nav-link p-0 text-muted">Pocetna</a></li>
                                <li className="nav-item mb-2"><a href="../pages/blog.html" className="nav-link p-0 text-muted">Blog</a></li>
                            </ul>
                        </div>

                        <div className="col-4 location-div">
                            <h5>Lokacija</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="https://goo.gl/maps/tHAX1mWh6gk8URgo6" target="_blank"
                                    className="text-muted">
                                    <i className="fa-solid fa-location-dot"></i>
                                </a></li>

                            </ul>
                            <a href="mailto:someone@example.com">
                                <button className="btn btn-primary" type="button">
                                    <h5>e-mail</h5>
                                </button>
                            </a>
                        </div>

                        <div className="col-4">

                            <div className="social-media-links">
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center border-top">
                        <p>&copy; 2022 ByTech
                            DOO. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer