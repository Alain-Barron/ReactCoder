import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    const enlaces = [
        "Hogar",
        "Moda",
        "Tecnologia"
    ]

    return (
        <div className='custom-navbar'>
            <Link className="enlace" to={"/"}>
                <p>LOGO</p>
            </Link>
            
            <ul className='enlacesContainer'>
                {enlaces.map((e,id) => 
                    <li  className="liContainer" key={id}>
                        <NavLink activeClassName="active" to={`${e}`}>
                         {e}
                        </NavLink>
                    </li>
                )}
            </ul>
            <CartWidget/>
        </div>
    );
};

export default NavBar;