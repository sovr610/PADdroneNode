'use strict';

module.exports = (fn, ...a) => {
    check(fn);
    
    return (...b) => {
        const args = [
            ...a,
            ...b,
        ];
        
        return fn(...args);
    };
};

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be function!');
}
