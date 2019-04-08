import { META, RESET_META } from './types';

export const updateMeta = (metaInfo) => {
    return {type: META, payload: metaInfo};
}

export const resetMeta = (metaInfo) => {
    return {type: RESET_META};
}
