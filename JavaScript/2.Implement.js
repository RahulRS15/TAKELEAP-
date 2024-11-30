// Implementing map
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Implementing reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Implementing filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Implementing flatMap
Array.prototype.myFlatMap = function(callback) {
    return this.myMap(callback).reduce((acc, val) => acc.concat(val), []);
};

// Example usage
const arr = [1, 2, 3, 4, 5];

console.log('myMap:', arr.myMap(x => x * 2));
console.log('myReduce:', arr.myReduce((acc, x) => acc + x, 0));
console.log('myFilter:', arr.myFilter(x => x > 2));
console.log('myFlatMap:', arr.myFlatMap(x => [x, x * 2]));
