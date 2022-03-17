import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const [menuBurger, setMenuBurger] = useState(false)

    const handleClick = () => {
        setMenuBurger(!menuBurger)
    }

    return (
        <div className='navigation'>

            <button onClick={handleClick} className="navigation__little-screen"><img src="./assets/menu.png" alt="" height="40px" /></button>

            <ul className='navigation__ul'>
                <NavLink to="#" className="navigation__navlink"> About</NavLink>
                <NavLink to="#" className="navigation__navlink">Projects</NavLink>
                <NavLink to="#" className="navigation__navlink">Contact</NavLink>
            </ul>

            {
                menuBurger && <ul className='navigation__little-screen__ul'>
                    <NavLink className="navigation__little-screen__li" to="#" > About</NavLink>
                    <NavLink className="navigation__little-screen__li" to="#" >Projects</NavLink>
                    <NavLink className="navigation__little-screen__li" to="#" >Contact</NavLink>
                </ul>
            }

        </div >
    );
};

export default Navigation;