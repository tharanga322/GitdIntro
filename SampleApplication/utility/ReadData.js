"use strict";
exports.__esModule = true;
exports.ReadExcel = void 0;
var XLSX = require("xlsx");
var ReadExcel = /** @class */ (function () {
    function ReadExcel() {
    }
    ReadExcel.readDataFromExcel = function (pathFromSrcDir, sheetName) {
        var reader = require('xlsx');
        var workBook = XLSX.readFile("data.xlsx");
        // const workSheet = sheetName ? workBook.Sheets[sheetName] : workBook.Sheets[workBook.SheetNames[0]];
        var workSheet = workBook.SheetNames;
        var data = [];
        for (var i = 0; i < workSheet.length; i++) {
            var temp = reader.utils.sheet_to_json(workBook.Sheets[workSheet[i]]);
            temp.forEach(function (res) {
                data.push(res);
            });
        }
        console.log(data);
    };
    return ReadExcel;
}());
exports.ReadExcel = ReadExcel;
