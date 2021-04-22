import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    const {q = ''} = queryString.parse (location.search);
    const [formValues, handleInputChange] = useForm ({
        cajaDeTexto: q
    });

    const {cajaDeTexto} = formValues;
    const filtradorDeHeroes = useMemo(() => getHeroesByName(q), [q])

    
    const handleBuscador =(e)=>{
        e.preventDefault();
        history.push(`?q=${cajaDeTexto}`); 
    }
    
    return (
        <div>
            <h1>Búsqueda</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Formulario de búsqueda</h4>
                    <hr/>
                    <form onSubmit={handleBuscador}>
                        <input
                            type= "text"
                            placeholder= "Encuentra tu héroe"
                            className= "form-control"
                            name= "cajaDeTexto"
                            onChange= {handleInputChange}
                            value= {cajaDeTexto}
                            autoComplete = "off"
                        />
                        <button
                            type="submit"
                            className="btn m1 btn-block btn-outline-primary"
                            
                        >
                            buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>resultados</h4>
                    <hr/>
                    {
                        (q==='')
                        &&
                        <div className="alert alert-info">
                            Busca un Héroe
                        </div>
                    }
                    {
                        (q!=='' && filtradorDeHeroes.length ===0)
                        &&
                        <div className="alert alert-danger">
                            No se ha encontrado un éroe con el nombre: <b>{q}</b>
                        </div>
                    }

                     {
                         
                         filtradorDeHeroes.map(heroe =>(
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            /> 
                        ))
                     }

                </div>

            </div>
        </div>
    )
}
