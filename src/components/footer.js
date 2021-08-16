import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-3 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/sunrisemvmtdc/?utm_medium=copy_link"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/SunriseMvmtDC/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/SunriseMvmtDC"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="mailto:sunrisemovementdc@gmail.com"><i className="fa fa-envelope-o" />sunrisemovementdc@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
