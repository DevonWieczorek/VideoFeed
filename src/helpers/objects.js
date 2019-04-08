// Grab a nested object by a given key and that key's value
export const getObjectByKeyVal = (arr, key, val) => {
    var index = 0;
    var r = arr.filter((obj, i) => {
        if(obj[key] === val) index = i;
        return obj[key] === val
    })
    return {[index]: r};
}

export const getDeepObjectByKey = (obj, deepKey, val) => {
    var result = null;
    if(obj instanceof Array) {
        for(var i = 0; i < obj.length; i++) {
            result = getDeepObjectByKey(obj[i]);
        }
    }
    else{
        for(var prop in obj) {
            if(prop === deepKey) {
                if(val && obj[prop] === val) {
                    return obj;
                }
                return obj;
            }
            if(obj[prop] instanceof Object || obj[prop] instanceof Array){
                result = getDeepObjectByKey(obj[prop], deepKey);
            }
        }
    }
    return result;
}

export const mergeObjects = (defaultObj, argObj) => {
    let temp = {}

    for(let key in argObj){
        (argObj[key]) ? temp[key] = argObj[key] : defaultObj[key] = argObj[key];
    }

    return temp;
}
