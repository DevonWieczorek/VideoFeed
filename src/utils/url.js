import queryString from 'query-string';

// Query string requires props to be able to access location.search
// Pass in props as ctx when calling query-string related functions

// Return URL param's value by param
export const getURLParam = (ctx, param, location) => {
    if(!location) location = ctx.location.search;
    const urlParams = queryString.parse(location);
    return urlParams[param];
}

// Update url params for given argument and return the full string
export const updatedURLParamString = (ctx, paramObj) => {
    const url = ctx.match.url;
    const urlParams = queryString.parse(ctx.location.search);

    // Loop through the object and update url params
    for(let param in Object.keys(paramObj)){
    	let _key = Object.keys(paramObj)[param];
        urlParams[_key] = paramObj[_key];
    }

    // Re-create the full url with params and return
    let pathWithParams = `${url}?${queryString.stringify(urlParams)}`;
    return pathWithParams;
}

// Update URL params and push into history
export const updateURLParams = (ctx, paramObj) => {
    const pathWithParams = updatedURLParamString(ctx, paramObj);
    ctx.history.push(pathWithParams);
}
