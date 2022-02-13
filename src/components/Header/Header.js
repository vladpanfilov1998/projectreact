import React from 'react';
import {NavLink} from "react-router-dom";

import css from '.././App.module.css';

const Header = () => {
    

    return (
        <div className={css.header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to="/genres">GENRES</NavLink>
            <NavLink to="/movies">MOVIES</NavLink>
        </div>
    );
};

export default Header;