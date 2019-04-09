import {BASE_DOMAIN, GET_DATA} from "./types";

export const getData = queryString => {
    return dispatch => {
        console.log(`Calling ${BASE_DOMAIN}${queryString}...`);
        fetch(`${BASE_DOMAIN}${queryString}`)
            .then(res => res.json())
            .then(res => {
                dispatch({type: GET_DATA, payload: res});
            })
            .catch(err => {
                console.log(
                    `There was an error getting data from ${BASE_DOMAIN}${queryString}:`,
                    err
                );
            });
    };
};
