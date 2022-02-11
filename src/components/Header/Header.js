import React from 'react';
import css from '.././App.module.css';
import {NavLink} from "react-router-dom";

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

