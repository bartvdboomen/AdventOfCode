﻿var path = require('path');
var process = require('process');
var fs = require('fs');
var _ = require('lodash');

let service = {
    readInput: (fileName) => {
        return fs.readFileSync(path.join(service.getDayPath(), fileName || 'input'), { encoding: 'utf-8' });
    },
    readCommaSeperatedInput: (fileName) => {
        return _.map(service.readInput(fileName).split(/\r\n|\n|\r/), (value) => {
            return value.trim();
        });
    },
    readNewLineSeperatedInput: (fileName) => {
        return _.map(service.readInput(fileName).split(','), (value) => {
            return value.trim();
        });
    },
    getDayPath: () => {
        let day = ('0' + process.argv[2]).substr(-2);
        return path.join(process.cwd(), day);
    }
};

module.exports = service;