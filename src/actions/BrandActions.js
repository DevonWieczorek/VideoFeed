import {
    RESET_BRAND,
    RESET_ALL_BRANDS,
    UPDATE_ACTIVE_BRAND,
    UPDATE_ALL_BRAND_INFO
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

export const updateAllBrandInfo = (infoObj) => {
    return {type: UPDATE_ALL_BRAND_INFO, payload: infoObj}
}
