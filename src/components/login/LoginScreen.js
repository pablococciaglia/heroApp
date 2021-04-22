import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)
    
    const handleOnclick= ()=>{

        const ultimaRuta = localStorage.getItem('ultimaRuta') || '/';

        dispatch({
            type: types.login,
            payload:{
            name:'Pablo'
            }
        });
        
        history.replace(ultimaRuta);
    }

    return (
        <div className="container mt-5">
            <h1>Pantalla de Login</h1>
            <hr/>
            <button
            className="btn btn-primary"
            onClick={handleOnclick}>
                login
            </button>
        </div>
    )
}
