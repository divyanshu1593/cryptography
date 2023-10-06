"use strict";

const num2fraction = require('num2fraction');
const {ParameterMissingError} = require('../Errors/errors');

function mod(x, y){
    if (x === undefined || y === undefined) throw new ParameterMissingError();
    if (typeof x != 'number' || typeof y != 'number') throw new TypeError('Invalid type');
    
    if (Math.trunc(x) != x){
        let [numerator, denominator] = num2fraction(x).split('/').map(num => +num);
        let i = 1;
        while ((denominator * i) % y != 1) i++;
        return mod(numerator * i, y);
    }

    if (x < 0) {
        let i = -1;
        while (y*i > x) i--;
        return x - y*i;
    }
    
    return x % y;
}

module.exports = {mod}