import { META } from './types';

export const updateMeta = (metaInfo) => {
    return {type: META, payload: metaInfo};
}
