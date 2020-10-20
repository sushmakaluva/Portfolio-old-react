import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <nav
                className="navbar fixed-bottom navbar-dark justify-content-center">
                <a className="navbar-brand" href="https://github.com/sushmakaluva"
                ><i className="fa fa-github fa-lg"></i
                ></a>
                <a
                    className="navbar-brand"
                    href="https://www.linkedin.com/in/sushma-reddy-kaluva/"
                ><i className="fa fa-linkedin-square fa-lg"></i
                ></a>
                <a
                    className="navbar-brand"
                    href="mailto:kaluvasushma@gmail.com?Subject=Hello Sushma&Body=I would like to get in touch !"
                ><i className="fa fa-envelope fa-lg"></i
                ></a>
            </nav>
        </div>
    )
}
