const path = require('path');
const fse = require('fs-extra');
const xmldom = require('xmldom');
const DBLImport = require('./dbl_metadata_import').DBLImport

console.log(DBLImport);
var inputFile = process.argv[2]
var outputFile = process.argv[3]
console.log({inputFile: inputFile, outputFile: outputFile});
var domParser = new xmldom.DOMParser();
content = domParser.parseFromString(fse.readFileSync(inputFile, 'utf8'), 'text/xml');
const converted = new DBLImport(content);
fse.writeFileSync(outputFile, JSON.stringify(converted.sbMetadata), 'utf8')
