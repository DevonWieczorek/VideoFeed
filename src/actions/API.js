import { BASE_DOMAIN, GET_DATA } from './types';

export const getData = (queryString) => {
    return(dispatch) => {
        fetch(`${BASE_DOMAIN}${queryString}`)
            .then((data) => {
                dispatch({type: GET_DATA, payload: data.json()});
            })
            .catch((err) => {
                console.log(`There was an error getting data from ${BASE_DOMAIN}${queryString}:`, err)
            })
    }
}
