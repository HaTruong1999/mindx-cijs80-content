import React from "react";
import {NavLink} from 'react-router-dom'

const activeClass = (params) => {
	return params.isActive ? "active-item" : "";
}

export default function Header() {
    return (
        <div className='header-container'>
            <ul>
                <li style={{float:'left'}}><a href="#MEN">MEN</a></li>
                <li>
                    <NavLink to="/admin" className={activeClass}>Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={activeClass}>Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={activeClass}>Home</NavLink>
                </li>
            </ul>
        </div>
    )
}