// Handle all the definitions for
// All of the different types of dispatches
// Prevents typos and throws more intelligent errors

// Meta
export const META = 'meta';
export const RESET_META = 'reset_meta';

// API
export const ENDPOINT = process.env.REACT_APP_DEFAULT_ENDPOINT;
export const SEARCH_BY_QUERY = 'get_data';

// BRANDS
export const DEFAULT_BRAND = process.env.REACT_APP_DEFAULT_BRAND;
export const RESET_BRAND = 'reset_brand';
export const RESET_ALL_BRANDS = 'reset_all_brands';
export const UPDATE_ACTIVE_BRAND = 'update_active_brand';
export const UPDATE_ALL_BRAND_INFO = 'update_all_brand_info';
export const UPDATE_BRAND_ATTRIBUTE = 'update_brand_attribute';
