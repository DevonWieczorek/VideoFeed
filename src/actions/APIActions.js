import {ENDPOINT, GET_DATA, UPDATE_BRAND_ATTRIBUTE} from "./types";

export const getData = queryString => {
    return dispatch => {
        console.log(`Calling ${ENDPOINT}${queryString}...`);
        fetch(`${ENDPOINT}${queryString}`)
            .then(res => res.json())
            .then(res => {
                dispatch({type: GET_DATA, payload: res});
            })
            .catch(err => {
                console.log(
                    `There was an error getting data from ${ENDPOINT}${queryString}:`,
                    err
                );
            });
    };
};

export const getCategoriesByBrand = (brand) => {
    const endpoint = `${process.env.REACT_APP_DEFAULT_ENDPOINT}/${brand}/categories`;
    return dispatch => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                let payload = {brand: brand, attribute: 'allCategories', value: res.categories}

                // If an empty response is returned, return an array with an empty object
                // Prevent errors later on in the event chain
                if(!res.categories[0] || Object.keys(res.categories[0]).length === 0){
                    payload['value'] = [{}];
                }
                dispatch({type: UPDATE_BRAND_ATTRIBUTE, payload: payload});
            })
            .catch(err => {
                console.log( `Error fetching categories for ${brand}:`, err );

                // If there is an error, return an array with an empty object
                // Prevent further errors later on in the event chain
                let payload = {brand: brand, attribute: 'allCategories', value: [{}]};
                dispatch({type: UPDATE_BRAND_ATTRIBUTE, payload: payload});
            });
    }
}
