import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink ,} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/About'>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
