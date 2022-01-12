import React from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
// import Logout from './log/Logout';

const Navbar = () => {


    return (
        <header>
            <div className="first-header">
                <div className="first-header-corp">
                    <div>
                        <img src="" alt="Logo"/>
                        <p>HaddenCorp</p>
                    </div>
                    <NavLink exact to="">
                        <div className="firts-header-support">
                            <p>Support</p>
                        </div>
                    </NavLink>
                </div>

                <ul className="firts-header-sign">
                    <li>
                        <NavLink exact to="">
                            <p>Connexion</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="">
                            <p>Inscription</p>
                        </NavLink>
                    </li>
                    <li>
                        <p>Langue</p>
                    </li>
                </ul>
            </div>

            <div className="second-header">
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="map">
                                <p>Carte</p>
                            </NavLink>
                        </li>
                        <li>
                            <p>Univers</p>
                        </li>
                    </ul>

                    <NavLink exact to="home">
                        <p>Parasyte</p>
                    </NavLink>

                    <ul>
                        <li>
                            <p>Jeu</p>
                        </li>
                        <li>
                            <NavLink exact to="forum">
                                <p>Forum</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;