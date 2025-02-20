import React from "react"
import { pageLinks, socialLinks } from "../data";


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <div className="nav-logo">
                        <h3>Turismo Angola</h3>
                    </div>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {
                        pageLinks.map((link) => {
                            return(
                                <li key={link.id}>
                                    <a href={link.href} className="nav-icon">
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className="nav-icons">
                    {
                        socialLinks.map((link) => {
                            const {id, href, icon} = link;
                            return(
                                <li key={id}>
                                    <a href={href} className="nav-icon">
                                        <i className={icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar;