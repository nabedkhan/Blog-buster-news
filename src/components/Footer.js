import React from 'react';

const Footer = () => {
    return (
        <div className="footer-area bg-warning p-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center mb-0 text-white">All Reserved By Nabed Khan &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;