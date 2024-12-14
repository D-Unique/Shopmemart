import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const pMenus: string[] = ['Explore', 'SignUp', 'Login'];
    return (
        <div>
            {pMenus.map((menu, index) => {
                return <NavLink key={index} to={menu}>{menu}</NavLink>

            })
};
        </div>
    );
}
