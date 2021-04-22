import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

export const Navbar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout= () => {
        history.replace('/login');
        dispatch({
            type: types.logout,
        });
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/buscador"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

            <div className="">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-link nav-item text-info">
                        {name}
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={handleLogout} 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}