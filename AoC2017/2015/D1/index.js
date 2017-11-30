'use strict';

let fs = require('fs');
let path = require('path');
let _ = require('lodash');
let helper = require('./../../helper');

let floors = helper.readInput(__dirname + '\\input.txt');

let floor = 0;
for (let i = 0, x = floors.length; i < x; i++) {
    if (floors.charAt(i) == "(")
        floor++;
    else{
        floor--;
    if (floor == -1)
        console.log(i + 1);
    }
};
console.log(floor);