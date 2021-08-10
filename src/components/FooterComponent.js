import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Dhaka, Bangladesh<br />
		              <i className="fa fa-phone fa-lg"></i>: +8801648142566<br />
		              <i className="fa fa-envelope fa-lg"></i>: <Link to="mailto:info@upwardbd.com">
                         info@upwardbd.com</Link>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/UpwardBD"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/upward.bd/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Upward Bangladesh</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;