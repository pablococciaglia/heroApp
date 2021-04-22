import {heroes} from "../data/heroes"
export const getHeroesByPublisher= (publisher) =>{
    const validPublishers =['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)){
        throw new Error(`La editorial "${publisher}" no está en el catálogo`);
    }

    return heroes.filter (hero=> hero.publisher === publisher);
} 