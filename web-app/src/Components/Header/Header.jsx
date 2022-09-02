import React from "react";
import './Header.css';

import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
            <p>Atividade Sandra</p>
            <span>                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/show-data">Dados Salvos</NavLink>
            </span>
        </header>
    )
}

export default Header