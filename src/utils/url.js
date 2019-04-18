import queryString from 'query-string';

export const getURLParam = (ctx, param, location) => {
    if(!location) location = ctx.location.search;
    const urlParams = queryString.parse(location);
    return urlParams[param];
}

export const updatedURLParamString = (ctx, param, value) => {
    const url = ctx.match.url;
    const urlParams = queryString.parse(ctx.location.search);
    urlParams[param] = value;
    let pathWithParams = `${url}?${queryString.stringify(urlParams)}`;
    return pathWithParams;
}

export const updateURLParams = (ctx, param, value) => {
    const pathWithParams = updatedURLParamString(ctx, param, value);
    ctx.history.push(pathWithParams);
}
