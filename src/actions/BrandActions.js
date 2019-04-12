import {
    RESET_BRAND,
    RESET_ALL_BRANDS,
    UPDATE_BRAND_PAGE,
    UPDATE_BRAND_SEARCH,
    UPDATE_BRAND_CATEGORY,
    UPDATE_BRAND_QUERY_STRING,
    UPDATE_ACTIVE_BRAND
} from './types';

export const resetBrand = (brand) => {
    if(brand === 'all'){
        return {type: RESET_ALL_BRANDS}
    }
    return {type: RESET_BRAND, payload: brand}
}

export const updateActiveBrand = (brand) => {
    return {type: UPDATE_ACTIVE_BRAND, payload: brand}
}

export const updateBrandPage = (page) => {
    return {type: UPDATE_BRAND_PAGE, payload: page}
}

export const updateBrandSearch = (search) => {
    return {type: UPDATE_BRAND_SEARCH, payload: search}
}

export const updateBrandCategory = (category) => {
    return {type: UPDATE_BRAND_CATEGORY, payload: category}
}

export const updateBrandQueryString = (string) => {
    return {type: UPDATE_BRAND_QUERY_STRING, payload: string}
}
