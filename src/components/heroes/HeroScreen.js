import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    const heroe =useMemo(() => getHeroById(heroeId), [heroeId])
        
    if (!heroe){
        return <Redirect to="/" />
    }
    
    const handleAtras = ()=>{
        if (history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }    
    }


    const {id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }= heroe;
   
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/${id}.jpg`}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                alt={superhero}/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul  className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Compañía: </b>{publisher}</li>
                    <li className="list-group-item"><b>Primera aparición: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    onClick={handleAtras}
                    className="btn btn-outline-info">
                    Atrás
                </button>
            </div>
        </div>
    )
}
