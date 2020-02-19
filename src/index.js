function rightSort(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0;
    if (a < b) return -1;
};
exports.min = function min (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    } else {
        array.sort(rightSort);
        return array[0];
    };
    
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    } else {
    array.sort(rightSort).reverse();
    return array[0];
    };
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    } else {
    let all = array.reduce((sum, current) => sum + current, 0);
    return all/array.length;
    };
}
