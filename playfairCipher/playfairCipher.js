"use strict";

function encryptPlayfairCipher(plainText, key){
    let keyMatrix = makeKeyMatrix(key);

    console.log(keyMatrix);
}

function makeKeyMatrix(key){
    let keyMatrix = initArrayWithZeroes(5, 5);
    let usedChars = new Set();
    let cnt = 0;

    for (let char of key){
        if (char == 'j') continue;
        if (!usedChars.has(char)){
            usedChars.add(char);
            keyMatrix[Math.floor(cnt/5)][cnt%5] = char;
            cnt++;
        }
    }

    for (let i = 97; i < 123; i++){
        if (i == 106) continue;
        if (!usedChars.has(String.fromCharCode(i))){
            usedChars.add(String.fromCharCode(i));
            keyMatrix[Math.floor(cnt/5)][cnt%5] = String.fromCharCode(i);
            cnt++;
        }
    }

    return keyMatrix;
}

function initArrayWithZeroes(row, col){
    let arr = [];

    for (let i = 0; i < row; i++){
        let tempArr = [];
        for (let j = 0; j < col; j++){
            tempArr.push(0);
        }
        arr.push(tempArr);
    }

    return arr;
}

encryptPlayfairCipher('something', 'divyanshu');