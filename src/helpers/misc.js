export const randomNumber = (min, max) => {
    min = min || 0;
    max = max || 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const decimal = (num) => {
    let rounded = Math.ceil(num * 10) / 10;

    if((rounded % 1) > 0){
        return rounded;
    }
    else{
        // Strip .0 for even numbers
        return parseInt(rounded);
    }
}

export const abbvNumber = (num) => {
    let div_k = parseFloat(num / 1000);
    let div_m = parseFloat(div_k / 1000);
    let div_b = parseFloat(div_m / 1000);
    let div_t = parseFloat(div_b / 1000);

    if(div_k < 1000){
        return decimal(div_k) + 'K';
    }
    else if(div_m < 1000){
        return decimal(div_m) + 'M';
    }
    else if(div_b < 1000){
        return decimal(div_b) + 'B';
    }
    else{
        return decimal(div_t) + 'T';
    }
}
