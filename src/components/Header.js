import React from "react";
import Badge from 'react-bootstrap/Badge';
import {NavLink} from 'react-router-dom';

const activeClass = (params) => {
	return params.isActive ? "active-item" : "";
}

export default function Header({ cartNumber }) {
    return (
        <div className='header-container'>
            <ul>
                <li style={{float:'left'}}><a href="#MEN">MEN</a></li>
                <li>
                    <NavLink to="/admin" className={activeClass}>Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={activeClass}>Cart
                        <Badge  style={{marginLeft: 5}} bg="secondary">{cartNumber}</Badge>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={activeClass}>Home</NavLink>
                </li>
            </ul>
        </div>
    )
}