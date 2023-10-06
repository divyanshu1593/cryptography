"use strict";

class ParameterMissingError extends Error {
    constructor(message = 'One of the parameter is missing'){
        super(message);
    }
}

module.exports = {ParameterMissingError}