"use strict";

const { ParameterMissingError } = require('../Errors/errors');
const {mod} = require('../globalFunctions/modulo');

function encryptCaesarCipher(plainText, key){
    if (plainText === undefined || key === undefined) throw new ParameterMissingError();
    plainText = plainText.toLowerCase();

    let cipherTextCharArr = [];

    for (let char of plainText){
        if (!isAlphabet(char)) throw new TypeError('Only alphabets can be plain text');
        cipherTextCharArr.push(mod((char.charCodeAt()-97 + key), 26) + 65);
    }

    return String.fromCharCode(...cipherTextCharArr);
}

function decryptCaesarCipher(cipherText, key){
    if (cipherText === undefined || key === undefined) throw new ParameterMissingError();
    cipherText = cipherText.toUpperCase();

    let plainTextCharArr = [];

    for (let char of cipherText){
        if (!isAlphabet(char)) throw new TypeError('Only alphabets can be plain text');
        plainTextCharArr.push(mod((char.charCodeAt()-65) - key, 26) + 97);
    }

    return String.fromCharCode(...plainTextCharArr);
}

function isAlphabet(char){
    if ((char.charCodeAt() < 65 || char.charCodeAt() > 90) && (char.charCodeAt() < 97 || char.charCodeAt() > 122)){
        return false
    }
    return true;
}
