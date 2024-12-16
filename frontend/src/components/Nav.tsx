import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
    const pMenus: string[] = ['Explore', 'SignUp', 'Login'];
    return (
        <div>
            <Navbar>
            {pMenus.map((menu, index) => {
                return <NavLink key={index} to={menu}>{menu}</NavLink>

            })
            };
           </Navbar>
        </div>
    );
}
