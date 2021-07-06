import React from 'react';

function Header(props) {
    return (
        <React.Fragment>
            <header className="bg-image-header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="cafename">San Jose Cafe</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <nav>
                    <ul className="nav p-1 text-center flex-column flex-md-row">
                        <li className="nav-item">
                            <a className="nav-link active" href="home.html">
                                <i className="fa fa-home" aria-hidden="true"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="menu.html">
                                <i className="fa fa-bars" aria-hidden="true"></i> Menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="order.html">
                                <i className="fa fa-credit-card" aria-hidden="true"></i> Order
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                rel="noreferrer"
                                href="https://www.google.com/maps/place/1141+Ringwood+Ct,+San+Jose,+CA+95131/@37.3944727,-121.8700569,14z/data=!4m5!3m4!1s0x808fcc03b0824993:0x1eadae59bcdf95d7!8m2!3d37.3927107!4d-121.8941903?hl=en&authuser=0"
                                target="_blank"
                            >
                                <i className="fa fa-map-marker" aria-hidden="true"></i> Locate
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">
                                <i className="fa fa-info-circle" aria-hidden="true"></i> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link" href="cart.html">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}
export default Header;
