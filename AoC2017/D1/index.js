'use strict';

let fs = require('fs');
let path = require('path');
let _ = require('lodash');
let helper = require('./../helper');

let input = helper.readInput(__dirname + '\\input.txt');

let total = 0;
let lastdigit = -1;
let currentdigit = 0;
let nextdigit = 0;
for (let i = 0, x = input.length; i < x; i++) {
    currentdigit = parseInt(input.charAt(i));
    nextdigit = i + (x / 2);

    if (nextdigit > x-1)
        nextdigit = nextdigit - x;

    nextdigit = input.charAt(nextdigit);

    if (currentdigit == nextdigit)
        total += currentdigit;

    lastdigit = currentdigit;
}
console.log(total);