"use strict";
exports.__esModule = true;
exports.ExcelReader = void 0;
var ExcelReader = /** @class */ (function () {
    function ExcelReader() {
    }
    ExcelReader.reader = function () {
        // Requiring the module 
        var reader = require('xlsx');
        // Reading our test file 
        var file = reader.readFile("utility/data.xlsx");
        var data = [];
        var sheets = file.SheetNames;
        for (var i = 0; i < sheets.length; i++) {
            var temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
            temp.forEach(function (res) {
                data.push(res);
            });
        }
        // Printing data 
        console.log(data);
    };
    return ExcelReader;
}());
exports.ExcelReader = ExcelReader;
