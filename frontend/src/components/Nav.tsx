import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Nav() {
    const pMenus: string[] = ['Explore', 'SignUp', 'Login'];
    return (
        <div>
            {pMenus.map((menu, index) => {
                return <NavLink key={index} to={menu}>{menu}</NavLink>

            })
            };
            <Button> My button</Button>
        </div>
    );
}
