import {ENDPOINT, SEARCH_BY_QUERY, UPDATE_BRAND_ATTRIBUTE} from "./types";

// Call API with full query string
// REQUIRED: q= (search)
// Optional: category, brand, page
export const searchByQuery = (brand, queryString) => {
    return dispatch => {
        let _endpoint = `${ENDPOINT}/${brand}${queryString}`;
        console.log(`Calling ${_endpoint}...`);
        fetch(_endpoint)
            .then(res => res.json())
            .then(res => {
                dispatch({type: SEARCH_BY_QUERY, payload: res});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    };
};

// Test function, will need to update once the real endpoint is built
// Call the API and return the default results for a given category
export const searchByCategory = (brand, queryString) => {
    return dispatch => {
        let _endpoint = `${ENDPOINT}/${brand}${queryString}`;
        console.log(`Calling ${_endpoint}...`);
        fetch(_endpoint)
            .then(res => res.json())
            .then(res => {
                dispatch({type: SEARCH_BY_QUERY, payload: res});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    };
};

// Test function, will need to update once the real endpoint is built
// Call the API and return the default results for a given brand 
export const searchByBrandDefault = (brand) => {
    return dispatch => {
        let _endpoint = `${ENDPOINT}/${brand}`;
        console.log(`Calling ${_endpoint}...`);
        fetch(_endpoint)
            .then(res => res.json())
            .then(res => {
                dispatch({type: SEARCH_BY_QUERY, payload: res});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    };
};

// Call our service to get a list of categories for the active brand
export const getCategoriesByBrand = (brand) => {
    const _endpoint = `${ENDPOINT}/${brand}/categories`;
    return dispatch => {
        fetch(_endpoint)
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
