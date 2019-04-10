import {ENDPOINT, GET_DATA} from "./types";

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
